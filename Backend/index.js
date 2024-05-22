
const express = require("express");
const app = express();
const rootRouter = require("./routes/index")
const cors = require("cors");
app.use(cors());
app.use(express.json())
app.use("/api/v1",rootRouter)

app.get("/",(req,res)=>{
    res.send({
        message : "hello world!"
    })
})

app.listen(3000,()=>{
    console.log("port started listening at 3000")
})