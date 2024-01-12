// function addTwoNumbers(numOne,numTwo,numThree) {
//     let sum = numOne + numTwo + numThree
//     return(sum)
// }
// console.log(addTwoNumbers(5,5,5));

// function oddNumbers(number) {
//     for (let i = number[0]; i < number.length; i++) {
//         if (number[i] % 2 == 0) {
//             let odd = number[i]
//             return(odd)
//         }
//     }
// }
// console.log(oddNumbers(20));
// this function takes array as a parameter and sum up the numbers in the array
// function sumArrayValues(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum;
// }
// const numbers = [1, 2, 3, 4, 5];

// let numbers2 = [50, 50, 50, 50, 50, 50, 50, 50]
// //calling a function
// console.log(sumArrayValues(numbers));
// console.log(sumArrayValues(numbers2));


// const areaOfCircle = (radius) => {
//     let area = Math.PI * radius * radius;
//     return area;
// }
// console.log(areaOfCircle(1))

// function sumAll(arr) {
//     let sum = 0
//     for (let i of arr) {
//         sum += i
//     }
//     return(sum)
// }

// let num = [10, 10 ,10]

// console.log(sumAll(num));


// function sum() {
//     sum = 0
//     for (let j of arguments) {
//         sum += j
//     }
//     return(sum)
// }

// console.log(sum(10, 20, 30, 40, 50));


// let i = (...arr) => {
//     let sum = 0
//     for (let n of arr) {
//         sum += n
//     }
//     return(sum)
// }

// console.log(i(20,40,70));


// let j = (...array) => {
//     return(array);
// }
// console.log(j(30,40,40));



// (function (n,i) {
//     let sum = n + i
//     console.log(sum)
// })(5,5) // 4, but instead of just printing if we want to return and store the data, we do as shown below

// let squaredNum = (function (n,f) {
//     return n * f
// })(10,90)
// console.log(squaredNum)

// function generateFullName(firstName = 'Asabeneh', lastName = 'Yetayeh') {
//     let space = ' '
//     let fullName = firstName + space + lastName
//     return fullName
// }

// console.log(generateFullName())
// console.log(generateFullName('David', 'Smith'))









