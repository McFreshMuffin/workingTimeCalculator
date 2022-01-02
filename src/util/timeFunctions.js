import * as transform from './transformators.js'
export default class standardTime {

    constructor(startTime, actualOvertime, workingTimeSoll, pauseInput, endTime) {
        // Werte übernehmen
        this.startTime = startTime
        this.actualOvertime = transform.twoDeimals(actualOvertime)
        this.workingTimeWeeklySoll = workingTimeSoll
        // this.pauseInput = pauseInput
        this.endTime = endTime

        // Neue Werte berechnen
        this.workingTimeDailySoll = transform.twoDeimals(workingTimeSoll / 5)
        this.workingTimeDailyIstBrutto = transform.twoDeimals(transform.timeToNumber(endTime) - transform.timeToNumber(startTime))

        // Pausenzeit und tägliche Netto-Arbeitszeit anhand der jeweiligen Grenzwerte berechnen
        if (transform.timeToNumber(pauseInput) >= 0.75) {
            this.pause = pauseInput
            this.workingTimeDailyIstNetto = this.workingTimeDailyIstBrutto - transform.timeToNumber(this.pause)
        } else if (this.workingTimeDailyIstBrutto >= 9.75) {
            this.pause = "00:45"
            this.workingTimeDailyIstNetto = this.workingTimeDailyIstBrutto - transform.timeToNumber(this.pause)
        } else if (this.workingTimeDailyIstBrutto < 9.75 && this.workingTimeDailyIstBrutto >= 9.5) {
            this.workingTimeDailyIstNetto = (9).toFixed(2)
            //ToDo Extract to seperated function
            pauseInput >= transform.numberToTime(this.workingTimeDailyIstBrutto - this.workingTimeDailyIstNetto) ? this.pause = pauseInput : this.pause = transform.numberToTime(this.workingTimeDailyIstBrutto - this.workingTimeDailyIstNetto)
        } else if (this.workingTimeDailyIstBrutto < 9.5 && this.workingTimeDailyIstBrutto >= 6.5) {
            pauseInput >= 0.5 ? this.pause = pauseInput : this.pause = "00:30"
            this.workingTimeDailyIstNetto = this.workingTimeDailyIstBrutto - transform.timeToNumber(this.pause)
        } else if (this.workingTimeDailyIstBrutto < 6.5 && this.workingTimeDailyIstBrutto >= 6) {
            this.workingTimeDailyIstNetto = (6).toFixed(2)
            pauseInput >= transform.numberToTime(this.workingTimeDailyIstBrutto - this.workingTimeDailyIstNetto) ? this.pause = pauseInput : this.pause = transform.numberToTime(this.workingTimeDailyIstBrutto - this.workingTimeDailyIstNetto)
        } else {
            pauseInput >= 0 ? this.pause = pauseInput : this.pause = "00:00"
            this.workingTimeDailyIstNetto = this.workingTimeDailyIstBrutto
        }

        this.workingTimeDailyIstNetto = transform.twoDeimals(this.workingTimeDailyIstNetto)

        //Überstunden berechnen
        this.doneOvertime = transform.twoDeimals(this.workingTimeDailyIstNetto - this.workingTimeDailySoll)
        this.overtime = transform.twoDeimals(this.actualOvertime + this.doneOvertime)

    }

}