import * as transform from './transformators.js'

function calculatePauseTime(pauseInput, pauseMandatory) {
    if (transform.timeToNumber(pauseInput) >= transform.timeToNumber(pauseMandatory)) {
        return pauseInput
    } else {
        return pauseMandatory
    }
}
function calculatePauseTime2(pauseInput, workingTimeDailyIstBrutto, workingTimeDailyIstNetto) {
    let pause = "00:00"
            // Pausenzeit und tägliche Netto-Arbeitszeit anhand der jeweiligen Grenzwerte berechnen
            if (transform.timeToNumber(pauseInput) >= 0.75) {
                pause = pauseInput
            } else if (workingTimeDailyIstBrutto >= 9.75) {
                pause = "00:45"
            } else if (workingTimeDailyIstBrutto < 9.75 && workingTimeDailyIstBrutto >= 9.5) {
                pause = setPause(pauseInput, workingTimeDailyIstBrutto, workingTimeDailyIstNetto)
            } else if (workingTimeDailyIstBrutto < 9.5 && workingTimeDailyIstBrutto >= 6.5) {
                pauseInput >= 0.5 ? pause = pauseInput : pause = "00:30"
            } else if (workingTimeDailyIstBrutto < 6.5 && workingTimeDailyIstBrutto >= 6) {
                pause = setPause(pauseInput, workingTimeDailyIstBrutto, workingTimeDailyIstNetto)
            } else {
                pauseInput >= 0 ? pause = pauseInput : pause = "00:00"
            }
    return pause
}

function setPause(pauseInput, workingTimeDailyIstBrutto, workingTimeDailyIstNetto) {
    if (pauseInput >= transform.numberToTime(workingTimeDailyIstBrutto - workingTimeDailyIstNetto)) {
        return pauseInput
    } else {
        return transform.numberToTime(workingTimeDailyIstBrutto - workingTimeDailyIstNetto)
    }
}

export {
    calculatePauseTime as getPause,
    calculatePauseTime2 as getPause2
}