// Сделайте функцию getNum, которая возвращает промис, 
// который с задержкой в 3 секунды выведет случайное число от 1 до 5. 
// Создайте async функцию, которая с помощью await будет дожидаться результата getNum, 
// затем возводить его в квадрат и выводить на экран.

function getNum () {
    const randomNumber = Math.ceil(Math.random() * (5 - 1) + 1);
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(randomNumber), 3000);
    })
}

async function result() {
    return `Число из getNum в квадрате равно ${Math.pow(await getNum(), 2)}`
}

result().then(value => {
    console.log(value);
});