const Koa = require("koa2")
const Router = require("koa-router")
const app = new Koa()
const router =new Router();

app.use(router.routes()).use(router.allowedMethods());
router.get("/api/users",async(cxt)=>{
  let data= require("./data.json")

      cxt.body=data;
})
app.listen(8000,()=>{
     console.log("server is ready on port 8000")
})

