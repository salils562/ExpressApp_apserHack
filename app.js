const path=require('path');
const hbs=require('hbs');
const express=require('express');
const { application } = require('express');
const app=express();
const port=80;
// important paths
const staticPath=path.join(__dirname,"/staticFiles");
const partialPath=path.join(__dirname,"/public/partials");
const viewsPath=path.join(__dirname,"/public/views");
// use middleware
app.use(express.static(staticPath));
hbs.registerPartials(partialPath);
app.set('view engine','hbs');
app.set("views",viewsPath);

// get requests
app.get('/',(req,res)=>{
res.status(200).render('index');
});
app.get('/team',(req,res)=>{
res.status(200).render('team');
});
app.get('/clients',(req,res)=>{
res.status(200).render('clients');
});
app.get('*',(req,res)=>{
res.status(404).render('error404');
});
app.listen(port,'127.0.0.1',()=>{
console.log(`listening on port http://127.0.0.1:${port}`)
});
