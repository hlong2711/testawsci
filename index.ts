import express from "express";

const app = express();
const VERSION = '0';

app.get('/', (req, res) => {
    res.send(`Hello world from sample-service: version ${VERSION}\n`);
})
const PORT = 80;
app.listen(PORT, () => {
    console.log(`Sample version: ${VERSION}`);
    console.log('Server running at localhost:' + PORT);
})