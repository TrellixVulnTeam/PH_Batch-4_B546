let sum = 0;
for (let i = 1; i <= 6 ; i++) {
    // console.log(i);
    sum = sum + i;
}
// console.log(sum);

let sum = 0;
for (let i = 6; i >= 1; i--) {
    console.log(i);
    sum = sum + i;
}
console.log(sum);

function sum(i) {
    if (i == 1) {
        return 1;
    }
    return i + sum (i - 1);
}
console.log(sum(6));