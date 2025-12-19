const marvel_heros = ["thor","ironman", "spider"]
const dc_heros = ["superman", "flash", "batman"]


marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allmarvel_heros =marvel_heros.concat(dc_heros)

// console.log(allmarvel_heros);


const all_new_heros= [...marvel_heros,...dc_heros]
// console.log(all_new_heros);

const anotherArr = [1,2,3,[4,5,6],7,[6,7[6,8]],9]
const realanotherArr = anotherArr.flat(Infinity)


console.log(realanotherArr);



console.log(Array.isArray("megha"));
console.log(Array.from("megha"));
console.log(Array.from({name: "megha"}));// gives empty 
//when we have different variable thats the way to convert variables into array
let score1 =100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));
