let arrOriginal = [1, 2, 3, 4, 5];
arrOriginal.splice(1, 0, 'a', 'b');
arrOriginal.splice(6, 0, 'c');
arrOriginal.push('e');

console.log(arrOriginal);