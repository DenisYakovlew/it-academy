function averageArrayItems (arr) {
    let sum = 0;
    arr.forEach(item => {
        sum += item;
    });
    console.log(`Среднее арифметическое массива ${sum / arr.length}`);
}

averageArrayItems([12, 15, 20, 25, 59, 79]);