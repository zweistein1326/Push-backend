class Workout{
    constructor({id, startTime=0, endTime=0, duration=0, pushupCount=0, date}) {
        this.id = id;
        this.startTime = startTime;
        this.endTime = endTime;
        this.duration = duration;
        this.pushupCount = pushupCount;
        this.date = new Date();
    }

    get getPushupCount() {
        return this.pushupCount
    }
}

module.exports = {Workout}