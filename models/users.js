const { User } = require("./user");

class Users{
    constructor() {
        this.users = [];
        this.num_users = 0;
    }

    get length_users() {
        return this.num_users;
    }

    addUser(user) {
        
        this.num_users = this.users.push(user);
    }

    getUserById({ userId }) {
        return this.users.find((user)=>user.getID == userId)
    }

    getUserByUsername({ username }) {
        return this.users.find((user)=>user.getUsername == username)
    }

    updateUser(user) {
        const index = this.users.findIndex((item) => user.id == item.getID)
        this.users[index] = new User(user);
        return user;
    }

}

module.exports = {Users}