const { ObjectId } = require("mongodb");
const { database } = require("../mongo");
const { Event } = require('../models/Events');

const events = database.collection('Events');
 

const findEvents = (window_size = 10, page = 1, userId = '') => {
    if (userId) {
        // return events specific to the user
        // filter events where event location == user location
    }
    else {
        // return recommended events
    }
}

const findEventById = async({eventId}) => { 
    const query = { _id: ObjectId(eventId)}
    const user = await events.findOne(query);
    return user;
}

const createEvent = async (event) => {
    if (event) {
        const new_event = new Event(event)
        const result = await events.insertOne(new_event);
        return result;
    }
    else {
        throw Error('Error creating event');
    }

}

const filterEventsBySearchQuery = (search_query) => {
    const query = {}
}

module.exports = {findEventById, createEvent}