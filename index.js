const express = require('express');
const app = express();

const distDir = __dirname + "/dist/";
app.use(express.static(distDir));

app.get('/*', (req, res) => {
    res.sendFile(path.join(distDir, 'index.html'));
});

app.listen(process.env.PORT || 3000, () => console.log('Example app listening on port 3000!'));