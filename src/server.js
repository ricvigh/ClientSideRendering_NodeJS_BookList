const express = require ('express');
const bodyParser = require ('body-parser');
const cors = require ('cors');

const app = express ();

app.use (bodyParser.json ());
app.use (cors ());

app.use ('/home', (req, res) => res.json ({msg: 'HELLO'}));

const port = process.env.PORT || 3000;
app.listen (port, () => {
  console.log (`\x1b[32m(PLAIN) Server listening on port ${port}\x1b[0m`);
});
