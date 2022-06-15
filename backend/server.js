const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());


app.post('/api/register', (req, res) => {
    console.log(req.body);
    res.send({ status: 'ok' });
})

app.listen('4000', () => {
    console.log(`Server started on 4000`);
})