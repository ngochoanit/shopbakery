const mongoose= require('mongoose');

async function  connect(){
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/shopbakerydb', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });
        console.log('connect successfully')
    }
    catch(error){
        console.log('connect fail')
    }
}
module.exports ={connect};
