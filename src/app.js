const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 8000

//public static path
const static_path = path.join(__dirname, "../public");

app.use(express.static(static_path))

//routing
app.get("", (req, res)=> {
    res.send("Hi")
})
app.get("/signup", (req, res)=> {
    res.send("welcome to signup page")
})
app.get("/login", (req, res)=> {
    res.send("welcome to login page")
})
app.get("*", (req, res)=> {
    res.send("404 error page oops")
})

app.listen(port, () => {
    console.log(`listening to port at ${port}`)
})