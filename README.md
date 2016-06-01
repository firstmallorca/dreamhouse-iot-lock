DreamHouse Lock
---------------

This sample app provides an easy way to control a [Lockitron Lock](https://lockitron.com/) from the DreamHouse app.  Check out a demo:

<TODO DEMO>

To get started your will need a Lockitron Bolt with the Bridge device that connects the Bolt to the internet.

Setup:

1. Setup the Bold and Bridge
1. Create a new API integration app: https://api.lockitron.com/
1. Copy the testing access token from the newly created app
1. Get your lock's ID from the [Lockitron Dashboard](https://lockitron.com/dashboard) by selecting your lock and copying the ID from the URL

        https://lockitron.com/dashboard/<YOUR LOCK ID>

Run Locally:

1. Run the app in dev mode: `LOCK=<LOCK ID> ACCESS_TOKEN=<ACCESS_TOKEN> npm run dev`
1. Toggle the lock: `http://localhost:5000/toggle`

Run on Heroku:

1. Deploy the app: [![Deploy on Heroku](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)
1. Toggle the lock: `http://<YOUR HEROKU APP>.herokuapp.com/toggle`


### App Architecture

This app is a simple proxy for the Lockitron API to toggle a lock open and closed.  It encapsulates the Lock ID and Access Token for demo purposes.  For a production app you will want to use OAuth to manage API access.  The source for the app is in the `server.js` file.  The app is a Node.js and Express app that handles requests and then calls the Lockitron API to perform the specified action.