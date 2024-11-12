const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/home.html');
});

app.get('/we', (req, res) => {
    res.sendFile(__dirname + '/public/we.html');
});

app.get('/twentynote', (req, res) => {
    res.sendFile(__dirname + '/public/note.html');
});














app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

const eventSource = new EventSource('/events'); eventSource.onmessage = (event) => { console.log(`New message: ${event.data}`);

