const express =require('express')
const router =express.Router();


router.get('/' ,(req,res)=>{
    res.render('index.html' ,{title:'Primera Web site'});
//res.sendFile(path.join(__dirname , 'views/index.html'));

});
router.get('/Contact' ,(req,res)=>{
    res.render('contact.html', {title:'Primera Web site'});

    //res.sendFile(path.join(__dirname , 'views/index.html'));

});


module.exports= router ;