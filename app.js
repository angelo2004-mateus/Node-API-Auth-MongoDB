// imports
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const app = express()
app.use(express.json())

const User = require('./models/User')

// Open Route - Public Route
app.get('/', (req, res) => {
    res.status(200).json({msg: 'Welcome To API'})
})

// Private Route
app.get('/user/:id', checkToken, async (req, res) => {
    const id = req.params.id

    const user = await User.findById(id, '-password')
    if(!user) return res.status(404).json({ msg: 'Usuário not Found'}) 

    res.status(200).json({ user })
})

function checkToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if(!token) return res.status(401).json({ msg: 'Denied Acess' })

    try {
        const secret = process.env.SECRET
        jwt.verify(token, secret)
        next()
    } catch(err) {
        res.tatus(400).json({ msg: 'Invalid Token' })
    }
}

// Register User
app.post('/auth/register', async (req, res) => {
    const { name, email, password, confirmpassword } = req.body

    if(!name) return res.status(422).json({ msg: 'Required name' })
    if(!email) return res.status(422).json({ msg: 'Required email' })
    if(!password) return res.status(422).json({ msg: 'Required password' })
    if(password != confirmpassword) return res.status(200).json({ msg: 'The passwords dont match' })

    // Check if user exists
    const userExists = await User.findOne({ email: email })
    if(userExists) return res.status(422).json({ msg: 'Email Already Exists' })

    // Create Password
    const salt = await bcrypt.genSalt(12)
    const passwordHash = await bcrypt.hash(password, salt)

    // Create User
    const user = new User({
        name,
        email,
        password: passwordHash
    })

    try {
        await user.save()
        res.status(201).json({ msg: 'User Created' })

    } catch(err) {
        res.status(500).json({ msg: 'A error ocurred on server', err })
    }
})

// Login User 
app.post('/auth/login', async (req, res) => {
    const { email, password } = req.body

    if(!email) return res.status(422).json({ msg: 'Required email' })
    if(!password) return res.status(422).json({ msg: 'Required password' })

    // Check if User Exist
    const user = await User.findOne({ email: email })
    if(!user) return res.status(404).json({ msg: 'User Not Found' })

    // Check if password match
    const checkPassword = await bcrypt.compareSync(password, user.password)

    if(!checkPassword) return res.status(422).json({ msg: 'Invalid Password' }) 

    try {
        const secret  = process.env.SECRET

        const token = jwt.sign({
            id: user._id
        }, secret)

        res.status(200).json({ msg: 'Authentication successful', token })

    } catch(err) {
        res.status(500).json({ msg: 'A error ocurred on server', err })
    }
})

// Crediencials
const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASS

mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@cluster0.wgkkfbf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
    .then(
    app.listen(3000, () => {
        console.log('Sucess Conection With Database', 3000)
    })
).catch(err => console.log(err))

