function splitNumberToInteger(numberToSplit, countPart) {
    if (numberToSplit >= countPart && countPart > 0)
    {  
        let necessaryNumbers = new Array(countPart - 1);
        let sumNecessaryNumber = 0;
        for (let i = 0; i < countPart - 1; i++) {
            necessaryNumbers[i] = Math.ceil(Math.random() * (numberToSplit / countPart))
            sumNecessaryNumber += necessaryNumbers[i]
        }
        necessaryNumbers.push(numberToSplit - sumNecessaryNumber)
        console.log(`Число ${numberToSplit} разбито на ${countPart}, получившееся числа ${necessaryNumbers}`);
    } else {
        console.log(`Число частей для разбиения числа не должно превышать исходное число, и должно быть больше нуля`)
    }
}

function splitNumberToFloat(numberToSplit, countPart) {
    if (numberToSplit >= countPart && countPart > 0)
    {  
        let necessaryNumbers = new Array(countPart - 1);
        let sumNecessaryNumber = 0;
        for (let i = 0; i < countPart - 1; i++) {
            necessaryNumbers[i] = (Math.random() * (numberToSplit / countPart)).toFixed(2);
            sumNecessaryNumber += Number(necessaryNumbers[i])
        }
        necessaryNumbers.push((numberToSplit - sumNecessaryNumber).toFixed(2))
        console.log(`Число ${numberToSplit} разбито на ${countPart}, получившееся числа ${necessaryNumbers}`);
    } else {
        console.log(`Число частей для разбиения числа не должно превышать исходное число, и должно быть больше нуля`)
    }
}

splitNumberToInteger(23, 5)
splitNumberToFloat(15, 3)