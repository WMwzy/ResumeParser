const express=require('express')
const util=require('./util')
const app=express()
const path =require('path')
app.use('/static',express.static(__dirname+'/static'))
app.engine('.html',require('ejs').__express);
app.set('views',path.join(__dirname,'pages'));
app.set('view engine','html');
app.get('/',(req,resp)=>{
    ///util.read('pages/index.html')
    ///.then(res=>{
    ///    resp.write(res)
    ///    resp.end()
    ///})
    resp.render('home',{
        tittle:'简历解析'
    })
})

app.get('/all-resume',async(req,resp)=>{
    resp.render('all-resume',{
        tittle:'简历解析'
    })
    const data=await util.read('pages/all-resume.html')
    resp.end(data);
})

app.get('/job-discription',async(req,resp)=>{
    resp.render('jd',{
        tittle:'简历解析'
    })

})

app.listen(3000,()=>{
    console.log("server is strart")
})