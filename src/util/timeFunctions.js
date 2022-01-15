import * as transform from './transformators.js'

function calculatePauseTime(pauseInput, pauseMandatory) {
    if (transform.timeToNumber(pauseInput) >= transform.timeToNumber(pauseMandatory)) {
        return { value: pauseInput }
    } else {
        return { value: pauseMandatory, variant: 'success' }
    }
}
function calculateMandatoryPause(workingTimeDailyIstBrutto) {
    let pause = 0
            // Pausenzeit und tägliche Netto-Arbeitszeit anhand der jeweiligen Grenzwerte berechnen
            if (workingTimeDailyIstBrutto >= 9.75) {
                pause = 0.75
            } else if (workingTimeDailyIstBrutto < 9.75 && workingTimeDailyIstBrutto >= 9.5) {
                pause = workingTimeDailyIstBrutto - 9
            } else if (workingTimeDailyIstBrutto < 9.5 && workingTimeDailyIstBrutto >= 6.5) {
                pause = 0.5
            } else if (workingTimeDailyIstBrutto < 6.5 && workingTimeDailyIstBrutto >= 6) {
                pause = workingTimeDailyIstBrutto - 6
            } else {
                pause = 0
            }
    return transform.numberToTime(pause)
}

export {
    calculatePauseTime as getPause,
    calculateMandatoryPause as getMandatoryPause
}