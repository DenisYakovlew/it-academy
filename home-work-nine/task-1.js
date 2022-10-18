// Сделайте 3 промиса, в каждом из которых расположена функция setTimeout со случайной задержкой от 1 до 5 секунд. 
// Пусть первый промис возвращает число 1, второе - число 2, третий - число 3.
// С помощью Promise.race дождитесь загрузки первого сработавшего промиса и выведите результат его работы на экран.

let getRandomNumber = (min, max) => { return Math.ceil(Math.random() * (max - min + 1)) * 1000 }; 
const onePromise = new Promise(function(resolve, reject) {
    setTimeout(() => resolve(1), getRandomNumber(1, 5));
  });

const twoPromise = new Promise(function(resolve, reject) {
    setTimeout(() => resolve(2), getRandomNumber(1, 5));
});

const threePromise = new Promise(function(resolve, reject) {
    setTimeout(() => resolve(3), getRandomNumber(1, 5));
});

Promise.race([onePromise, twoPromise, threePromise]).then((value) => {
    console.log(value)
});