const express = require("express");
const app= express();
let port=8000;
app.listen(port,()=>{
    console.log(`app listening on port ${port}`);
})
// app.use((req,res)=>{
//     console.log("new incoming request");
//     res.send("<h1>Iam Nitin</h1>")
// })

// app.get("/",(req,res)=>{
//     res.send("Root path")
// });

// app.get("/apple",(req,res)=>{
//     res.send("Apple path")
// });

// app.get("/orange",(req,res)=>{
//     res.send("orange path")
// });

// PATH PARAMETER
// app.get("/:username",(req,res) =>{
//     let {username}=req.params;
//     res.send(`This account belongs to @${username}`)
// })

// QUERY SEARCH
// app.get("/search",(req,res) =>{
//     let {q}=req.query;
//     res.send(`search for ${q}`);
// });

app.post('/', (req, res) => {
    res.send('Got a POST request')
  })