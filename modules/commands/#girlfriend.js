const fs = require("fs");
module.exports.config = {
  name: "girlfriend",
    version: "2.1.1",
  hasPermssion: 0,
  credits: "MR.AARYAN", 
  description: "Just Respond",
  commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = async ({ api, event, Users, Currencies, args, utils, client, global }) => {
  var name = await Users.getNameUser(event.senderID);
  var { threadID, messageID } = event;
  let react = event.body.toLowerCase();
  if(react.includes("gf") ||
     react.includes("GF") || react.includes("GIRLFR") || react.includes("GF") ||
react.includes("Girlfr") ||
react.includes("girlfr")) {
    var msg = {
        body: ` ${name}𝗬𝗘 𝗟𝗢 𝗕𝗔𝗕𝗬 𝗔𝗔𝗣𝗞𝗜 𝗚𝗙 𝗔𝗔 𝗚𝗬𝗜 `,attachment: fs.createReadStream(__dirname + `/cache/Gf.jpg`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🙈", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = async ({ api, event, Currencies, args, utils, client, global }) => {

  }
