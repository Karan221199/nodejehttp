var http=require('http');
var server=http.createServer((req,res)=>{
	res.setHeader("Content-Type","application/json")
	if(req.url=== '/user')
	{
		res.end("{'name':'rahul','userId:123'}")
	}
	else if(req.url=== '/order')
	res.end("{'name':'rahul'}")
	//console.log(req.url);
})
server.listen(3000);