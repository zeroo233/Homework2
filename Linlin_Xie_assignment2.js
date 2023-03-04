/*
Question 1
Given the array, implement a function for generating a new array which doubles the quantity and price in each object.
Given the array, implement a function for generating a new array which contains item quantity > 2 and price > 300 only.
Given the array, implement a function to calculate the total value of the items.
*/

const itemsObject = [
    { quantity: 1, price: 200 },
    { quantity: 3, price: 350 },
    { quantity: 5, price: 400 },
  ];
const doubleArr = itemsObject.map(({quantity, price})=>({quantity:[quantity]*2, price: [price]*2}));
console.log("Q1.a: generating a new array which doubles the quantity and price in each object:\n",doubleArr,'\n');

const filterCon = itemsObject.filter(obj=> obj.quantity>2&&obj.price>300);
console.log("Q1.b: generating a new array which contains item quantity > 2 and price > 300 only:\n",filterCon,'\n');

const sumPrice = itemsObject.reduce((sum, curItem)=>(sum+curItem.quantity*curItem.price), 0);
console.log("Q1.c: calculate the total value of the items:\n ", sumPrice,'\n');

/*
Question 2
Given the string, implement a function to remove all the non-alphabet characters and extra space in the string and convert the string to all lowercase.
*/

const string =
' Perhaps The Easiest-to-understand   Case   For Reduce Is   To Return The Sum Of  All The Elements In  An Array  ';

const expectedReturnString =
'perhaps the easiest to understand case for reduce is to return the sum of all the elements in an array';

const cleanLower = (str)=>{
    // return str.toLowerCase().replace(/([^a-z]|\s+)/g,' ').trim(); It seems it doesn't work with combining by | .
    return str.toLowerCase().replace(/[^a-z]/g,' ').replace(/\s+/g, ' ').trim();
}
console.log("Q2: test result: " + (cleanLower(string) === expectedReturnString), '\n');
/*
Question 3
Implement a function to merge two arrays of objects on uuid, but first has uuid and name, second has uuid and role. With the not existing property, fill with null. Sort according to uuid after merge.
*/

const first = [
{ uuid: 2, name: 'test' },
{ uuid: 5, name: 'test5' },
{ uuid: 3, name: 'test3' },
];

const second = [
{ uuid: 6, role: 'pm' },
{ uuid: 4, role: 'engineer' },
{ uuid: 1, role: 'manager' },
{ uuid: 2, role: 'associate' },
];

const expectedReturnArray = [
{ uuid: 1, role: 'manager', name: null },
{ uuid: 2, role: 'associate', name: 'test' },
{ uuid: 3, role: null, name: 'test3' },
{ uuid: 4, role: 'engineer', name: null },
{ uuid: 5, role: null, name: 'test5' },
{ uuid: 6, role: 'pm', name: null },
];

const merge = first
// push all non overlapping data from second to first
.concat(second.filter(data2=>!first.some(data1=>data2.uuid==data1.uuid)))
// fill in format and merge if applicable
.map(data1 => (Object.assign({uuid:null, role: null, name: null}, data1, second.find(data2=>data2.uuid==data1.uuid))))
// sort by uuid
.sort((data1, data2)=>data1.uuid-data2.uuid);

console.log("Q3: merge by uuid:\n", merge);