const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Hello World!'));
const distDir = __dirname + "/dist/";
app.use(express.static(distDir));
app.listen(process.env.PORT || 3000, () => console.log('Example app listening on port 3000!'));