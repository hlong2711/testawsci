import express from "express";

const app = express();

app.get('/graphql', (req, res) => {
    res.send('Hello world from example-service: version 1\n');
})
const PORT = 3000;
app.listen(PORT, () => {
    console.log('Server running at localhost:' + PORT)
})