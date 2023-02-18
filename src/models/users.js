const mongoose = require("mongoose")

const usersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique:true
    },
    contact: {
        type: Number,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    Confirmpassword: {
        type: String,
        required: true
    }
})

const Signup = new mongoose.model("userdata", usersSchema);

module.exports = Signup;