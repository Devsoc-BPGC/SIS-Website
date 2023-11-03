require('dotenv').config();
const mongoose = require('mongoose')

const FormSchema = new mongoose.Schema({
    prefix : String,
    firstName : String,
    lastName : String,
    email : String,
    registrationType: String,
    company: String,
    jobTitle: String,
    address: String,
    country: String,
    city: String,
    state: String,
    zip: String,
    phone: Number,
    gadd: Boolean,
    gfirstName: String,
    glastName: String,
    gemail: String,
});

const Form = mongoose.model('FormData',FormSchema);

export default async function handler(req, res) {
    try{
        await mongoose.connect(process.env.MONGO_URI);
        const form = new Form(req.body);
        await form.save();
        await mongoose.disconnect();
        return res.status(200).send("success");
    }catch(err){
        console.log(err);
        return res.status(500).send("internal server error");
    }
}