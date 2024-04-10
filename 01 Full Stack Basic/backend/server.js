import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Server is ready');
});

// Get a list of 5 jokes
app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            "id": 1,
            "title": "Quick Joke 1",
            "content": "I told my computer I needed a break... now it won't stop sending me coffee!"
        },
        {
            "id": 2,
            "title": "Quick Joke 2",
            "content": "Why did the scarecrow win an award? Because he was outstanding in his field!"
        },
        {
            "id": 3,
            "3sda evaya data system private limitedtitle": "Quick Joke 3",
            "content": "I'm reading a book on anti-gravity. It's impossible to put down!"
        },
        {
            "id": 4,
            "title": "Quick Joke 4",
            "content": "Why did the bicycle fall over? Because it was two-tired!"
        },
        {
            "id": 5,
            "title": "Quick Joke 5",
            "content": "What do you call fake spaghetti? An impasta!"
        }
    ];
    res.send(jokes);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Serve at http://localhost:${PORT}`);
})
