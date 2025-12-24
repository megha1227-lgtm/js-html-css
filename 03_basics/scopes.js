//scope {  } whenever this curly bracets comes with function its call scopes
let a = 300;
//inside if is a block scopes and outside block scope is called gllobal scope
if (true) {
  let a = 10;
  const b = 20;
  // console.log("inner:", a);
}

// console.log(a);
//console.log(b);
// console.log(c);

//nested scope
//inside nested function a child function can access parent function variables 
function one() {
  const username = "megha";

  function two() {
    const website = "youtube";
    console.log(username);
  }
  // console.log(website);

  two();
}

// one();


if (true){
  const username = "megha "

  if (username==="megha "){
    const website ="youtube "
    //console.log(username + website);
      
  }
      //console.log(website);
      
}

// console.log(username);

//********************interesting ***************/
console.log(addone(5));

function addone(num){

  return num+1
}
// console.log(addone(5));
//in this function we are accessing variable before declaration
addTwo(5)
const addTwo = function (num){
  return num +2
}


