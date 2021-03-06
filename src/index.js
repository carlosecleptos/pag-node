const express=require('express');
const app=express();
const path =require('path');
const { dirname } = require('path');

//settiing;
app.set('port', 3000);
app.set('views',path.join(__dirname , 'views'));
app.engine('html',require('ejs').renderFile);
app.set('view engine' ,'ejs');


app.set('view engine','ejs');
//middlewares

// static files
app.use(express.static(path.join(__dirname ,'public')));

//routes
app.use(require('./routes/index'));
// listening servidor
app.listen(app.get ('port') ,()=>{
    console.log('server on port ',app.get('port') );
});

