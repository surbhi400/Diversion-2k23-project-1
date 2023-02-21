const express = require('express');
const path = require('path');
const bcrypt = require("bcryptjs");
const hbs = require('hbs');
const app = express();
require("./db/conn");

const users = require("./models/users");
const propertydetails = require("./models/addproperty");

const { json } = require("express");
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
app.get("/", (req, res)=> {
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
app.get("/addproperty.hbs", (req, res)=>{
    res.render("addproperty")
})
//signup
app.post("/signup.hbs", async(req, res) => {
    try{
        const Password = req.body.password;
        const confirmpassword = req.body.confirmpassword;

        if(Password === confirmpassword){
            const usersignupdata = new users({
                name : req.body.name,
                email : req.body.email,
                contact : req.body.contact,
                password : Password,
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

//login

app.post("/login", async(req, res) => {
    try{
        const email = req.body.email; //getting user's email
        const password = req.body.password; // getting user's password from the form

        const useremail = await users.findOne({email:email});

        const isMatch = await bcrypt.compare(password, useremail.password);
        
        if(isMatch){ // if password in the database and password entered by the user matched
            res.status(201).render("home");
        }else{
            res.send("invalid login details");
        }

    }catch (error) {
        res.status(400).send("invalid login details")
    }
})

//Sellers Property Details
app.post("/addproperty.hbs", async(req, res)=> {
    try{
        // const selectedPropertyType = req.body.propertytype;
        // console.log(selectedPropertyType);
        const sellerspropertydetails = new propertydetails({
            location : req.body.location,
            name : req.body.name,
            propertytype : req.body.propertytype,
            gender : req.body.gender,
            roomtype : req.body.roomtype,
            budget : req.body.budget,
            wifi : req.body.wifi,
            laundary : req.body.laundary,

        })
        const sellerpropertydetail = await sellerspropertydetails.save();
        // if(selectedPropertyType === pg){
        //     res.status(201).render("pg");
        // }
        // else if(selectedPropertyType === hostel){
        //     res.status(201).render("hostel");
        // }
        // else{
        //     res.status(201).render("apartment");
        // }
        res.status(201).render("home");
    }catch (error) {
        res.status(400).send("Sorry! couldn't add your property")
    }
})


// let countries = require('country-state-city').Country;
// let State = require('country-state-city').State;


// const states = State.getStatesOfCountry("IN");
// states.forEach(state => {
//     console.log(state.name);
// })

app.listen(port, () => {
    console.log(`listening to port at ${port}`)
})