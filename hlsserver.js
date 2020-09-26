// index.js
const HLSServer = require('hls-server');
const http = require('http');
const fs = require('fs');

const child_process = require('child_process');

flv2hls = child_process.exec('node conver.js');


const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  const html = fs.readFileSync('index.html', 'utf8');
  res.write(html);
  res.end();
});

const hls = new HLSServer(server, {
  path: '/streams', // Base URI to output HLS streams
  dir: 'hls', // Directory that input files are stored
});

server.listen(4000);
console.log('HLS server is running on port 4000');
