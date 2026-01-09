const coding = ["JavaScript", "Python", "C++", "Java", "Ruby"]

// coding.forEach( function(item){
//     console.log(item);
//  })


// coding.forEach( (value) => {
//     console.log(value);
    
// })

// function printme(value){
//     console.log(value);
    
// }
// coding.forEach(printme);

// coding.forEach((item, index, arr) => {
//     console.log(item,index,arr);
    
// }
// )

const mycoding = [
    {
        languagename: "JavaScript",
        languagefile: "js"
    },
    {
        languagename: "Python",
        languagefile: "py"
    },
    {
        languagename: "C++",
        languagefile: "cpp"
    },
    {
        languagename: "Java",
        languagefile: "java"
    },
    {
        languagename: "Ruby",
        languagefile: "rb"
    },
]

mycoding.forEach( (item) => {
    console.log(item.languagename);   
})