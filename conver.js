// conver.js

const ffmpegHelper = require('./ffmpeg-helper');

(async function test(){
   //await ffmpegHelper.convertToHls('http://admin:admin@140.113.179.14:8085/channel1');
   await ffmpegHelper.convertToHls('http://140.113.179.8:5000/live/mark.flv');

   //console.log('ending of rtsp pull');
})();
