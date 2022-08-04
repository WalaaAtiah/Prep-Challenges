"use strict";
// -------------------------------------------------------------------------------------------------------
//  Challenge 01:
//  Required:
//
//  Write a function that takes an array and returns the reversed array.
//  Without using built-in methods.
//  Input: ['C#', 'JS', 'Ruby','Python']
//  Output: ['Python','Ruby','JS','C#']


const reverseArray = (arr) => {
const rev =[];
for (let i=arr.length-1;i>=0;i--){
  rev.push(arr[i]);
}
  
// write your code here
  return rev;

};

// -------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------

//  Challenge 2:
// Required:

//  Write a function that takes an array of numbers and increases its values by 10
//
//  Input: [20, 54, 89, 41]
//  Output: [30, 64, 99, 51]

const arrInc = (arr) => {
  const result = [];
  for (let i=0;i<arr.length;i++){
    arr[i]+=10;
    
  }
  // write your code here
  return arr;
};

// -------------------------------------------------------------------------------------------------------

module.exports = { reverseArray, arrInc };
