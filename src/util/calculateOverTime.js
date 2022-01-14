import * as transform from './transformators.js'
import { getMandatoryPause, getPause } from './timeFunctions.js'
export default class calculatedOverTime {

    constructor(startTime, actualOvertime, workingTimeSoll, pauseInput, endTime) {
        //adopt values
        this.startTime = startTime
        this.actualOvertime = transform.twoDeimals(actualOvertime)
        this.workingTimeDailySoll = transform.twoDeimals(workingTimeSoll / 5)
        this.endTime = endTime

        //calculate new values
        this.workingTimeDailyIstBrutto = transform.twoDeimals(transform.timeToNumber(endTime) - transform.timeToNumber(startTime))
        let mandatoryPause = getMandatoryPause(pauseInput, this.workingTimeDailyIstBrutto)
        this.pause = getPause(pauseInput, mandatoryPause)
        this.workingTimeDailyIstNetto = transform.twoDeimals(this.workingTimeDailyIstBrutto - transform.timeToNumber(this.pause))
        this.doneOvertime = transform.twoDeimals(this.workingTimeDailyIstNetto - this.workingTimeDailySoll)
        this.overTime = transform.twoDeimals(this.actualOvertime + this.doneOvertime)
    }

}