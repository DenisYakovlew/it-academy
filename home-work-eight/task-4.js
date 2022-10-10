let getArrayFromNumber = (number) => { return Array(...String(number)) }

function checkRepeatNumber(number) {
    const arrayNumber = getArrayFromNumber(number);
    let checkCount = 0;
    arrayNumber.forEach(item => {
        arrayNumber.forEach(checkNumber => {
            if (item === checkNumber) {
                checkCount++;
            }
        });	
    });
    if (checkCount > arrayNumber.length) return true;
}

function checkNumberConditions(firstNumber, secondNumber) {
    let equalValueCount = 0;
    let equalValuePositionCount = 0;
    const firstArrayNumber = getArrayFromNumber(firstNumber);
    const secondArrayNumber = getArrayFromNumber(secondNumber);
    if (firstArrayNumber.length !== 4 || secondArrayNumber.length !== 4) {
        return `Числа должны быть 4х значные!`
    }
    if (checkRepeatNumber(firstNumber) || checkRepeatNumber(secondNumber)) {
        return `Числа в цифрах не должны повторяться!`
    }
    for (let firstArrayCount = 0; firstArrayCount < firstArrayNumber.length; firstArrayCount++) {
        for (let secondArrayCount = 0; secondArrayCount < secondArrayNumber.length; secondArrayCount++) {
            if (firstArrayNumber[firstArrayCount] === secondArrayNumber[secondArrayCount]) {
                if (firstArrayCount === secondArrayCount) {
                    equalValuePositionCount++;
                } else {
                    equalValueCount++;
                }            
            }
        }
    }
    return `Совпадений по позиции и значению - ${equalValuePositionCount}. Совпадение по значению - ${equalValueCount}.`
}
console.log(checkNumberConditions(1567, 6517))