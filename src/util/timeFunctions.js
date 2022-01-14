import * as transform from './transformators.js'
export default class standardTime {

    constructor(startTime, actualOvertime, workingTimeSoll, pauseInput, endTime) {
        // Werte übernehmen
        this.startTime = startTime
        this.actualOvertime = transform.twoDeimals(actualOvertime)
        this.workingTimeWeeklySoll = workingTimeSoll
        this.pauseInput = pauseInput
        this.endTime = endTime

        //If pause is not equal the inserted pause, it is displayed with green background
        this.pauseVariant = ''

        // Neue Werte berechnen
        this.workingTimeDailySoll = transform.twoDeimals(workingTimeSoll / 5)
        this.workingTimeDailyIstBrutto = transform.twoDeimals(transform.timeToNumber(endTime) - transform.timeToNumber(startTime))

        // Pausenzeit und tägliche Netto-Arbeitszeit anhand der jeweiligen Grenzwerte berechnen
        if (transform.timeToNumber(pauseInput) >= 0.75) {
            this.pause = pauseInput
            this.setWorkingTimeDailyIstNetto()
        } else if (this.workingTimeDailyIstBrutto >= 9.75) {
            this.pause = "00:45"
            this.setWorkingTimeDailyIstNetto()
        } else if (this.workingTimeDailyIstBrutto < 9.75 && this.workingTimeDailyIstBrutto >= 9.5) {
            this.workingTimeDailyIstNetto = 9
            this.setPause()
        } else if (this.workingTimeDailyIstBrutto < 9.5 && this.workingTimeDailyIstBrutto >= 6.5) {
            pauseInput >= 0.5 ? this.pause = pauseInput : this.pause = "00:30"
            this.setWorkingTimeDailyIstNetto()
        } else if (this.workingTimeDailyIstBrutto < 6.5 && this.workingTimeDailyIstBrutto >= 6) {
            this.workingTimeDailyIstNetto = 6
            this.setPause()
        } else {
            pauseInput >= 0 ? this.pause = pauseInput : this.pause = "00:00"
            this.workingTimeDailyIstNetto = this.workingTimeDailyIstBrutto
        }

        this.workingTimeDailyIstNetto = transform.twoDeimals(this.workingTimeDailyIstNetto)

        //Überstunden berechnen
        this.doneOvertime = transform.twoDeimals(this.workingTimeDailyIstNetto - this.workingTimeDailySoll)
        this.overtime = transform.twoDeimals(this.actualOvertime + this.doneOvertime)

    }

    setPause() {
        if (this.pauseInput >= transform.numberToTime(this.workingTimeDailyIstBrutto - this.workingTimeDailyIstNetto)) {
            this.pause = this.pauseInput
            // this.workingTimeDailyIstNetto -= this.pause
        } else {
            this.pause = transform.numberToTime(this.workingTimeDailyIstBrutto - this.workingTimeDailyIstNetto)
        }
    }
    setPauseVariant() {
        this.pauseVariant = 'success'
    }
    setWorkingTimeDailyIstNetto() {
        console.log(this.pause)
        this.workingTimeDailyIstNetto = this.workingTimeDailyIstBrutto - transform.timeToNumber(this.pause)
    }

}