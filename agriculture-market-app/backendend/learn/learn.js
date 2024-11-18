require("dotenv").config();
const express = require("express");
const app = express();
const router = require("../learn/routes/learnroute");
const connectDb = require("./utility/db");

app.use(express.json());
app.use("/api/auth",router);

// app.get("/", (req, res) => {
//     res.status(200).send('welcome bhai');
// });

// app.get("/register", (req, res) => {
//     res.status(200).send('welcome to registration page');
// });


const PORT = 5005;

connectDb().then(() => {
    app.listen(PORT,() =>{
        console.log(`server is running at port: ${PORT}` );
    });
})

