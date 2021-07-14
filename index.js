const express = require('express');
const mongoose = require('mongoose');
const url = 'mongodb+srv://curd_op:AfNSgyinbqcZYYfx@cluster0.ntqm6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const app = express();

mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology: true});
const con = mongoose.connection;

con.on('open',()=>{
    console.log('conneted ..........');
}); 
app.use(express.json());
const alienRouter = require('./routers/aliens');
app.use('/aliens',alienRouter);
app.listen(9000, ()=>{
    console.log('port start 9000');
});
