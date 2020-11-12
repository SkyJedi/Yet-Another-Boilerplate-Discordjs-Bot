# Installation and Setup

1. First you will need to have NodeJS installed on your machine. You can find the latest version [here](https://nodejs.org/en/)
2. Click "Clone or Download" at the top of this page. Click "Download Zip" and extract the files
3. Create config.json with the following data
   ```$xslt
   {
     "token": "BOT TOKEN GOES HERE",
     "prefix": "!"
   }
   ```
4. Next create a discord account for your bot [here](https://discordapp.com/developers/applications/me)
    1. Click "New App"
    2. Provide a Name (this is the name people will see when the bot joins a channel) and Description
    3. Click "Create App"
    4. On the new screen click "Create a Bot User"
    6. Under the heading "App Bot User" you will see "Token:click to reveal" Click to reveal it and copy/paste the token into config.json in place of "BOT TOKEN GOES HERE". Be sure to keep this token private.
    7. Under the heading "App Details" Copy the number after "Client ID:".
    8. Replace "CLIENT_ID_GOES_HERE" in this link with the Client ID you copied in the above step 
        `https://discordapp.com/oauth2/authorize?client_id=CLIENT_ID_GOES_HERE&scope=bot`
    9. Paste the edited link into a web browser, select the discord server you wish to add the bot to, and click "Authorize".
 
# Running the bot

Before you first launch the bot run 
```
npm install
```
Then, choose one of the following. 

Running the bot
```
node index.js
```

Running the bot with sharding enabled
```
node start.js
```

Running in debug mode (nodemon)
```npm
nodemon index.js
```
# Configuration File config.json
  1. token
    - this is the login token for your bot
  2. prefix
    - this is the symbol the bot uses to recognize commands. This is set to "!" by default.
