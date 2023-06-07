const express = require('express')
const cors = require('cors')
const { default: mongoose } = require('mongoose')
const User = require('./models/User.js')
const bcrypt = require('bcryptjs')
const key = bcrypt.genSaltSync(8)
const jwt = require('jsonwebtoken')
const cparser = require('cookie-parser')
const jwtSecret = 'fasefraw4r5r3wq45wdfgw34twdfg'

const app = express()
require('dotenv').config()

app.use(express.json())
app.use(cparser())

mongoose.connect(process.env.MONGO_URL)

app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173',

}))

app.get('/test', (req, res) => {
 res.json('test ok')   
    
})


app.post('/register', async (req,res) => {
    mongoose.connect(process.env.MONGO_URL);
    const {name, email, password} = req.body;
try{
    const userDocumentation = await User.create({
        name,
        email,
        password: bcrypt.hashSync(password, key),
    })
    res.json(userDocumentation)

} catch(e){
    res.status(422).json(e)
}
   
  });

  app.post('/login', async (req,res) => {
    const{email, password} = req.body
    const userDoc = await User.findOne({email})
    if(userDoc){
        const curPass = bcrypt.compareSync(password, userDoc.password)
    
        if(curPass){
            jwt.sign({
                email:userDoc.email,
                id: userDoc._id
              }, jwtSecret, {}, (err,token) => {
            if (err) throw err;
                
            res.cookie('token', token).json(userDoc)
            })

        } else{

            res.status(422).json("incorrect password")
        }


    }else{
        res.json("not found")
    }

})

app.get('/profile', (req,res)=>{


  mongoose.connect(process.env.MONGO_URL);
const {token} = req.cookies

if(token){
    jwt.verify(token, jwtSecret,{}, async (err, userData) => {
        if(err) throw err
        const {name,email,_id} = await User.findById(userData.id);
        res.json({name, email, _id})
    })
}else{

res.json(null)
}
})

app.listen(4000)