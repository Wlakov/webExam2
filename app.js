const express=require('express')
const app=express()
let path=require('path')
app.use(express.static(__dirname+'/'));
app.get('/',(req, res) => {
    res.sendFile(path.join(__dirname+'/index.html'))
})

app.listen(3000)