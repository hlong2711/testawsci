import express from "express";

const app = express();
const VERSION = '0';

const TEST_ENV_VAR = process.env.TEST_ENV_VAR;

app.get('/', (req, res) => {
    res.send(`Hello world from sample-service: version ${VERSION}\n`);
})
const PORT = 80;
app.listen(PORT, () => {
    console.log(`Sample version: ${VERSION}, var: ${TEST_ENV_VAR}`);
    console.log('Server running at localhost:' + PORT);
})
// update