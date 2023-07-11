const arr = [1, 2, 3];

const sumThreeNums = (num1, num2, num3) => {
    return num1 + num2 + num3;
};

console.log(
    'sumThreeNums(...arr)',
    sumThreeNums(...arr) // arr[0], arr[1], arr[2]
);

// console.log(
//     'sumThreeNums(arr[0], arr[1], arr[2])',
//     sumThreeNums(arr[0], arr[1], arr[2])
// );

// console.log(
//     'sumThreeNums(arr)',
//     sumThreeNums(arr)
// );

const newArr = [...arr, 4, 5, 6, 7, 8, 9, 10];
console.log(
    'newArr:', newArr
);

const myObj = {
    name: 'Lighthouse Labs',
    type: 'School',
};

const newObj = {
    ...myObj,
    website: 'https://lighthouselabs.ca/',
    type: 'College',
};

console.log(
    'newObj:', newObj
);
