function getTimeToNumber(string) {
    return parseInt(string.substr(0, 2)) + (parseInt(string.substr(3, 2)) / 60);
}

function getNumberToTime(numb) {
    return parseInt(numb).toString() + ":" + Math.round((parseFloat(numb) - parseInt(numb)) * 60).toString()
}

export { getTimeToNumber as timeToNumber, getNumberToTime as numberToTime };