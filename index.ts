import express from "express";

const app = express();

app.get('/', (req, res) => {
    res.send('Hello world from example-service: version 1\n');
})
const PORT = 80;
app.listen(PORT, () => {
    console.log('sample v1');
    console.log('Server running at localhost:' + PORT)
})