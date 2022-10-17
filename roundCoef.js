function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function roundedCoef (number) {
    const roundedNumber = Math.round(number * 100) / 100
    return roundedNumber.toFixed(2)
}