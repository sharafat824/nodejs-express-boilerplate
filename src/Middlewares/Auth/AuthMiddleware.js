const userModel = require('../../Models/User/Users');
const { failed } = require('../../utils');
const {verifyToken}  = require('../../utils/helpers/authHelpers');
const protect = async(req,res,next)=>{
    let token ;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(' ')[1];
            const decoded = verifyToken(token);
            if (decoded) {
                req.user = await userModel.findById(decoded.id).select('-password');
                next();
            }else{
                failed(res,401,"Not authorized, Token expired");  
            }
        } catch (error) {
            failed(res,401,'Not authorized, '+error.message);
        }
     } else {
        failed(res,401,'Not authorized, please provide auth token');
    }
}

module.exports = protect;