const fs = require("fs");
module.exports.config = {
	name: "simran",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by Ishika", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "reena",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Simran")==0 || event.body.indexOf("@Simran")==0 || event.body.indexOf("SIMRAN")==0 || event.body.indexOf("simran")==0) {
		var msg = {
				body: "😍 𝐘𝐄 𝐋𝐎 𝐒𝐈𝐌𝐑𝐀𝐍 𝐑𝐀𝐍𝐈 𝐀𝐀 𝐆𝐘𝐈⚣︎⚣︎😍😍😍",
				attachment: fs.createReadStream(__dirname + `/cache/simran.jpg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("💎", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
