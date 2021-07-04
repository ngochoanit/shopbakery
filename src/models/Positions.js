const mongoose= require('mongoose')
const moment = require('moment');
const Schema = mongoose.Schema;

const ObjectId = Schema.ObjectId;

const Position= new Schema({
    name: { type: String, default: 'khachhang',min:1,max : 255 },
    description: { type: String, default:'Khách hàng',min:1,max : 255},
    createdAt:{ type: Date, default: Date.now},
    updatedAt:{ type: Date, default: Date.now}

})
module.exports = mongoose.model('Position', Position);