class Event{
    constructor({id=null, name, description, location, tags, members=[]}) {
        this._id = id;
        this.name = name;
        // this.fullname = fullname;
        this.description = description;
        this.location = location;
        this.createdAt = new Date();
        this.tags = tags;
        this.members = members;
    }

    get getUsername() {
        return this.name; 
    }
    
    get getID() {
        return this._id
    }

    get getLocation() {
        return this.location;
    }
}

module.exports = { Event } 