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