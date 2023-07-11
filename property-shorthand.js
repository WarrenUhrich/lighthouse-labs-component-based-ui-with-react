const name = 'Lighthouse Labs';
const type = 'School';
const website = 'https://lighthouselabs.ca/';

const myObjAlt = {
    name:    name,
    type:    type,
    website: website
};

const myObj = {name, type, website};

console.log('Old-fashioned way:', myObjAlt);
console.log('Property-shorthand:', myObj);
