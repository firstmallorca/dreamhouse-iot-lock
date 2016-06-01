const process = require('process');
const express = require('express');
const axios = require('axios');

const port = process.env.PORT || 5000;

const lockId = process.env.LOCK;

if (lockId == null) {
  console.log('You must set the LOCK environment variable');
  process.exit(1);
}

const accessToken = process.env.ACCESS_TOKEN;

if (accessToken == null) {
  console.log('You must set the ACCESS_TOKEN environment variable');
  process.exit(1);
}

const app = express();

app.get("/:state", (req, res) => {
  const config = {
    params: {
      access_token: accessToken,
      state: req.params.state
    }
  };

  const url = `https://api.lockitron.com/v2/locks/${lockId}`;

  axios.put(url, null, config)
    .catch(error => error)
    .then(putResponse => res.status(putResponse.status).send(putResponse.data).end());
});

app.listen(port);

console.log('Listening at: http://localhost:' + port);