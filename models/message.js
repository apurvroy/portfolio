const mongoose=require('mongoose');
const messageSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true 
    },
    email:{
        type:String,
        require:true
    },
    response:{
        type:String,
        required:true
    }
});
const Message=mongoose.model('message',messageSchema);
module.exports=Message;