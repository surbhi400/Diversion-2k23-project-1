const express = require('express');
const path = require('path');
const hbs = require('hbs');
const app = express();
require("./db/conn");
const Signup = require("./models/users");
const port = process.env.PORT || 8000

//public static path
const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

app.set('view engine', 'hbs');
app.set('views',template_path);
hbs.registerPartials(partials_path);

app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.use(express.static(static_path))

//routing
app.get("", (req, res)=> {
    res.render("index")
})
app.get("/signup.hbs", (req, res)=> {
    res.render("signup")
})
app.get("/login.hbs", (req, res)=> {
    res.render("login")
})
app.get("/home.hbs", (req, res)=>{
    res.render("home")
})
app.get("/hostels.hbs", (req, res)=>{
    res.render("hostels")
})
app.get("/pg.hbs", (req, res)=>{
    res.render("pg")
})
app.get("/apartment.hbs", (req, res)=>{
    res.render("apartment")
})

app.post("/home.hbs", async(req, res) => {
    try{
        const password = req.body.password;
        const confirmpassword = req.body.confirmpassword;

        if(password === confirmpassword){
            const usersignupdata = new Signup({
                name : req.body.name,
                email : req.body.email,
                contact : req.body.contact,
                password : password,
                confirmpassword : confirmpassword
            })
            const registered = await usersignupdata.save();
            res.status(201).render("home");
        }
        else{
            res.send("passwords are not matching");
        }
    }catch(err) {
        res.status(400).send(err);
    }
})
// app.get("*", (req, res)=> {
//     res.send("404 error page oops")
// })

app.listen(port, () => {
    console.log(`listening to port at ${port}`)
})