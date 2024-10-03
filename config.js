//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "losrios755@gmail.com";
global.location = "Njombe,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/Kingjux/Venocyber-md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/12b0fb245e6b8ba4bf718.jpg";
global.devs = "255742862266";
global.sudo = process.env.SUDO || "255742862266";
global.owner = process.env.OWNER_NUMBER || "255742862266";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/3keql8";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUlFWUdKNWlPTk5QblFxV2tCVk5menlJT3ZneTI3NkNGNDYybCt4ZVZWND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiejcrL2d4NElCelRVWUIzNEhWOHFuWm1rdGNtVTVaNkg3dVFDNWxrdmxtND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBTmJqVksyREVVTDQ4QUFzcWJVZjdpYTM0TXFGaU1FdTRneFkvSVpZcjF3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzOUVzdjE2dmpBUmg5bW40WVlScVlLSWlWQS9SSGxtMTVFUktYWmpXNm1VPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVCR0h5R1ZGSDlDOFVlMUJMUEM5UktjOTRIZkVhMDIxdno0N0gybjBjVlU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ii9UNzFhRWFzdHlFVnR3STBhaHJDbmpWZFZLb3RQd1NLS0NiRVZyMHN2bE09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNENHVU41YkxYdk1CMWtQUG9Kc3E0MnVMMVBqVVV4Tk56S2tjb01KanExWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaWdydlpwMmpIVC8vbFU2OTdmVkxOK3NTOXZocjJLUUE2cHFMdG1WTjR4ST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNJNzZJSXJqSTZIQXBFREx4UEx6OWY1Z0ZIMzJ4N0RWSk9idU0zajMvMkV0L3QvQXdzQU0yS3hwU3FZWXJoK2VDTE4wbjJHcGpGQW5FNjkvMjE4NkF3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQzLCJhZHZTZWNyZXRLZXkiOiJNL296bitob1JjZTR1dUtqNkxOWFF6a3pwOEdnM1ZvWnFzbDk3T3NQYVBFPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI1NDc4MjM1NTYyOEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJERkQzQTI0RjE1NzlFRDA0MjExRDE3NzM1NTA1MkMzMSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI3OTg4Njg3fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNTQ3ODIzNTU2MjhAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMzlBRUQwQUY0NDYxRTkxMkM4QjQyMjBDRjEwRDREMjgifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyNzk4ODY5MX0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjU0NzgyMzU1NjI4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjUwNDVBQzk4QkFDMTQ2NjE4MDBGMzIwMzU0NTYxMDQ4In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3Mjc5ODg3MDF9LHsia2V5Ijp7InJlbW90ZUppZCI6IjI1NDc4MjM1NTYyOEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI0QTQzNzBCNTU0Mzc2REQ5MkYyRjZBNTBCMkQzNDhDNSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI3OTg4NzEwfSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNTQ3ODIzNTU2MjhAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNkRFQ0JGOUMyNkQ0QUM1RjkyNjcyMjQ2OTI2N0JDMjIifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyNzk4ODcyMX0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjU0NzgyMzU1NjI4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkY4RDE5RTg0RUE4QzlCRThDRUE1RjBCRDM2QkFEQTk0In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3Mjc5ODg3Mjl9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Im9JOG44ZGRuUksyOTFMZzhxNjlRSVEiLCJwaG9uZUlkIjoiMWU0YTE2MmEtNWZlMC00ZmJjLWJjYTQtMjE2OWE0YmJiNmRmIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkMyaXp6Q2l3d05lOGtUZ3NybTB5ajhKRTFtcz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJyTEJTa2Q4QzBaVUFDV2MyZ3VyeFpuU0pKVjQ9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiODRNWFFEWjIiLCJtZSI6eyJpZCI6IjI1NDc4MjM1NTYyODo2MUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJCaXJlY2gifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0p1NC8rc0hFTDJIL0xjR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImhEN2UyNTNxYis4aFhMNFMzL09kRm4wZkphSFV6WVZQdjVKeFczNTdLRnM9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlVTRzdhZVJYTWtWekxpL3RGOUZ2QnlPNnkxQzhOcDZBSytJTEYrb0ozYXZwd0IzakZQOWhGZ000allmejh2YXArWk5pUm1zeUMvWkF2aHRVT0IrcUN3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJxWUh4aWxueEFiT1orajRIS2hXckpwMHVPUFZtYnVtNUFnNGtwOUlCditrK2dMMWxMcGRISjlYYzZGMEZJcG5TYjY5Q2M4MGRrVVJJSGNneVlVQVVBdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NDc4MjM1NTYyODo2MUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJZUSszdHVkNm0vdklWeStFdC96blJaOUh5V2gxTTJGVDcrU2NWdCtleWhiIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI3OTg4NjgyLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUI3bCJ9"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "you're using first powerful bot to be released in Tanzania| enjoy your time| this is 𝐕𝐄𝐍𝐎𝐂𝐘𝐁𝐄𝐑 𝐌𝐃",
  author: process.env.PACK_AUTHER || "VENOCYBER",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "VENOCYBER-𝐌𝐃",
  ownername: process.env.OWNER_NAME || "VENOCYBER",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-MLNkacQOWsMSwtBZZf0XT3BlbkFJqfgJYOOkiikW5Y4ynpM5",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "VENOCYBER").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
