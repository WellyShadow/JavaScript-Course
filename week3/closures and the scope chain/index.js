

// function greet(){
//     const message = 'Hello';
//     console.log(message);
// }

// greet();
// // console.log(message); //error


// function outer(){
//     const outerVariable = 'I am from outer';

//     function inner(){
//         console.log(outerVariable);
//     }
//     return inner;
// }

// const closureFunction = outer();

// closureFunction()

function outer(){
    const outerVariable = 'outer';

    function inner(){
        const innerVariable = 'inner'

        console.log(innerVariable + ' ' + outerVariable);
    }
    inner();
}


outer();