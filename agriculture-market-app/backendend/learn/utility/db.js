const mongoose = require("mongoose");


const URI = process.env.MONGODB_URI;
//mongoose.connect(URI);

const connectDb = async () => {
    try{
        await mongoose.connect(URI);
        console.log("connection to successfull altlas")

    }catch(error){
        console.error("database connection failed altlas");
        process.exit(0);
    }
}


module.exports = connectDb;