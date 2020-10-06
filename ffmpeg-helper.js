const ffmpeg = require('fluent-ffmpeg')

module.exports = {
    convertToHls: async (file) => {
        return new Promise((resolve) => {
            ffmpeg(file).addOptions([
                '-profile:v baseline', // for H264 video codec
//                '-level 1.0',
                //'-s 640x360',          // 640px width, 360px height
                '-start_number 0',     // start the first .ts segment at index 0
                '-hls_list_size 10',    // Maxmimum number of playlist entries)
                '-f hls',               // HLS format
                '-hls_wrap 10',
                '-g 30',
                '-hls_time 0.1',
            ]).output('./hls/nctu.m3u8').on('progress', function(stderr) {
    console.log(stderr);
  }).run()
        });
    }
}
