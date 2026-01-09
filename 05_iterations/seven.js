//reduce method takes two arguments a callback function and an initial value
//the callback function takes two arguments an accumulator and current value
//the accumulator is the value that is returned by the previous iteration of the callback function
//the current value is the current element being processed in the array
//the initial value is the value that is used as the first argument to the first call of the callback function
// inside reduce we return a single value which is the accumulated value after processing all the elements in the array 
// accumulator we take 0 first time and then we add current value to accumulator and return that value as accumulator for next iteration
const num = [1,2,3,4,5];
 const inistialValue = 0;

 const sum = num.reduce((acc , curr) => acc + curr , inistialValue);
//  const sum = num.reduce((acc , curr) => {
//     console.log(`acc: ${acc} and current value: ${curr}`);
//     return acc + curr;
//  },0)
 console.log( sum );
 


 const shoppingCart = [
    {item: "Laptop", price: 1000},
    {item: "Phone", price: 500},
    {item: "Tablet", price: 300}
 ]

 const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

 console.log(priceToPay); 