const mongoose= require('mongoose');
const Schema = mongoose.Schema;

const User= new Schema({
    email:{
        type:String,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
        required: true,
        unique: true},
    password:{
        type:String,
        min:8,
        max:256,
        required: true,
    },    
    firstName:  {
        type:String,
        required: true,
    },
    lastName: {
        type:String,
        required: true,
    },  
    birthday:{
        type:Date,
        default:Date.now,
    },
    avartar:{
        type:String,
    },
    phone:{
        type:String,
        match:/[0-9]/,
    },
    address:{
        type: String,
    },
    role:{
        type:String,
    },
    type:{
        type:Boolean,
        default:false,
    },
    status:{
        type:Boolean,
        default:true,
    }

},{timestamps:true})

module.exports= mongoose.model('User', User);