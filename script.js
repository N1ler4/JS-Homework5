// function power(a, n) {

//   power = a ** n;

//   return power;
// }


// console.log(power(3 , 5));



// function arif(a, b) {

//     arif = (a + b)/2;

//     return arif;
// }

// function geom(a , b) {

//     geom = (a + b)**(1/2);

//     return geom;
// }

// let arifRes = arif(12 , 48);
// let geomRes = geom(12 , 48);

// console.log(arifRes);
// console.log(geomRes);


// function sign(n){

//     if(n >= 1){
//         sign = 1;
//     }else if(n < 0){
//         sign = -1;
//     }else{
//         sign = 0;
//     }

//     return sign;
// }

// let result = sign(8);

// console.log(result);


// function numberOfRoots(a , b , c){

//     let D = b**2 - 4*a*c;

//     if (D > 0){
//         x = 2;
//     }else if(D < 0){
//         x = 0;
//     }else{
//         x = 1;
//     }

//     return x;
// }

// let result = numberOfRoots(1 , -6 , 9);

// console.log(result);


// function areaCircle(r){


//     let S = (Math.PI*r)**2


//     return S;
// }

// let result = areaCircle(3);
// console.log(result);




// function sumRange(a,b){
//     let sum = 0;
//     for(i = a ; i <= b ; i++){
//         sum += i
//     }

//     return sum;
// }

// let result = sumRange(8 , 10);
// console.log(result);



// function calc(a,b,s){

//     if(s === "+"){
//         return a + b;
//     }else if(s === "-"){
//         return a - b;
//     }else if(s === "/"){
//         return a / b;
//     }else if(s === "*"){
//         return a * b;
//     }
//     else{
//         return 0
//     }

// }

// let result = calc(10 , 15 , "*");
// console.log(result);


// function isEven(k) {
//     if (k % 2 === 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

// let result = isEven(10);
// console.log(result);


// function sortABC(a, b, c) {
//     if (a > b && b > c) {
//         return [c, b, a];
//     } else if (a > c && c > b) {
//         return [b, c, a];
//     } else if (b > a && a > c) {
//         return [c, a, b];
//     } else if (b > c && c > a) {
//         return [a, c, b];
//     } else if (c > b && b > a) {
//         return [a, b, c];
//     } else if (c > a && a > b) {
//         return [b, a, c];
//     }
// }

// let result = sortABC(10, 5, 8);
// console.log(result);



// function isPowerN(K, N){
//     let a = K**N

//     if(N > 1){
//         return true;
//     }else{
//         return false;
//     }
// }

// let result = isPowerN(3 , 2);
// console.log(result);



// function isPrime(n){
//     if(n >= 0 && n < 10){
//         return true;
//     }else{
//         return false;
//     }
// }

// let result = isPrime(7);
// console.log(result);


// function numberOfPrime(n) {
//     let count = 0;
//     for (let i = 2; i <= n; i++) {
//         let isPrime = true;
//         for (let j = 2; j <= Math.sqrt(i); j++) {
//             if (i % j === 0) {
//                 isPrime = false;
//                 break;
//             }
//         }
//         if (isPrime) {
//             count++;
//         }
//     }
//     return count;
// }

// let result = numberOfPrime(10);
// console.log(result);



// function inverseNumber(N) {
//     const strN = N.toString();
//     const inverseStr = strN.split('').reverse().join('');
//     const inverseNum = parseInt(inverseStr);

//     return inverseNum;
// }

// // Misol:
// const result = inverseNumber(56814);
// console.log(result);
