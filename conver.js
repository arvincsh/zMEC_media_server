// conver.js

const ffmpegHelper = require('./ffmpeg-helper');

(async function test(){
   //await ffmpegHelper.convertToHls('http://admin:admin@140.113.179.14:8085/channel1');
   await ffmpegHelper.convertToHls('http://192.168.173.181:5000/live/nctu.flv');

   //console.log('ending of rtsp pull');
})();
