const { database } = require("../mongo");

const workouts = database.collection('Workouts');
const users = database.collection('Users');

const getOverallLeaderboard = async (isActive, size) => {
    const query = {}
    let sort = null
    switch (parseInt(isActive)) {
        case 0:
            sort = { dailyPushupCount: -1 }
        case 1:
            sort = { weeklyPushupCount: -1 }
        case 2:
            sort = { pushupCount: -1 }
    }
    const limit = parseInt(size);
    const cursor = users.find(query).sort(sort).limit(limit);

    let leaderboard = []
    await new Promise(async (resolve, reject) => {
        cursor.forEach((user, index) => {
            leaderboard.push({_id:user._id, username:user.username, pushupCount:user.pushupCount, dailyPushupCount:user.dailyPushupCount, weeklyPushupCount: user.weeklyPushupCount})
            if (index == cursor.length) {
                resolve(0)
            }
        });
    });

    return leaderboard

   
    // console.log(leaderboard);
}

const getWeeklyLeaderboard = async (size) => {
    const query = {}
    
    const limit = size;
    const cursor = users.find(query).sort(sort).limit(limit);
    await cursor.forEach(console.log)
}

const getDailyLeaderboard = async (size) => {
    const query = {}
    const sort = { dailyPushupCount: -1 };
    const limit = size;
    const cursor = users.find(query).sort(sort).limit(limit);
    await cursor.forEach(console.log)
}


module.exports = {getOverallLeaderboard, getWeeklyLeaderboard, getDailyLeaderboard}