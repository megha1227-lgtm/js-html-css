const name ="megha";
const repoCount = 50


// console.log( name + repoCount);
console.log(`hello my name is ${name} and my repo count is ${repoCount}`);


const gameName = new String("megha-cht")

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());


console.log(gameName.charAt(2));
console.log(gameName.indexOf('h'));

const newString= gameName.substring(0,4)
console.log(newString);

const anotherstring =gameName.slice(-6,4)
console.log(anotherstring);


const newStingOne= "  megha  "
console.log(newStingOne);
console.log(newStingOne.trim());

const url = "https://minimetersindia.com/minimetersindia%20omes"

console.log(url.replace('%20','-'));



console.log(url.includes('india'));

console.log(gameName.split('-'));

