const express=require('express')
var request=require('request');
const app=express()
const port=4000

app.listen(port,()=>{
    console.log(`App listening at ${port}`)
})

app.get('/',(req,res)=>{
    res.status(200);
    res.send('Application Running');
})

app.get('/datasource',function(req,res){
    var newurl='http://34.72.155.232:3000/datasource';
    request(newurl).pipe(res);
});
