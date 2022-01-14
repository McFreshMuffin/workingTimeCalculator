import * as transform from './transformators.js'
import { getMandatoryPause, getPause } from './timeFunctions.js'
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
        let mandatoryPause = getMandatoryPause(pauseInput, this.workingTimeDailySoll)
        this.pause = getPause(pauseInput, mandatoryPause)
        this.workingTimeDailyIstBrutto = this.workingTimeDailyIstNetto + transform.timeToNumber(this.pause)
        this.endTime = transform.numberToTime(transform.timeToNumber(startTime) + this.workingTimeDailyIstBrutto)
        this.overTime = transform.twoDeimals(this.actualOvertime + this.doneOvertime)
    }

}