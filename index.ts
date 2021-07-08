import express from "express";

const app = express();
const VERSION = '0';

app.get('/', (req, res) => {
    res.send(`Hello world from example-service: version ${VERSION}\n`);
})
const PORT = 80;
app.listen(PORT, () => {
    console.log(`sample version: ${VERSION}`);
    console.log('Server running at localhost:' + PORT)
})