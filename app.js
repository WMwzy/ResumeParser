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
        tittle:'简历解析|首页'
    })
})

app.get('/all-resume',async(req,resp)=>{
    const infos=[
        {img:'/static/upload/pic/杨海纳.jpg',tag:'1',name:'1',age:1,edu:'1',work:'1',content:'1'},
        {img:'/static/upload/pic/杨海纳.jpg',tag:'2',name:'2',age:18,edu:'2',work:'2',content:'2'},
    ]
    resp.render('all-resume',{
        tittle:'简历解析|人才库',infos:infos
    })
    const data=await util.read('pages/all-resume.html')
    resp.end(data);
})


app.get('/job-discription',async(req,resp)=>{
    resp.render('jd',{
        tittle:'简历解析|人岗匹配'
    })

})

app.listen(3000,()=>{
    console.log("server is strart")
})