const WebSocket = require("ws")

const server  = new WebSocket.Server({
  port:8889
})


//web req res 同一个时间内，只能做一件事件 双向通信
//有一个客户端连接 成功了
server.on("connection",(socket)=>{
  console.log("有人连接上来了！")

  //用来监听客户端发送的信息
  socket.on("message",(data)=>{

    //谁发过来的，发给谁
    //socket.send(data)
    // 广播
    server.clients.forEach((key,client)=>{
      client.send(data)
    })
  })
})


console.log("websocket bootstraped on port 6666")
