function splitNumberToInteger(numberToSplit, countPart) {
    if (numberToSplit >= countPart && countPart > 0 && typeof numberToSplit === 'number' && typeof countPart === 'number')
    {  
        let necessaryNumbers = new Array(countPart - 1);
        let sumNecessaryNumber = 0;
        for (let i = 0; i < countPart - 1; i++) {
            necessaryNumbers[i] = Math.ceil(Math.random() * (numberToSplit / countPart));
            sumNecessaryNumber += Number(necessaryNumbers[i]);
        }
        necessaryNumbers.push(numberToSplit - sumNecessaryNumber);
        console.log(`Число ${numberToSplit} разбито на ${countPart}, получившееся числа ${necessaryNumbers}`);
    } else {
        console.log(`Число частей для разбиения числа не может быть > исходного числа, и должно быть больше нуля. Передаваемые параметры должны быть типом 'number'`);
    }
}

function splitNumberToFloat(numberToSplit, countPart) {
    if (numberToSplit >= countPart && countPart > 0 && typeof numberToSplit === 'number' && typeof countPart === 'number')
    {  
        let necessaryNumbers = new Array(countPart - 1);
        let sumNecessaryNumber = 0;
        for (let i = 0; i < countPart - 1; i++) {
            necessaryNumbers[i] = (Math.random() * (numberToSplit / countPart)).toFixed(2);
            sumNecessaryNumber += Number(necessaryNumbers[i]);
        }
        necessaryNumbers.push((numberToSplit - sumNecessaryNumber).toFixed(2))
        console.log(`Число ${numberToSplit} разбито на ${countPart}, получившееся числа ${necessaryNumbers}`);
    } else {
        console.log(`Число частей для разбиения числа не может быть > исходного числа, и должно быть больше нуля. Передаваемые параметры должны быть типом 'number'`);
    }
}

splitNumberToInteger(67, 5);
splitNumberToFloat(34, 14);