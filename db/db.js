const mongoose = require('mongoose');
require('dotenv').config();
const DB = process.env.DB
mongoose.connect(DB)

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected")
})