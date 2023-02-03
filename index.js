import express from "express";

const app = express();

app.get('/', (req, res) => {
    res.json([
        {
            "id": 1,
            "title": "Book Review: The bear and the nightingale"
        },
        {
            "id": 2,
            "title": "Game Review: Pokemon brillian diamond"
        },
        {
            "id": 3,
            "title": "Show Review: Alice in borderland"
        },
    ]);
});

app.listen(4000, () => {
    console.log("http://localhost:4000");
})







