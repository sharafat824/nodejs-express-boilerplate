const userModel = require('../../Models/User/Users');
const { failed, success } = require('../../utils');
const { generateToken } = require('../../utils/helpers/authHelpers');


const regiserUser = async (req,res)=>{
    try {
        const {name,email,password}  = req.body;
        const user = await userModel.create({ name, email, password });
        const data = {
            _id :user.id,
            name:user.name,
            email:user.email,
            token : generateToken(user.id,"1h")
        }
        success(res,"User registered successfully",data)
    } catch (error) {
        failed(res,500,error.message)
    }
}

const login = async (req, res)=>{
    try {
        const {email, password}  = req.body;
        
        const user = await userModel.findOne({email});
        if (!user) return failed(res,404,"Invalid email or password");
        
        const verifyPassword =   await user.comparePassword(password);
        if(!verifyPassword) return failed(res,401,"Invalid password, please try again with correct password");
        
        success(res,"operation success",
            {
                _id: user.id,
                name: user.name,
                email: user.email,
                token: generateToken(user.id,"1h"),
            }
        )

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

module.exports = {regiserUser, login};