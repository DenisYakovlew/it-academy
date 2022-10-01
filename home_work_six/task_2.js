function dividingByTwo (number) {
    let num = 0;
    while (number > 50) {
        num++;
        number /= 2;
    }
    console.log(`Получилось число ${number}. Количество итераций ${num}`)
}

dividingByTwo(1000);