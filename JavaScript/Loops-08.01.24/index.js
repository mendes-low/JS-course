// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let oddNumber = []
// for (i = numbers[0]; i <= numbers.length; i++) {
//     if (i % 2 == 1) {
//         oddNumber.push(i)
//     }
// }
// console.log('it\'s odd number:' + oddNumber);

// for (let i = 1; i <= 20; i++) {
//     console.log(i*3);
// }


// let sum = 0
// for (let i = 0; i <= 20; i++) {
//     console.log(sum+=i);
// }

// let sum2 = 0
// for (let j = 0; j <= 20; j += 2) {
//     console.log(sum2 += j);
// }

// for (i = 0; i <= 100; i+=5) {
//     console.log(i);
// }

// for (i = 50; i >= 0; i-=2) {
//     console.log(i);
// }

// let numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// for (let i = 0; i <= 10; i += 2) {
//     console.log(i)
// }

// for (let i = 1; i <= 5; i++) {
//     console.log(`${i} * ${i} = ${i * i}`)
// }

// for (let i = 50; i >= 0; i--) {
// console.log(i)
// }

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// for (let number of numbers) {
// console.log(number);
// }


// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// for (let i = numbers[0]; i <= numbers.length; i++) {
//     i = i * 2
// }
// console.log(numbers);



// for (let i = 1; i <= numbers.length; i++) {
//     if (numbers[i] % 2 == 0) {
//         console.log(numbers[i]);
//     } 
// }

// let numbers = [1, 2, 3, 4, 5]
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 == 0) {
//         numbers[i] = numbers[i] * 2;
//     } else {
//         numbers[i] = numbers[i] * 3;
//     }
// }
// console.log(numbers);

// let numbers = []
// for (let i = 1; i <= 10; i++) {
//     numbers.push(i);
// }
// console.log(numbers);

// 1 Variant
// let numbers2 = []
// for (let i = 0; i <= 100; i+=2) {
//     numbers2.push(i*3);
// }
// console.log(numbers2);

// 2 Variant
// let numbers2 = []
// for (let i = 0; i <= 100; i++) {
//     if (i % 2 == 0) {
//         numbers2.push(i*3)
//     }
// }
// console.log(numbers2);















// 10.01.24

// 1
// const countries = [
//     'Albania',
//     'Bolivia',
//     'Canada',
//     'Denmark',
//     'Ethiopia',
//     'Finland',
//     'Germany',
//     'Hungary',
//     'Ireland',
//     'Japan',
//     'Kenya'
// ]
// for (let i = countries.length - 1; i >= 0; i--) {
//     console.log(countries[i]);
// }


// 2
// const countries = [
//     'Albania',
//     'Bolivia',
//     'Canada',
//     'Denmark',
//     'Ethiopia',
//     'Finland',
//     'Germany',
//     'Hungary',
//     'Ireland',
//     'Japan',
//     'Kenya'
// ]
// let countriesReverse = []
// for (let i = countries.length-1; i >= 0; i--) {
//     countriesReverse.push(countries[i])
// }
// console.log(countriesReverse);


// 3.1
// const countries = [
//     'Albania',
//     'Bolivia',
//     'Canada',
//     'Denmark',
//     'Ethiopia',
//     'Finland',
//     'Germany',
//     'Hungary',
//     'Ireland',
//     'Japan',
//     'Kenya'
// ]
// let countriesA = []
// for (let i = countries.length - 1; i >= 0; i--) {
//     if (countries[i].startsWith('A')) {
//         countriesA.push(countries[i])
//     }
// }
// console.log(countriesA);

// 3.2
// const countries = [
//     'Argentina'
//     'Albania',
//     'Bolivia',
//     'Canada',
//     'Denmark',
//     'Ethiopia',
//     'Finland',
//     'Germany',
//     'Hungary',
//     'Austria',
//     'Ireland',
//     'Japan',
//     'Kenya'
// ]
// let countriesA = []
// for (let i = countries.length - 1; i >= 0; i--) {
//     if (countries[i][0] == 'A') {
//         countriesA.push(countries[i])
//     }
// }
// console.log(countriesA);

// 4
// const countries = [
//     'Argentina',
//     'Albania',
//     'Bolivia',
//     'Canada',
//     'Denmark',
//     'Ethiopia',
//     'Finland',
//     'Germany',
//     'Hungary',
//     'Austria',
//     'Ireland',
//     'Japan',
//     'Kenya'
// ]
// let countriesA = []
// for (let i = countries.length - 1; i >= 0; i--) {
//     if (countries[i][countries[i].length - 1] == 'a') {
//         countriesA.push(countries[i])
//     }
// }
// console.log(countriesA);

// 5
// let numbers = [1, 2, 3, 4, 5]
// for (let number of  numbers) {
//     console.log(number);
// }

// 6
// let numbers = [34, 23, 78, 35, 90]
// for (let number of numbers) {
//     if (number % 2 == 0) {
//         console.log(number);
//     } 
// }

// 7
// let numbers = [34, 23, 78, 35, 90]
// for (let number of numbers) {
//     (number % 2 == 0)
//     ? console.log(number * 2) 
//     : console.log(number * 3);
// }

// 8
// let numbers = [34, 23, 78, 35, 90]
// let numbersArr = []
// for (let number of numbers) {
//     (number % 2 == 0)
//     ? numbersArr.push(number * 2) 
//     : numbersArr.push(number * 3);
// }
// console.log(numbersArr);

// 9
// const countries = [
//     'Argentina',
//     'Albania',
//     'Bolivia',
//     'Canada',
//     'Denmark',
//     'Ethiopia',
//     'Finland',
//     'Germany',
//     'Hungary',
//     'Austria',
//     'Ireland',
//     'Japan',
//     'Kenya'
// ]
// for (let country of countries) {
//     if (country[0] == 'A') {
//         console.log(country);
//     }
// }

// 10
// const countries = [
//     'Argentina',
//     'Albania',
//     'Bolivia',
//     'Canada',
//     'Denmark',
//     'Ethiopia',
//     'Finland',
//     'Germany',
//     'Hungary',
//     'Austria',
//     'Ireland',
//     'Japan',
//     'Kenya'
// ]
// for (let country of countries) {
//     country = country.toUpperCase()
// }
// console.log(countries);


// 11
// let numbers = [34, 23, 78, 35, 90]
// sum = 0
// for (let number of numbers) {
//     sum += number
// }
// console.log(sum);

// 12
// let numbers = [34, 23, 78, 35, 90]
// let sumOdd = 0
// let sumEven = 0
// for (let number of numbers) {
//     if (number % 2 == 0) {
//         sumOdd += number
//     } else {
//         sumEven += number
//     }
// }
// console.log(`Sum odd: ${sumOdd}`)
// console.log(`Sum even: ${sumEven}`);


// 13
// let numbers = [34, 23, 78, 35, 90]
// let sum = 1
// for (let number of numbers) {
//     sum *= number
// }
// console.log(sum);








// 11.01.23

// 1
// let i = 0
// while (i <= 10) {
//     console.log(i);
//     i++
// }

// 2
// let i = 10
// while (i >= 0) {
//     console.log(i);
//     i--
// }

// 3
// let i = 0 
// do {
//     console.log(i);
//     i++
// }
// while (i <= 10)

// 4
// let i = 10 
// do {
//     console.log(i);
//     i--
// }
// while (i >= 0)

// 5
// let i = 0
// while (i <= 20) {
//     console.log(i);
//     i += 2
// }

// 6
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let i = 0
// while (i <= numbers.length) {
//     console.log(i);
//     i += 2
// }

// 7
// let numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let j = numbers2.length
// while (j > 0) {
//     console.log(j);
//     j--
// }

// // 8
// const countries = [
//     'Albania',
//     'Bolivia',
//     'Canada',
//     'Denmark',
//     'Ethiopia',
//     'Finland',
//     'Germany',
//     'Hungary',
//     'Ireland',
//     'Japan',
//     'Kenya'
// ]
// for (let i = countries.length - 1; i >= 0; i--) {
//     console.log(countries[i]);
// }

// let i = countries.length -1 
// while (i >= 0) {
//     console.log(countries[i]);
//     i--
// }


// 1
// let i = 0
// while (i <= 100) {
//     console.log(i);
//     i += 2
// }

// 2
// let i = 0
// let sum = 0
// while (i <= 100) {
//     sum += i
//     i++
// }
// console.log(sum);

// 3
// let i = 0
// let sumEven = 0
// let sumOdd = 0
// while (i <= 100) {
//     if (i % 2 == 0) {
//         sumOdd += i
//     } else {
//         sumEven += i
//     }
// }
// console.log('sumOdd: ' + sumEven);
// console.log('sumeven: ' + sumOdd);

// 4
// let i = 2
// let sumEven = 0
// let sumOdd = 0
// while (i <= 100) {
//     sumEven += i 
//     sumOdd += i - 1
//     i+=2
// }
// console.log(sumEven);
// console.log(sumOdd);

// 5
// let i = 0
// while (i <= 100) {
//     if (i % 2 == 1) {
//         i++
//         continue
//     }
//     console.log(i);
//     i++
// }

// 6
// let i = 0
// while (i <= 100) {
//     if (i % 2 == 0) {
//         i++
//         continue
//     }
//     console.log(i);
//     i++
// }

// 7
// let i = 100
// while (i >= 0) {
//     if (i % 2 == 1) {
//         i--
//         continue
//     }
//     console.log(i);
//     i--
// }

// 8
// let numbers = [34, 23, 78, 35, 90]
// let i = 0
// let sum = 0
// while (i < numbers.length) {
//     sum += numbers[i]
//     i++
// }
// console.log(sum);





