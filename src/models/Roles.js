const mongoose= require('mongoose')
const Schema = mongoose.Schema;

const ObjectId = Schema.ObjectId;

const Role= new Schema({
    name: { 
        type: String 
    },
    description: { 
        type: String,max : 255
    },
    permissions:{
        type:Array
    },
    level:{
        type:Number,
    },
    status:{
        type:Boolean,
        default:'true'
    }
   

},{timestamps:true})
module.exports = mongoose.model('Role', Role);