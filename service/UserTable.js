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
    let user = id;
    if (id !== null && id !== user_test.id){
        return ('id ')+user+(' deletado com sucesso');
    }
};

module.exports = {
    QueryUserById,
    QueryListOfUsers,
    DeleteUserById,
};