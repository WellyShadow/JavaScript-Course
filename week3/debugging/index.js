// console.lg('Hello, world')

// function multiply (a, b){
//     console.log('Multiplying', a, 'and', b);
//     return a * b;
// }

// result = multiply(5,2);
// console.log('Result: ',result);

// function multiply (a, b){
//     let result = a * b;
//     debugger;
//     return result;
// }

// let result = multiply(5,2);
// console.log('Result: ',result);


function divide(a, b){
    if (b === 0){
        throw new Error('Cannot divide by zero');
    }

    return a / b;
}

try{
    let result = divide(10, 0);
    console.log('Result: ',result);
}catch(error){
    console.log('Error:', error.message)
}