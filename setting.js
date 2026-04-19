import fs from "fs";
import { fileURLToPath } from "url";
import chalk from "chalk";

//——————————[ Owner Settings ]——————————//
global.ytname = "https://www.youtube.com/@shirokode"
global.location = "Cooperative University of Kenya"
global.ownername = "DarkNOTE V1.0"
global.ownernumber = '254741388986'
global.lidownernumber = null // leave empty
global.email = "deadnote@gmail.com"
global.footer = "⚠️ DarkNoTe V1.0 • Digital Service Notice | Use responsibly — WhatsApp bans can be permanent."

//——————————[ Bot Settings ]——————————//
global.botname = 'Darknote V1.0'
global.versi = '1.0.0'
global.foot = '© DARKNOTE V1.0'
global.idSaluran = ""
global.namach = "DARKNOTE BOT"
global.aiUsageCount = global.aiUsageCount || {}
global.autoAiSessions = {}
global.hias = "➤"
global.pairing = "DARKNODE"
global.paystack = {
    key: "sk_live_efe2f997c0212e57e14769b9f0899e2c71e14",
    currency: "KES"
}

//——————————[ Sticker Settings ]——————————//
global.packname = 'DARKNOTE'
global.author = `\nWaBot By Mzazi Tech inc.`
global.themeemoji = '🪀'
global.wm = "⫹⫺ DARKNOTE V1.0"

//——————————[ Link Settings ]——————————//
global.link = "https://whatsapp.com/channel/0029Vb6w7eO9sBIEUYRgeC30"
global.namagc = "Marketplace¹ || Mzazi Official"
global.linkgc = "https://chat.whatsapp.com/Bvdic3yrpFh5kTkk5oc5G0"
global.web = "https://www.mzazi.shop"
global.prefa = ['!','.','🥵','😂']

//——————————[ Payment Settings ]——————————//
global.dana = "Not Available"
global.gopay = "Not Available"
global.ovo = "Not Available"
global.qris = "https://link_qr_mu.desu"
global.an = {
  dana: "Dana name",
  gopay: "Gopay name",
  ovo: "OVO name"
}

//——————————[ Automatic Settings ]——————————//
global.pay = {
  apikey: "APIKEY_KAMU",
  project: "SLUG_KAMU"
}

global.ch2h = {
  api_id: "xxx",
  apikey: "xxx"
}

//——————————[ Push Contact Settings ]——————————//
global.delayjpm = 1000
global.delaypushkontak = 6000

//——————————[ Manage Vercel ]——————————//
global.vercelToken = "xxx"

//——————————[ Manage GitHub ]——————————//
global.githubToken = "xxx"
global.githubUsername = "xxx"

//——————————[ Media URLs ]——————————//
global.gif = "https://files.catbox.moe/22w9jb.mp4"
global.imgthumb = "https://files.catbox.moe/ijf126.jpg"
global.imgmenu = "https://files.catbox.moe/ngb2s9.jpeg"
global.imgdoc = "https://files.catbox.moe/ijf126.jpg"
global.logo = "https://files.catbox.moe/wgx51j.jpeg"
global.vn = "https://files.catbox.moe/wgx51j.jpeg"
global.thumb_welcome = "https://files.catbox.moe/ijf126.jpg"

//——————————[ Panel API V1 ]——————————//
global.egg = ""
global.nestid = "5"
global.loc = "1"
global.domain = "https://public.lordea.tech"
global.apikey = "ptla_kCfKSLNoPvB7FRXG95okfCBxQJEaHkxGSwad4"
global.capikey = "ptlc_ja5bN8T2axI8YdzQLXXcBu0f3mzBLqJ6"

//——————————[ Panel API V2 ]——————————//
global.egg2 = ""
global.nestid2 = ""
global.loc2 = ""
global.domain2 = "https://public.lordeagle.tech"
global.apikey2 = ""
global.capikey2 = ""

//——————————[ Private Panel API ]——————————//
global.egg3 = "5"
global.nestid3 = "5"
global.loc3 = "1"
global.domain3 = "https://public.lordeagle.tech"
global.apikey3 = ""
global.capikey3 = ""

//——————————[ Message Settings ]——————————//
global.loadreact = "🎊"
global.mesg = {
  slr: "This feature is for resellers only! Please contact the owner to purchase access",
  pv: "*[ DarkNode System ]* This feature is only available in private chat",
  gc: "*[ DarkNode System ]* This feature is only for groups",
  own: "*[ DarkNode System ]* This feature is only for the owner",
  adm: "*[ DarkNode System ]* This feature is only for admins",
  botadm: "Make the bot admin first",
  load: "please wait....",
  err: "An error occurred, please try again later..."
}

const __filename = fileURLToPath(import.meta.url);

fs.watchFile(__filename, () => {
  fs.unwatchFile(__filename);
  console.log(chalk.green.bold("New Update: DarkNote V1.0 Settings"));
  import(`${import.meta.url}?update=${Date.now()}`);
});
