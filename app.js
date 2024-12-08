const app=require('express')();
const http=require('http').Server(app);
require('dotenv').config();

const mongoose=require('mongoose');
mongoose.connect(process.env.Api);

let user=require('./models/userModel');
async function insert(){
    await user.create({
        name:"ram",
        email:"ramji123@gmail.com"
    })
}

insert();
http.listen(4000,()=>{
    console.log('server is running!')
})
