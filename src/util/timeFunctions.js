import * as transform from './transformators.js'
export default class standardTime {

    constructor(startTime, actualOvertime, workingTimeSoll, pauseInput, endTime) {
        // Werte übernehmen
        this.startTime = startTime
        this.actualOvertime = (actualOvertime).toFixed(2)
        this.workingTimeWeeklySoll = workingTimeSoll
        this.pauseInput = pauseInput
        this.endTime = endTime

        // Neue Werte berechnen
        this.workingTimeDailySoll = (workingTimeSoll / 5).toFixed(2)
        this.workingTimeDailyIstBrutto = (transform.timeToNumber(endTime) - transform.timeToNumber(startTime)).toFixed(2)

        // Pausenzeit und tägliche Netto-Arbeitszeit anhand der jeweiligen Grenzwerte berechnen
        if (transform.timeToNumber(pauseInput) >= 0.75) {
            this.pause = pauseInput
            this.workingTimeDailyIstNetto = this.workingTimeDailyIstBrutto - transform.timeToNumber(this.pause)
        } else if (this.workingTimeDailyIstBrutto >= 9.75) {
            this.pause = "00:45"
            this.workingTimeDailyIstNetto = (this.workingTimeDailyIstBrutto - transform.timeToNumber(this.pause)).toFixed(2)
        } else if (this.workingTimeDailyIstBrutto < 9.75 && this.workingTimeDailyIstBrutto >= 9.5) {
            this.workingTimeDailyIstNetto = (9).toFixed(2)
            this.pause = transform.numberToTime(this.workingTimeDailyIstBrutto - this.workingTimeDailyIstNetto)
        } else if (this.workingTimeDailyIstBrutto < 9.5 && this.workingTimeDailyIstBrutto >= 6.5) {
            this.pause = "00:30"
            this.workingTimeDailyIstNetto = (this.workingTimeDailyIstBrutto - transform.timeToNumber(this.pause)).toFixed(2)
        } else if (this.workingTimeDailyIstBrutto < 6.5 && this.workingTimeDailyIstBrutto >= 6) {
            this.workingTimeDailyIstNetto = (6).toFixed(2)
            this.pause = transform.numberToTime(this.workingTimeDailyIstBrutto - this.workingTimeDailyIstNetto)
        } else {
            this.pause = "00:00"
            this.workingTimeDailyIstNetto = this.workingTimeDailyIstBrutto
        }
    }

}