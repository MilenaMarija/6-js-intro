function bigNum() {
    return 0;
}

console.log(bigNum([1]), '->', 1);
console.log(bigNum(1, 2, 3]), '->', 3);
console.log(bigNum([-5, 78, 14, 0, 18]), '->', 78);
console.log(bigNum([69, 69, 69, 69, 66]), '->', 69);
console.log(bigNum([-1, -2, -3, -4, -5, -6, -7, -8]), '->', -1);
console.log(bigNum('pomidoras'));
console.log(bigNum([]));