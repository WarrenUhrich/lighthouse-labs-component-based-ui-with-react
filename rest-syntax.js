// If you see ... beside a PARAMETER name, it is "rest syntax"
const addOrSubtract = (sign, ...nums) => { // gets "the rest" of the arguments
    let result = 0;

    if(sign === '+') {
        nums.forEach(num => result += num);
    } else if (sign === '-') {
        nums.forEach((num, index) => {
            if(index === 0) {
                result = num;
            } else {
                result -= num;
            }
        });
    }

    return result;
};

console.log(
    'addOrSubtract(\'+\', 1, 2, 3, 4)',
    addOrSubtract('+', 1, 2, 3, 4)
);

console.log(
    'addOrSubtract(\'-\', 1, 2, 3, 4)',
    addOrSubtract('-', 1, 2, 3, 4)
);
