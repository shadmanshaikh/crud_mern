import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
// const userModel = require('./Models/Users')
import userModel from './Models/Users.js'

const app = express();
app.use(
	cors({
		origin: "*", // Allow requests only from this origin
		methods: ["GET", "POST", "PUT", "DELETE"], // Allow specific methods
		allowedHeaders: ["Content-Type", "Authorization"], // Allow specific headers
		credentials: true, // Enable cookies and credentials if needed
	})
);
app.use(express.json());

//connecting to moongose

mongoose.connect("mongodb+srv://shady:shadmanshaikh@cluster0.iiehlmt.mongodb.net/crud");

app.post('/createuser' , (req , res) => {
    userModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.get('/users' , (req , res) =>{
    userModel.find({})
    .then(users => res.json(users)).catch(err => console.log(err));
})

app.delete('/deleteuser:id', (req , res) => {
    const id = req.params.id;
    userModel.findByIdAndDelete({ _id: id }).then((res) => res.json(res)).catch(err => res.json(err));
})

app.get('/getuser/:id' , (req , res) => {
    const id = req.params.id;
    userModel.findById({_id :id}).then(users => res.json(users)).catch(err => res.json(err));
})

app.put('/updateuser/:id' , (req, res) => {
    const id = req.params.id;
    userModel.findByIdAndUpdate({_id:id} , {name: req.body.name , email:req.body.email , age : req.body.age}).then((user) => res.json(user)).catch(err => console.log(err));
})

app.listen(3005 , () => {
    console.log("hello express");
})