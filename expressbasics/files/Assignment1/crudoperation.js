let http=require('http')
let fs=require('fs')
let url=require('url')
let port=8000;

http.createServer((request,response)=>{
    if(request.url==='/' && request.method==='GET'){
        fs.readFile('public/text.html',(err,data)=>{
            if(err){
                response.writeHead(404,{
                    "content-type":"text/Plain"
                })
            response.sendFile(path.join(__dirname,'public/text.html'))
        }else {
            response.writeHead(200,{
                "content-type":"text/html," 
            })
            response.send(`<h4>${data}</h4>`)
        }
    })

}else {
    let postmethod=url.parse(request.url,true);
    console.log(postmethod);

    response.send(JSON.stringify(postmethod.query))
    response.writeHead(404,{
        "content-type":"text/Plain"
    })
    
}

   
 response.send("Invalid URL or invalid HTTP method")
})
  

.listen(port,()=>{
    console.log(`server listening on port ${port}`);
})
