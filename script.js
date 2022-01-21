"use strict"

const arr = [1,2,3,1,2];


function deleteDuplicate(arr) {
   var newArray = [];
   arr.forEach((el, i) => {
      if (newArray.indexOf(el) === -1) {
         newArray.push(el);
      }
    });
    console.log(newArray);
};

deleteDuplicate(arr);




const arrFirst = [1, 2],
      arrSecond = [2, 3];

function arrayIntersection(oneArgument, twoArgument) {
   const arrOne = new Set(oneArgument);
   const arrTwo = new Set(twoArgument);
   let newArray = [];
   for (let i of arrTwo) {
   
       if (arrOne.has(i)) {
         newArray.push(i);
       }
       
   }  
   return newArray;

}

const audit = arrayIntersection(arrFirst, arrSecond);
console.log(audit);



const obj1 = {},
      obj2 = { a: { b: undefined } },
      obj3 = { a: { b: [] } };
 

const deepСheck = (obj) => {
   if (obj === null) {
     return true;
   } 

   if (Array.isArray(obj)) {

      let entrance;
      for (let i = 0; i < obj.length; i++) {
         if (typeof obj[i] === 'boolean' || (typeof obj[i] === 'number' && !Number.isNaN(obj[i])) || (typeof obj[i] === 'string' && obj[i] !== '')) {
               entrance = false;
            break;
         }
         if (Array.isArray(obj[i]) || (typeof obj[i] === 'object' && obj[i] !== null)) {
            entrance = deepСheck(obj[i]);
            break;
         }
         entrance = true;
      }

      if (obj.length === 0) {
         return true;
      }

      return entrance;
   }

   if (typeof obj === 'object') {
     const objitems = Object.keys(obj);
     if (objitems.length === 0) {
       return true;
     }
 
     let entrance;
     for (let i = 0; i < objitems.length; i++) {
       const value = obj[objitems[i]];
 
       if (typeof value === 'boolean' || (typeof value === 'number' && !Number.isNaN(value))
         || (typeof value === 'string' && value !== '')) {
            entrance = false;
         break;
       }
       if (Array.isArray(value) || (typeof value === 'object' && value !== null)) {
         entrance = deepСheck(value);
         break;
       }
 
       entrance = true;
     }
 
     return entrance;
   }
};

console.log(deepСheck(obj1)); 
console.log(deepСheck(obj2));
console.log(deepСheck(obj3));



   



