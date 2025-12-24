//Immediately invoke function expressions(iife)
//for removing global scope polluted issue we use iife 
// in standard words we can say Avoiding polluting the global namespace by creating a declartions

// semicole is mandatory for ending first function
(function chai(){
    //named iife function chai is named iife
    console.log(`db connected`);
    
})();

//this is non named iife
((name)=> {
    console.log(`db connected ${name}`);
    
})(`megha`)