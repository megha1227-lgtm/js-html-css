//assuming true value 

const userEmail=[]
if (userEmail ) {
    console.log('got user email');
    
    
}else{
    console.log("dont have user email");
    
}


//falsy values 
//false , 0 , -0 , bigint 0n , "", null , undefined , nan

//truthy values 
//"0",, "false", " " inside string if we gave space is also is a truthy value , [],{}, function(){}

// if (userEmail.length===0) {
//     console.log("array is empty");
    
// }
const emptyObj ={}
if (Object.keys(emptyObj).length===0) {
    console.log('object is empty');
    
}



// nullish coalescing operator (??): null undefined 

let val1;
// val1 = 5 ?? 10 
// val1 = null ?? 10
//in this case first value print 
val1 = undefined ?? 15 ?? 10
console.log(val1);


//terniary operator
// condition ? true : false
const icetea = 100 
icetea<=80?console.log('less than 100'):console.log('more than 100');
