// Imports
const env_config = require('dotenv').config()
const SlackBot = require("slackbots");

// Constructor
const bot = new SlackBot({
    token: process.env.TOKEN,
    name: "BUILD Bot"
});

// Global Variables
const botParams = {
    icon_emoji: ":sunglasses:"
};
const channel = "bot_development";



/*
*   Functions-
*/

// Announces BUILD Bot is live in the default channel
function startAnnouncment() {
    bot.postMessageToChannel(
        channel,
        "BUILD Bot is running!",
        botParams
    );
    console.log("BUILD Bot is live!")
}

// Send a message to list of users
// @params: List of userID's, Message String
function sendMessageToList(users, message) {
    users.map(u => {
        bot.postMessageToUser(u, message);
    })
}

// Returns a list of user objects with (name, username, email, id, teamID)
// BROKEN NEEDS TO BE FIXED
function getUsers() {
    let userData = [];
    let rawData = bot.getUsers()._value.members;
    rawData.map(u => {
        if(!u.deleted && !u.is_bot && u.name !== "slackbot") {
            userData.push({
                name: u.real_name,
                userName: u.name,
                email: u.profile.email,
                id: u.id,
                teamID: u.team_id
            });
        }
    })
    return userData;
}



/*
*   Event Handlers
*/

// Start Handler
bot.on("start", startAnnouncment);

bot.on("message", (m) => {
    console.log(m)
})