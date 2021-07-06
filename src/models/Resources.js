const mongoose= require('mongoose');
const Schema= mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Resource= new Schema({
    name:{ type: String},
    description:{ type: String},
    status:{type:Boolean, default:true},
    createdAt:{ type: Date, default: Date.now},
    updatedAt:{ type: Date, default: Date.now}
})
module.exports=mongoose.model('Resource', Resource)