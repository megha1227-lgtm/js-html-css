//for loop 


for (let i  = 0; i <= 10; i++) {
    const element =i;
    if(element ==5){
        console.log("5 is a best number");
        
    }
    // console.log(element);
}

for (let index = 1; index < 10; index++) {
   //console.log(`outer loop, ${index}`);

    for (let j = 1; j < 10; j++) {
        //console.log(`inner loop, ${j} and inner loop index is ${index}`);
        //console.log(index + '*' + j + '=' + (index * j));
        
    }


}

let myArr = ["flash", "superman", "batman", "wonderwoman", "aquaman"];
//console.log(myArr.length);

for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    //console.log(element);
    
}

// break and continue key words
for (let index = 1; index <=20 ; index++) {
    if(index == 5){
        console.log('detected 5');
       continue
        
    }
    console.log(`value of i is ${index}`);
    ;
    
}
// for (let index = 1; index <=20 ; index++) {
//     if(index == 5){
//         console.log('detected 5');
//         break
        
//     }
//     console.log(`value of i is ${index}`);
//     ;
    
// }

