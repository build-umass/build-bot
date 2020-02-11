# BUILD Bot

This is a Slackbot for the BUILD UMass Slack Workspace. This is using the [Slackbots.js](https://github.com/mishk0/slack-bot-api) wrapper for [Slack's Real Time Messaging API](https://api.slack.com/rtm).

**Note-** If you want to use this, you need to create a `.env` file with a valid Slack Token.

### Usage

1. Run the following commands first-
```
  npm install
  touch .env
```

2. Open the `.env` file in a text editor and add the following variable.
```
  TOKEN=xoxb-012345678-ABC1DFG2HIJ3
```
_Note-_ If you're trying to work on making changes to the bot in the BUILD UMass Workspace, please ask the Leadership Team for the token.

3. Running it locally
```
  npm start
```
_Note-_ The `package.json` has been configured with start scripts.

### Deployment

Although it isn't currently deployed, potential deployment options are [Google App Engine](https://cloud.google.com/appengine), [Heroku](https://heroku.com/).