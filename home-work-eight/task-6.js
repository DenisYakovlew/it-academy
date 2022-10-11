function deleteRepeatItem(array) {
    const finalArray = (array) => [...new Set(array)];
    return finalArray(array);
}

console.log(deleteRepeatItem([1, 3, 1, 4, 5, 6, 7, 6, 3, 3, 6, 8]))