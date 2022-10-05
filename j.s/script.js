// let array = [5, 25, 89, 120, 36];
// array.push("javascript","python");
// array.unshift("html", "css");
// // console.log(array.length);
// array.shift();
// array.pop();
// console.log(array);




// let array = ["Orange", "Banana", "Pear"];
// // console.log(array.length);
// array.push("Apple", "Pineapple");
// array.unshift("Watermelon");
// // console.log(array.length);
// let addArray = array.splice(3,0,"mango");
// array.shift();
// array.pop();
// console.log(array.length);



// let array = [12, 25, 3, 6, 8, 14, 7, 23];
// let NawArray = array.map(function (item){
//     return item / 3
// });
// console.log(NawArray);


// let array = ["hello", 125, "javascript", "html", 43, "css", "scss", "bootstrap", 88, 59, "python"];
// let NewArray = array.filter(function (item) {
//     return typeof item === "number"; 
// });
// console.log(NewArray);




// let language = ["html", "css", "javascript", "python", "php"];
// let languagelength = language.filter(function (item){
//     return item.length > 3;
// })
// console.log(languagelength);


let item = [12, "google", 32,  "yahoo", 25];
let array = item.map(function (i){
    return typeof i === "number";
    
})
console.log(array);


// let words = ['Madrid', 'Rome', 'Milan', 'Berlin'];
// let array = words.filter(function (item){
//     return item.includes("m" || "M");
// })
// console.log(array);



// let arr1 = [1, 2];
// let arr2 = [3, 4];
// let arr3 = [5, 6];

// let array = arr1.concat(arr2, arr3);
// console.log(array);



// let arr = [1, 2, 3, 4, 5];
// let a = 0;
// let array = arr.forEach (function (item) {
//     a+=item;
//     return a;
// });
//  console.log(a);




// let numbers = [-2, 5, 10, -5, -1, 1, 3, 4, -15];
//  let array = numbers.filter ( function (item) {
//     return item > 0;
//  })
//  console.log(array);



// let arr = [-1, -2, -3, 4];
// let array = arr.some ( function (item) {
//     return item > 0;
// })
// console.log(array);



// let array =[23,45,32,5,87,7,3,98].sort ( function (x , y){
//     return x -y;
// } )
// console.log(array);



// let array = [1, 2, 3, 4, 5];
// let NewArray = array.splice(2,0, "a", "b", "c");
// console.log(array);