// plugins/play.js

import axios from 'axios';
import yts from 'yt-search';

export default async function play(neo, m, text, mzazireply) {
  try {
    if (!text) return mzazireply('🎵 Example: .play faded');

    let search = await yts(text);
    let video = search.videos[0];

    if (!video) return mzazireply('❌ Song not found');

    let api = `https://api.zenzxz.my.id/download/youtube?url=${encodeURIComponent(video.url)}&type=mp3`;

    let { data } = await axios.get(api);

    if (!data.status || !data.result?.download) {
      return mzazireply('❌ Failed to fetch audio');
    }

    await neo.sendMessage(m.chat, {
      audio: { url: data.result.download },
      mimetype: 'audio/mpeg'
    }, { quoted: m });

  } catch (e) {
    console.log(e);
    mzazireply('❌ Error downloading song');
  }
}
