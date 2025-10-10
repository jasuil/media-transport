const fs = require('fs');
const express = require('express');
const app = express();

app.use(express.static('public'));

app.use('/video', express.static('video'));

m3u8List = [
	'/video/livelist.m3u8',
	'/video/livelist2.m3u8',
	'/video/livelist3.m3u8',
	'/video/livelist4.m3u8',
]

app.get('/get-m3u8', (req, res) => {
	if (m3u8List.length > 0) {
		return res.status(200).sendFile(__dirname + m3u8List.shift());
	} else {
		return res.status(204).send('No Content');
	}
  // return res.status(200).sendFile(`${__dirname}/public/player.html`);
});


const server = app.listen(8888);
