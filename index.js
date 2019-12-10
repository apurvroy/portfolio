const express=require('express');
const path=require('path');
const port=8000;
const db=require('./config/mongoose');
const Message =require('./models/message');
const app=express();

app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded());
app.use(express.static('assest'));

app.post('/resume',function(req,res){
  Message.create({
    name:req.body.name,
    email:req.body.email,
    response:req.body.response
  },function(err,newMessage){
    if(err){
      console.log('error in creating a Message');
      return ;
    }
    console.log('******',newMessage);
    return res.redirect('back');
  });
});
app.get('/',function(req,res){
return res.render('resume');
});
app.listen(port,function(err){
   if(err)
   console.log(err);
   console.log("the server is running on the port: ",port)
});