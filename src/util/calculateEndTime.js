import * as transform from './transformators.js'
import {getPause} from './timeFunctions.js'
export default class calculatedEndTime {

    constructor(startTime, actualOvertime, workingTimeSoll, pauseInput, doneOvertime) {
        //adopt values
        this.startTime = startTime
        this.actualOvertime = transform.twoDeimals(actualOvertime)
        this.doneOvertime = transform.twoDeimals(doneOvertime)

        //calculate new values
        this.workingTimeDailySoll = transform.twoDeimals(workingTimeSoll / 5) //working time per week divided by 5 days per week
        this.workingTimeDailyIstNetto = this.workingTimeDailySoll + this.doneOvertime
        //ToDo: mandatory pause must be calculated by the SOLL-working Time per day according to the requirements by law 
        this.pause = getPause(pauseInput, "00:30")
        this.workingTimeDailyIstBrutto = this.workingTimeDailyIstNetto + transform.timeToNumber(this.pause)
        this.endTime = transform.numberToTime(transform.timeToNumber(startTime) + this.workingTimeDailyIstBrutto)
        this.overtime = transform.twoDeimals(this.actualOvertime + this.doneOvertime)
    }

}