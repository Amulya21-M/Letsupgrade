console.log("Answer")

//taking input from user and typecasting it int string 
let user_input = String(prompt('Enter OS name and version separated by a space'));

//splitting the input by space
let user_input_array = user_input.split(" ");

//accessing elements of array as index0 as os name and index1 as version name 
console.log(`The OS name is'${user_input_array[0]}' and version is'${user_input_array[1]}'.`);
