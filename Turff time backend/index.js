// server.js
const express = require('express');
const MongoStore = require('connect-mongo');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session')
const cookie = require('cookie-parser')
// const User = require(''); // Uncommented this line
const User = require('./model/User')

const app = express();
const PORT = process.env.PORT || 3000;

const connection = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/testing') // Updated connection string
        console.log("db connected")
    } catch (error) {
        console.log(`db not connect ${error}`)

    }
}

connection();

app.use(bodyParser.json());
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: 'mongodb://127.0.0.1:27017/testing' }),
    cookie: {
        maxAge: 600000,
        secure: false,
        expires : false
    }
}))

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    maxAge: 3600

}))

// User Registration Route

app.get('/', (req, res) => {
    // if(req.session.Name)
    // {
    //     return res.json({valid:true , Name:req.session.Name})
    // }
    // else
    // {
    //     return res.json({valid:false})
    // }

    res.send("hello")
})
app.post('/register', async (req, res) => {
    const { name, email, password, phone } = req.body;

    if (!name || !email || !password || !phone) {
        return res.status(400).json({ msg: 'Please enter all fields' });
    }

    try {
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ msg: 'User already exists'  });
        }

        const newUser = new User({
            name,
            email,
            password,
            phone
        });

        await newUser.save();
        req.session.User = newUser;

        res.status(201).json({ msg: 'User registered successfully' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});


app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ msg: 'Please enter all fields' });
        }
        const user = await User.findOne({ email }).exec()
        if (user) {

            
            if (password === user.password) {
                req.session.User = user;
                console.log("e-session" , req.session.User)
                res.status(200).json({User:user , Login:true});

            }
            else {
                res.status(400).json({ msg: 'Invalid password' });
            }
        }
        else {
            res.status(400).json({ msg: 'User not found', Login: false });
        }
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
})

app.get('/booking' , (req , res)=>
{
    console.log("e-session" , req.session.User)
                // console.log("model" ,user)
    if(req.session.User)
    {
        console.log(req.session.User)
        return res.json({valid:true , User:req.session.User})
    }
    else
    {
        console.log(req.session.User)
        return res.json({valid:false})
    }
})
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});