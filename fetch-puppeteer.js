const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const dir = path.join(__dirname, 'public', 'showcase');

const sites = [
    { name: 'iohi', url: 'https://get-iohi.com/' }
];

async function autoScroll(page) {
    await page.evaluate(async () => {
        await new Promise((resolve) => {
            var totalHeight = 0;
            var distance = 100;
            var timer = setInterval(() => {
                var scrollHeight = document.body.scrollHeight;
                window.scrollBy(0, distance);
                totalHeight += distance;

                if (totalHeight >= scrollHeight - window.innerHeight) {
                    clearInterval(timer);
                    resolve();
                }
            }, 100);
        });
    });
}

(async () => {
    console.log("Launching browser to fix IOHI screenshots...");
    const browser = await puppeteer.launch({
        headless: "new"
    });

    for (const site of sites) {
        try {
            // Desktop
            console.log(`Capturing Desktop for ${site.name}...`);
            const pageDesktop = await browser.newPage();
            await pageDesktop.setViewport({ width: 1440, height: 900 });
            await pageDesktop.goto(site.url, { waitUntil: 'networkidle2', timeout: 60000 });

            console.log("Scrolling to trigger lazy loads...");
            await autoScroll(pageDesktop);
            await pageDesktop.evaluate(() => window.scrollTo(0, 0));
            await new Promise(r => setTimeout(r, 2000));

            await pageDesktop.screenshot({
                path: path.join(dir, `${site.name}-desktop.jpg`),
                fullPage: true,
                type: 'jpeg',
                quality: 60
            });
            await pageDesktop.close();

            // Mobile (iPhone 13 style viewport)
            console.log(`Capturing Mobile for ${site.name}...`);
            const pageMobile = await browser.newPage();
            await pageMobile.setUserAgent('Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.0 Mobile/15E148 Safari/604.1');
            await pageMobile.setViewport({ width: 390, height: 844, isMobile: true, hasTouch: true });
            await pageMobile.goto(site.url, { waitUntil: 'networkidle2', timeout: 60000 });

            console.log("Scrolling to trigger lazy loads...");
            await autoScroll(pageMobile);
            await pageMobile.evaluate(() => window.scrollTo(0, 0));
            await new Promise(r => setTimeout(r, 2000));

            await pageMobile.screenshot({
                path: path.join(dir, `${site.name}-mobile.jpg`),
                fullPage: true,
                type: 'jpeg',
                quality: 60
            });
            await pageMobile.close();

        } catch (e) {
            console.error(`Error capturing ${site.name}:`, e);
        }
    }

    console.log("Capture complete!");
    await browser.close();
})();
