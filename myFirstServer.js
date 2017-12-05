var express=require("express");
var app=express();
app.get("/",function(req,resp){
  resp.send("Server 3")
});
app.listen(3003,function(){
  console.log("Corriendo en el puerto 3003");
});
