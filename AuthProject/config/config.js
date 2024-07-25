const express = require("express");

//live server

let config = 'mongodb://127.0.0.1:27017/authAPI'
let tConfig = 'authAPI'

//local server

// let config =
//   "mongodb+srv://dennisenwiya:hYza3YLhvkA0NJKt@cluster0.593mvi9.mongodb.net/profileAPI";
// let tConfig = "profileAPI";

module.exports = config, tConfig;