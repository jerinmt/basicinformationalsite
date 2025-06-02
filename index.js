const http = require('node:http');
const fs = require('node:fs');


http.createServer(function (req, res) {
    let requiredUrl;
    switch (req.url) {
        case '/index.html':
        case '/':
            requiredUrl = 'index.html';
            break;
        case '/about.html':
            requiredUrl = 'about.html';
            break;
        case '/contact.html':
            requiredUrl = 'contact.html';
            break;
        default:
            requiredUrl = '404.html';
    }
    const data = fs.readFileSync(requiredUrl, 'utf-8');
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
}).listen(8080);