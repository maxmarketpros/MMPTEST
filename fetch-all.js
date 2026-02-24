const https = require('https');
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'public', 'showcase');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

const downloads = [
    { url: 'https://image.thum.io/get/width/1440/crop/900/noanimate/https://get-iohi.com/', out: 'iohi-desktop.jpg' },
    { url: 'https://image.thum.io/get/width/375/crop/812/iphoneX/noanimate/https://get-iohi.com/', out: 'iohi-mobile.jpg' },
    { url: 'https://image.thum.io/get/width/1440/crop/900/noanimate/https://solpooltile.com/', out: 'solpool-desktop.jpg' },
    { url: 'https://image.thum.io/get/width/375/crop/812/iphoneX/noanimate/https://solpooltile.com/', out: 'solpool-mobile.jpg' },
    { url: 'https://image.thum.io/get/width/1440/crop/900/noanimate/https://gopherbustersus.com/', out: 'gopher-desktop.jpg' },
    { url: 'https://image.thum.io/get/width/375/crop/812/iphoneX/noanimate/https://gopherbustersus.com/', out: 'gopher-mobile.jpg' },
    { url: 'https://image.thum.io/get/width/1440/crop/900/noanimate/https://allexteriorsolutions.org/', out: 'allexterior-desktop.jpg' },
    { url: 'https://image.thum.io/get/width/375/crop/812/iphoneX/noanimate/https://allexteriorsolutions.org/', out: 'allexterior-mobile.jpg' },
];

downloads.forEach(d => {
    https.get(d.url, (res) => {
        if (res.statusCode === 301 || res.statusCode === 302 || res.statusCode === 307) {
            https.get(res.headers.location, r2 => r2.pipe(fs.createWriteStream(path.join(dir, d.out))));
        } else {
            res.pipe(fs.createWriteStream(path.join(dir, d.out)));
        }
    });
});
console.log("Downloads initiated...");
