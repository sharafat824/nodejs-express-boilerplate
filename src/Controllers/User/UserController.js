const UserModel = require('../../Models/User/Users');
const {success, failed} = require('../../utils/helpers/responseHelper');
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;
const path = require('path');
const { deleteFile } = require('../../utils/helpers/fileHelpers');
    
    const createUser = async (req,res)=>{
        try {
         
            const userdata = {
                name:req.body.name,
                email:req.body.email,
                phone:req.body.phone,
                image:req.file.filename ||'',
                password: req.body.password
            }
            const user = await new UserModel(userdata);
            await user.save();
           success(res,"User created successfully",userdata);
        } catch (error) {
            failed(res,500,error.message)
        }
      
    }
    
    const user = async (req,res)=>{
        try {
            
            const userId = ObjectId.createFromHexString(req.params.id);
            const user = await UserModel.find({ _id: userId });
            success(res,"operation success",user)
        } catch (error) {
            failed(res, 500, error.message);
        }
    }

const userList = async (req,res)=>{
    try {
        const users = await UserModel.aggregate([
            {
                $lookup: {
                    from: "posts",
                    localField: "_id",
                    foreignField: "userId",
                    as: "userPosts"
                }
            }
        ]);
        success(res, "operation success", users); 
        } catch (error) {
        failed(res, 500, error.message); 
    }       
}

const filterUser = async (req,res)=>{
    const query = req.params.key;
    try {
        const data = await UserModel.find({
            "$or":[
                {"name":{$regex:query}},
                {"email":{$regex:query}}
            ]
        });
        success(res,"filtered users", data)
    } catch (error) {
        failed(res, 500, error.message); 
    }
   
}

const deleteUser = async (req,res)=>{
    try {
        const userId = req.params.id;
        const user = await UserModel.findById(userId);
        if (user.image) {
            const imagePath = path.join(__dirname,'../../../public/user/images',user.image);
            if (imagePath) {
               deleteFile(imagePath);
            }
        }
        
        const result = await UserModel.deleteOne({_id: userId});
        success(res,'operation success', result);
    } catch (error) {
        failed(res, 500, error.message); 
    }
}

module.exports = {userList,createUser,user,filterUser,deleteUser}