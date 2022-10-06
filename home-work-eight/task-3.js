function sequenceFibonacci(startItemSequence, lengthSequence) {
    if (startItemSequence > 0 && lengthSequence > 0 && typeof startItemSequence === 'number' && typeof lengthSequence === 'number') {    
        let startArray = [0, 1];
        for (let i = 1; i < startItemSequence; i++) {
            startArray.push(startArray[i - 1] + startArray[i]);
        }
        let resultArray = startArray.slice(startArray.length - 2, startArray.length);
        for (let i = 1; i < lengthSequence - 1; i++) {
            resultArray.push(resultArray[i - 1] + resultArray[i]);
        }
        return lengthSequence === 1 ? resultArray.shift() : resultArray;
    } else {
        return `Значения старта позиции и длина последовательности должны быть числами, и должны быть больше нуля`
    }
}

console.log(sequenceFibonacci(5, 9));