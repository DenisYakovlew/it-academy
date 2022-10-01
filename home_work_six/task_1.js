function stringCalculation(calcString) {
    if (calcString.length === 6 && isNaN(calcString) === false && calcString.includes(' ') === false) {
        let sumFirstThreeNumber = 0;
        let sumLastThreeNumber = 0;
        Array.from(calcString).slice(0, 3).forEach(item => {
            sumFirstThreeNumber += Number(item);
        });
        Array.from(calcString).slice(3).forEach(item => {
            sumLastThreeNumber += Number(item);
        });
        if (sumFirstThreeNumber === sumLastThreeNumber) {
            console.log('да');
        } else {
            console.log('нет');
        }       
    } else {
        console.log(`Исходная строка "${calcString}" не подходит для вычислений. Нужна строка из 6 цифр`);
    }
}

stringCalculation('875587');