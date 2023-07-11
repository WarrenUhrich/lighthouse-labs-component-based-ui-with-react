const myObj = {
    name: 'Lighthouse Labs',
    type: 'School',
    website: 'https://lighthouselabs.ca/'
};

const { website } = myObj;
console.log('website:', website);

const myArr = [1, 2, 3, 4, 5];

const [ val1, val2, val3 ] = myArr;

// const val1 = myArr[0];

console.log('val1:', val1);
console.log('val2:', val2);
console.log('val3:', val3);

