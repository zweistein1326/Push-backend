const { ObjectId } = require("mongodb");
const { database } = require("../mongo");
const { Group } = require('../models/Groups');

const groups = database.collection('Groups');


const findGroups = (window_size = 10, page = 1, userId = '') => {
    if (userId) {
        // return groups specific to the user
        // filter groups where group location == user location
    }
    else {
        // return recommended groups
    }
}

const findGroupById = async({groupId}) => { 
    const query = { _id: ObjectId(groupId)}
    const user = await groups.findOne(query);
    return user;
}

const createGroup = async (group) => {
    if (group) {
        const new_group = new Group(group)
        const result = await groups.insertOne(new_group);
        return result;
    }
    else {
        throw Error('Error creating group');
    }

}

const filterGroupsBySearchQuery = (search_query) => {
    const query = {}
}

module.exports = {findGroupById, createGroup}