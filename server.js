const fs = require('fs');
const express = require('express');
const app = express();

app.use(express.static('public'));

app.use('/video', express.static('video'));
/*
app.get('/', (req, res) => {
  return res.status(200).sendFile(`${__dirname}/public/player.html`);
});
*/

const server = app.listen(8888);
