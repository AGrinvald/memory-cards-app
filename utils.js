export const formatTime = function (time) {
    const formatedTime = {}
    for (const [key, value] of Object.entries(time)) {
        formatedTime[key] = value < 10 ? `0${value}` : value
    }

    const { hours, minutes, seconds } = formatedTime
    return `${hours}:${minutes}:${seconds}`
}