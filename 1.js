//16
// for (let i = 0; i <= 100; i++) {
//     if (i % 7 === 0) {
//         continue;
//     }
//     console.log(i);
// }

//17
// for (let i = 1; i <= 50; i++) {
//         if (i % 2 === 0 && i % 3 === 0) {
//             continue;
//         }
//         console.log(i);
//     }

//18
// for (let i = 1; i <= 100; i++) {
//             if (i % 7 === 0 && i % 9 === 0) {
//                 break;
//             }
//             console.log(i);
//         }

//19
// for (let i = 1; i <= 100; i++) {
//     if (i % 4 === 0 && i % 8 != 0) {
//         continue; 
//     }
//     if (i % 5 === 0 && i % 10 === 0) {
//         break; 
//     }
//     console.log(i); 
// }

//20
// const arr = [5, "hello", 15, "world", 25, 3, "test"];
// for (let i = 0; i < arr.length; i++) {
//     if (isNaN(arr[i])) {
//         continue; 
//     }
//     if (arr[i] < 10) {
//         console.log("Маленькое число");
//     } else if (arr[i] >= 10 && arr[i] <= 20) {
//         console.log("Среднее число");
//     } else {
//         console.log("Большое число");
//     }
// }

//21
// const grades = [5, 4, 3, 5, 2, 4, 1, 3, 5, 2, 4];
// let count = 0;
// for (let i = 0; i < grades.length; i++) {
//     switch (grades[i]) {
//         case 5:
//             count++;
//             break;
//     }
// }
// console.log(count);

//22
// const days =  ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
// for (let i = 0; i < days.length; i++) {
//         switch (days[i]) {
//             case "Monday": case "Tuesday" : case "Wednesday": case "Thursday": case "Friday": console.log(`${days[i]} - Будний день`); break
//             case "Saturday": case "Sunday": console.log(`${days[i]} - Выходной день`)
//         }
//     }

//23
// const arr =  [1, 2, 3, 4, 5];
// let chet = 0;
// let nech = 0;
// for (let i = 0; i < arr.length; i++) {
//     if(arr[i]%2==0)
//         chet++;
//     else
//         nech++
// }
// console.log(`Четные: ${chet}, Нечетные: ${nech}`)

//24
// const input = prompt('Введите строку');
// let count = 0;
// for (let i = 0; i < input.length; i++) {
//     if (input[i] !== ' ') { 
//         count++; 
//     }
// }
// console.log(count); 

//25
// const arr = [1, 3, 6, 8, 9, 12];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     if(arr[i]%3==0)
//         sum+=arr[i];
// }
// console.log(`Сумма чисел, кратных 3: ${sum}`)

//26
// const input = prompt('Введите строку');
// const arr = ['a','e','i','o','u'];
// let count = 0;
// for (let i = 0; i < input.length; i++) {
//     if(arr.includes(input[i]))
//         count++;
// }
// console.log(count)

//27
// const input = prompt('Введите строку');
// const arr = ['b','c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
// const arr = ['a','e','i','o','u'];
// let count = 0;
// for (let i = 0; i < input.length; i++) {
//     if(!arr.includes(input[i]))
//         count++;
// }
// console.log(count)

//28
// const arr = [1,-2, 3,-4, 5,-6];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     if(arr[i]<0)
//         continue;
//     sum+=arr[i];
// }
// console.log(sum)