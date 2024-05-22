const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://sreelekhag121:Sreelekh%40122@cluster0.jd2jswc.mongodb.net/Paytm")

//creating the schema for users 
const userSchema = new mongoose.Schema({
    username : {
        type: String,
        required: true,
        unique: true,
        trim : true,
        lowercase : true,
        minLength : 3,
        maxLength: 30
    },
    password:{
        type:String,
        required:true,
        minLength:6
    },
    firstname : {
        type: String,
        required: true,
        trim : true,
        maxLength:50
    },
    lastname: {
        type:String,
        required:true,
        trim:true,
        maxLength:50
    }
});

//creating the model for the schema 

const User = mongoose.model('User', userSchema);

const accountSchema = new mongoose.Schema({
    userId :{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required:true
    },
    balance :{
        type: Number,
        required : true
    }
})

const Account = mongoose.model('Account',accountSchema)
module.exports ={
    User,
    Account
}