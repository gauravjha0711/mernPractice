const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: "Why did the scarecrow win an award?",
            text: "Because he was outstanding in his field!"
        },
        {
            id: 2,
            title: "Why don't scientists trust atoms?",
            text: "Because they make up everything!"
        },
        {
            id: 3,
            title: "Why did the bicycle fall over?",
            text: "Because it was two-tired!"
        },
        {
            id: 4,
            title: "What do you call fake spaghetti?",
            text: "An impasta!"
        },
        {
            id: 5,
            title: "Why did the math book look sad?",
            text: "Because it had too many problems."
        }
    ];
    res.json(jokes);
});

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
})