
//simple express server.

var exp=require('express');

var app=exp();

app.get('/',(req,res)=>{

    res.send('hello world');

});


app.listen(2000,()=>{

    console.log('server started on port 2000');
});

