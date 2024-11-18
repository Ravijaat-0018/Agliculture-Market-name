const User = require("../models/learnusermodel");


const home = async(req, res) => {
    try{
        res.status(200).send('welcome bhai using router q');
    }catch(error){
        console.log(error);
    }
}
// registration logic

const register = async(req, res) => {
    try{
        console.log(req.body);
        const { username, email, phone, password } = req.body;
        const userExist = await User.findOne({email });

        if(userExist) {
            return res.status(400).json({msg: "email already exists"});
        }

        const userCreate = await User.create({ username, email, phone, password });


        
        res.status(200).send({message: userCreate});
       
    }catch(error){
        res.status(500).status("internal server error login");
    }
}

//login logic


const logic = async(req, res) => {
    try{
        const { email, password } = req.body;
        const userExist = await User.findOne({email });
        console.log(userExist);

        if(!userExist) {
            return res.status(400).json({message: "Invalid Credential"});
        }

        const userCreate = await User.create({ username, email, phone, password });


        
        res.status(200).send({message: userCreate});
       
    }catch(error){
        res.status(500).status("internal server error login");
    }
}



module.exports = {home, register};