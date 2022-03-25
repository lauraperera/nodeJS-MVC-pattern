const{
    QueryUserById,
    QueryListOfUsers,
    DeleteUserById,
} = require("../service/UserTable");

const GetUser = (req, res)=>{
    const userId = req.params.id;
    const user = QueryUserById(userId);
    return res.json(user);
};

const GetAllUsers = (req, res)=>{
    const userList = QueryListOfUsers();
    return res.json(userList);
};

const DeleteUser = (req, res)=>{
    const userId = req.params.id;
    const user = DeleteUser(userId);
    return res.json(user);
};

//posts and http requests
module.exports = {
    GetUser,
    GetAllUsers,
    DeleteUser,
};