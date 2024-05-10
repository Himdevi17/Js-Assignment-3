let string = 'INDIA';
let array = string.split('');
array.splice(3, 0, 'O', 'N', 'E', 'S');
let output = array.join('');
console.log(output); 
