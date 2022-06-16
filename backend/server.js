const express = require('express');
const cors = require('cors');        //Since the backend and frontend are running on two different ports so extra headers are required which is filled by this cors.
const mongoose = require('mongoose');
const User = require('./models/userModel');

const app = express();

app.use(cors());
app.use(express.json());        //if not put this then req.body remains undefined.


mongoose.connect('mongodb://localhost:27017/user-login-page');


app.post('/api/register', async (req, res) => {
    console.log(req.body);
    try {
        await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        })
        res.send({ status: 'ok' });
    } catch(err) {
        console.log(err)
        res.json({ status: 'error', error: 'Duplicate email' });
    }
    
})

app.post('/api/login', async (req, res) => {
    const user = await User.findOne({ email: req.body.email, password: req.body.password })
    if (user) {
        return res.json({ status: 'ok', user: true })
    } else {
        return res.json({ status: 'error', user: false });
    }
})

app.listen('4000', () => {
    console.log(`Server started on 4000`);
})