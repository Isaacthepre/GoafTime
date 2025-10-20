const DAY_IN_YEAR = 365
const DAY_IN_MONTH = 30
const TIME_DIF = 215

function daysToYears(days) {
    let daysLeft = days
    let totalYears = Math.floor(daysLeft / DAY_IN_YEAR)
    daysLeft = (daysLeft % DAY_IN_YEAR)

    let totalMonths = Math.floor(daysLeft / DAY_IN_MONTH)
    daysLeft = (daysLeft % DAY_IN_MONTH)

    daysLeft = Math.round(daysLeft)
    return{totalYears, totalMonths, daysLeft}
}

function settleFromAster(years, months, days) {
    let totalDays = (years * DAY_IN_YEAR) + (months * DAY_IN_MONTH) + days
    totalDays = totalDays*TIME_DIF
    totalDays = Math.round(totalDays)
    let {totalYears, totalMonths, daysLeft} = daysToYears(totalDays)
    return{totalYears, totalMonths, daysLeft, totalDays}
}

function asterFromSettle(years, months, days) {
    let totalDays = (years * DAY_IN_YEAR) + (months * DAY_IN_MONTH) + days
    totalDays = totalDays/TIME_DIF
    totalDays = Math.round(totalDays)
    let {totalYears, totalMonths, daysLeft} = daysToYears(totalDays)
    return{totalYears, totalMonths, daysLeft, totalDays}
}
