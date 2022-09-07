const { ObjectId } = require("mongodb");
const { User } = require("../models/user");
const { Users } = require("../models/users");
const { Workout } = require("../models/workout");
const { database } = require("../mongo");

const users = database.collection('Users');

const signUpUser = async (user) => {
    console.log(user);
    const newUser = new User({...user});
    const result = await users.insertOne(newUser);
    return result;
}

const getUserById = async ({ userId }) => {
    const query = { _id: ObjectId(userId)}
    const user = await users.findOne(query);
    return user;
}

const getUserByUsername = async ({ username }) => {
    const query = { username: username }
    const user = await users.findOne(query);
    return user;
}

const getUserByGoogleId = async ({ google_id }) => {
    const query = { google_id }
    const user = await users.findOne(query);
    return user;
}

const getUserByFBId = async ({ fb_id }) => {
    const query = { fb_id }
    const user = await users.findOne(query);
    return user;
}

const updateUser = (user) => { 
    return users.updateUser(user)
}

const addWorkout = ({ userId, workout }) => { 
    const newWorkout = new Workout(workout)
    const updateDocument = {
        $push: {
            "workouts" :  newWorkout
        },
        $inc: {
            // add to overall leaderboard
            pushupCount: workout.pushupCount,
            // add to daily leaderboard
            weeklyPushupCount: workout.pushupCount,
            // add to weekly leaderboard
            dailyPushupCount: workout.pushupCount
        }
    }


    users.updateOne({_id:ObjectId(userId)}, updateDocument)
    // const user = getUserById({ userId });
    // return user.addWorkout(workout)
    return newWorkout

}

module.exports = {signUpUser, getUserById, getUserByUsername, updateUser, addWorkout, getUserByGoogleId, getUserByFBId}