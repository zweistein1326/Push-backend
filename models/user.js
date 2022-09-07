const { Workout } = require("./workout");

class User{
    constructor({_id=null, username, fullname, region, motto, age, google_id, fb_id}) {
        this._id = _id;
        this.username = username;
        // this.fullname = fullname;
        this.region = region;
        this.motto = motto;
        this.age = age;
        this.google_id = google_id;
        this.fb_id = fb_id;
    }

    get getUsername() {
        return this.username; 
    }
    
    get getID() {
        return this.id
    }

    get getPushupCount() {
        return this.pushupCount
    }
    
}

module.exports = {User}