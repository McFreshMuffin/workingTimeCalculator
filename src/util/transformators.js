// string hat folgendes Format: "00:00"
function transformTimeToNumber(string) {
    return (parseInt(string.substr(0, 2)) + roundNumberToTwoDecimals(parseInt(string.substr(3, 2)) / 60));
}

function transformNumberToTime(numb) {
    let hour = parseInt(numb).toString()
    let minuits = Math.round((parseFloat(numb) - parseInt(numb)) * 60).toString()
    if (hour.length == 1) {
        hour = "0" + hour
    }
    if (minuits.length == 1) {
        minuits = "0" + minuits
    }
    return hour + ":" + minuits
}

function roundNumberToTwoDecimals(numb) {
    return (Math.round(numb * 100) / 100)
}

export {
    transformTimeToNumber as timeToNumber,
    transformNumberToTime as numberToTime,
    roundNumberToTwoDecimals as twoDeimals
};