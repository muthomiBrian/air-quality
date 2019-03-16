const express = require('express');
const path = require('path');
const debug = require('debug')('app');

const app = express();
const port = process.env.PORT || 5000;

app.use('/', express.static(path.join(__dirname, 'dist')));

app.listen(port, () => {
  debug(`Server listening on port ${port}`);
});
