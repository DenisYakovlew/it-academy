// Сделайте функцию getNum1, которая возвращает промис, который с задержкой в 3 секунды выведет случайное число от 1 до 5. 
// Сделайте также функцию getNum2, которая возвращает промис, который с задержкой в 5 секунд выведет случайное число от 6 до 10. 
// Создайте async функцию, которая с помощью await будет дожидаться результата getNum1, 
// затем будет дожидаться результата getNum2, а затем найдет сумму полученных чисел и выводит на экран.

function getNum1 (min, max) {
    const randomNumber = Math.ceil(Math.random() * (max - min) + min);
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(randomNumber), 3000);
    })
}

function getNum2 (min, max) {
    const randomNumber = Math.ceil(Math.random() * (max - min) + min);
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(randomNumber), 5000);
    })
}

async function result () {
    const firstFunction = await getNum1(1, 5);
    const secondFunction = await getNum2(6, 10);
    return firstFunction + secondFunction;
}


result().then(value => {
    console.log(value);
});