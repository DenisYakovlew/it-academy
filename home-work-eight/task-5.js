const sortIncreaseArray = (array = [55, 63, 5, 8, -5, 12, 44]) => { return array.sort((a, b) => a - b) }
const sortDecreaseArray = (array = [55, 63, 5, 8, -5, 12, 44]) => { return array.sort((a, b) => b - a) }
console.log(sortIncreaseArray());
console.log(sortDecreaseArray());