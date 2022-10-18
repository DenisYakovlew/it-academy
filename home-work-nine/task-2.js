// Сделайте функцию getNum, которая возвращает промис, 
// который с задержкой в 3 секунды выведет случайное число от 1 до 5. 
// Создайте async функцию, которая с помощью await будет дожидаться результата getNum, 
// затем возводить его в квадрат и выводить на экран.
let getRandomNumber = (min, max) => { return Math.ceil(Math.random() * (max - min) + min) }

function getNum () {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(getRandomNumber(1, 5)), 3000);
    });
}

async function result() {
    return `Число возведенное в квадрат из getNum ${Math.pow(await getNum(), 2)}`
}

result().then(data => {
    console.log(data)
})