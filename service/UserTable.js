const {user_test} = require("../models/UserTest");

//returns user with id
const QueryUserById = (id)=>{
    let user;
    user_test.forEach((userData)=>{
        if(userData.id === Number(id)){
            user = userData;
        }
    });
    return user;
};

//returns list of users
const QueryListOfUsers = ()=>{
    return user_test;
};

//delete user by id
const DeleteUserById = (id)=>{
    user_test.filter((user)=>{
        return user.id !== Number(id);
    });
};

module.exports = {
    QueryUserById,
    QueryListOfUsers,
    DeleteUserById,
};