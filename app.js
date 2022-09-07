var express = require('express');
var bodyParser = require('body-parser');
const { Users } = require('./models/users');
const { signUpUser, getUserById, updateUser, addWorkout, getUserByUsername, getUserByGoogleId, getUserByFBId } = require('./controllers/users');
var app = express();
const { database } = require('./mongo');
const { getOverallLeaderboard, getDailyLeaderboard, getWeeklyLeaderboard } = require('./controllers/leaderboard');
const { createGroup } = require('./controllers/Groups');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
/*---------------------ON SERVER RESTART------------------ */

// instantiate a instance of Users


app.listen(3000, () => {
    console.log('TPC-Backend listening on Port 3000')
})

/*----------------------APIs--------------------*/

app.get('/', (req, res) => {
    res.send('Hello!')
})

/*--------------------USERS----------------- */
app.post('/user', (req, res) => {
    const {user} = req.body;
    res.send(signUpUser(user));
})

app.get('/user', async (req, res) => {
    console.log(req.query)
    const { userId, username, google_id, fb_id } = req.query;
    let user = null;
    if (userId) {
        user = await getUserById({userId})
    }
    else if(username){
        user = await getUserByUsername({username})
    }
    else if(google_id) {
        user = await getUserByGoogleId({ google_id })
    }
    else if (fb_id) {
        user = await getUserByFBId({ fb_id })
    }
    console.log('user',user);
    res.send(user)
    
})

app.post('/user/update', (req, res) => { 
    const user = req.body;
    res.send(updateUser(user))
})

app.post('/user/workout', (req, res) => {
    const { userId, workout } = req.body;
    res.send(addWorkout({ userId, workout }));
})

/*----------------END USERS----------------- */

// /*----------------LEADERBOARD--------------- */

// app.get('/leaderboard', async (req, res) => {
//     const { isActive, size } = req.query;
//     let leaderboard = await getOverallLeaderboard(isActive, size)
//     res.send(leaderboard);
// })

// /*----------------LEADERBOARD--------------- */

/* ------------GROUPS------------- */

// Get groups according to passed params
app.get('/groups', (req, res, next) => {
    const { userId, window_size, page } = req.params;
    
})

// Find and return group by groupID
app.get('/group', (req, res, next) => {
    const { groupId } = req.params;
    try{
        const group = findGroupById({ groupId });
        res.status(200).send(group);
    } catch (e) {
        res.status(500).send('Error: ',e)
    }
})

// Create New group
app.post('/group', (req, res, next) => {
    const group = req.body;
    console.log(group);
    try {
        const result = createGroup(group);
        res.status(200).send(result);
    } catch (e) {
        res.status(500).send('Error: ',e)
    }
})


/* ------------GROUPS------------- */

// Find and return group by groupID
app.get('/event', (req, res, next) => {
    const { groupId } = req.params;
})

// Create New group
app.post('/event', (req, res, next) => {
    const { group } = req.body;
})