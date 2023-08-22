console.log('hello world');
// string
let firstName = 'Zach';
// number
let temperature = 100;
//boolean
let sunny = true;

//Array-stores things like file cabinnet
// generally all the same data type(e.g. string)
// data in array is sorted
//               0       1        2
let colors = ['orange','teal', 'green'];
// .pop() removes the last item from an array
colors.pop();
// log out the data from our array
console.table(colors);
// adds to the end of the array
colors.push('blue', 'pink');
 console.table(colors);
 //adds to the beginning of the array
 colors.unshift('purple');
 console.table(colors);
 //removes from beginning
let firstColorRemoved = colors.shift();
console.log(firstColorRemoved);
console.assert(colors);
//access first color without removing it
let firstColor = colors[0];
console.log(firstColor);
console.table(colors);

//loops
// for of loop. loops over each item in an array
// assigns value to the item
let colorList = document.querySelector('#color-list');
for(let item of colors) {
    // repeated for each item in the array
console.log('color: ', item);
colorList.innerHTML += '<div>' + item + '</div>';
}

// traditional for loop
//                      0    1  2    3
let temperatureValues =[72, 84, 93, 102];
//start, end, increment(3 part loop)
// uses array index
//        start,     end,       increment
for (let index = 0; index < 10; index += 1){
console.log(index);
}
// loop over all temperature values
for(let i = 0; i < temperatureValues.length; i += 1){
let temp = temperatureValues[i];
console.log('temp: ', temp);
}


// while (least common)
let start = 0;
//       end
while (start < 10){
    console.log(start);
    start += 1; // increment
}
console.log('----for of loop----')
// 'for of' loop
for(let temp of temperatureValues){
    console.log(temp);
}

//data you are provide: A list of all items values (cost of items)
// Expected output: total value of all items. 
//Indication of whether the fundraisimg goal has been achieved.

// what variables and logic would you need for this?
const itemList = [100, 500, 2000, 50, 1000, 750, 10000]; // array
const fundraisingGoal = 20000; // number
let currentTotal = 0; // number
let goalReached = false; // boolean
//loop to add all item costs to the total
for(let item of itemList) {
    console.log ('for loop', item, currentTotal);
    //add each item value to the currentTotal
    currentTotal += item;
}
console.log('final total: ', currentTotal);
if(currentTotal >= fundraisingGoal){
    // goal has been reached!
    goalReached = true;
}
console.log('goalReached', goalReached);
// display on the webpage whether goal has been reached
let outputDiv = document.querySelector('#output');
if(goalReached) {
outputDiv.innerHTML = 'Goal Reached';
}else{
    outputDiv.innerHTML = 'goal not yet reached. remaining amount: ' 
    + (fundraisingGoal - currentTotal);
}