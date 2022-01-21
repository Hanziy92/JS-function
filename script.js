"use strict"

// ВИДАЛЯЄ ОДНАКОВІ З МАСИВУ
// const arr = [1,2,3,1,2];

// function deleteDuplicate(arr) {
//    var newArray = [];
//    arr.forEach((el, i) => {
//       if (newArray.indexOf(el) === -1) {
//          newArray.push(el);
//       }
//     });
//     console.log(newArray);
// };

// deleteDuplicate(arr);



// ВІДБИРАЄ ОДНАКОВІ З РІЗНИХ МАСИВІВ І ФОРМУЄ З НИХ НОВИЙ
// const arrFirst = [1, 2];
// const arrSecond = [2, 3];

// function arrayIntersection(oneArgument, twoArgument) {
//    const arrOne = new Set(oneArgument);
//    const arrTwo = new Set(twoArgument);
//    let newArray = [];
//    for (let i of arrTwo) {
   
//        if (arrOne.has(i)) {
//          newArray.push(i);
//        }
       
//    }  
//    return newArray;

// }

// const audit = arrayIntersection(arrFirst, arrSecond);
// console.log(audit);






const obj1 = {};
 const obj2 = { a: { b: undefined } };
 const obj3 = { a: { b: [] } };
 


const isEmptyDeep = (obj) => {

   if (obj === null) {
     return true;
   } 

   if (Array.isArray(obj)) {
     if (obj.length === 0) {
       return true;
     }
 
     let result;
     for (let i = 0; i < obj.length; i += 1) {
       if (typeof obj[i] === 'boolean' || (typeof obj[i] === 'number' && !Number.isNaN(obj[i]))
         || (typeof obj[i] === 'string' && obj[i] !== '')) {
         result = false;
         break;
       }
       if (Array.isArray(obj[i]) || (typeof obj[i] === 'object' && obj[i] !== null)) {
         result = isEmptyDeep(obj[i]);
         break;
       }
 
       result = true;
     }
 
     return result;
   }
   if (typeof obj === 'object') {
     const objectKeys = Object.keys(obj);
     if (objectKeys.length === 0) {
       return true;
     }
 
     let result;
     for (let i = 0; i < objectKeys.length; i += 1) {
       const value = obj[objectKeys[i]];
 
       if (typeof value === 'boolean' || (typeof value === 'number' && !Number.isNaN(value))
         || (typeof value === 'string' && value !== '')) {
         result = false;
         break;
       }
       if (Array.isArray(value) || (typeof value === 'object' && value !== null)) {
         result = isEmptyDeep(value);
         break;
       }
 
       result = true;
     }
 
     return result;
   }
 };

 console.log(isEmptyDeep(obj1)); 
 console.log(isEmptyDeep(obj2));
 console.log(isEmptyDeep(obj3));



   



