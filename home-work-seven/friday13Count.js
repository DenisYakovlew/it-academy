const yearFrom = 2000;
const monthFrom = 0; // 0 - January
const dayFrom = 1;
const weekIterator = 7;
const dateFrom = new Date('2000-01-01T00:00:00.000Z');
const dateTo = new Date();

function calculateDaysFromTo(dateFrom, dateTo) {
    const oneDay = 1000 * 60 * 60 * 24; 
    return Math.round((dateTo.getTime() - dateFrom.getTime()) / oneDay)
}

function calculateFirstFriday(year, month, day) {
    let date;
    while (true) {
        date = new Date(Date.UTC(year, month, day)).toUTCString();
        if (date.substring(0, 3) === 'Fri') {
            break;
        }
        day++;
    }
    return day;
}

function calculateCountFriday13(numberFirstFriday, dayTo, iterator) {
    let date;
    let countFriday = 0;
    for (let count = Number(numberFirstFriday); count < dayTo; count += iterator) {
        date = new Date(Date.UTC(yearFrom, monthFrom, count))
        if (date.toUTCString().substring(0, 3) === 'Fri' && date.getDate() === 13) {
            countFriday++;
            console.log(date.toUTCString());
        }
    }
    return countFriday;
}
console.log(`Всегоя пятниц 13х - "${calculateCountFriday13(calculateFirstFriday(yearFrom, monthFrom, dayFrom), calculateDaysFromTo(dateFrom, dateTo), weekIterator)}" штук c 01-01-2000`)