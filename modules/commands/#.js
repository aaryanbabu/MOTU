const fs = require("fs");
module.exports.config = {
  name: "girlfriend",
    version: "1.0.1",
  hasPermssion: 0,
  credits: "Aaryan", 
  description: "no prefix",
  commandCategory: "No command marks needed",
  usages: "...",
    cooldowns: 100, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  let react = event.body.toLowerCase();
  if(react.includes("gf") ||
     react.includes("Girlfriend") ||
     react.includes("gf") || 
react.includes("GF")) {
    var msg = {
        body: "𝐘𝐄 𝐋𝐎 𝐁𝐀𝐁𝐘 𝐀𝐀𝐏𝐊𝐈 𝐆𝐅 𝐌𝐈𝐋 𝐆𝐘𝐈🌿",
        attachment: fs.createReadStream(__dirname + `/cache/Gf.jpg`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🙃", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
