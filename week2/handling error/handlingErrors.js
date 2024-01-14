
function divide(numerator, denomirator) {
    if(denomirator === 0){
        throw new Error ('Error: Division by zero')
    }

    return numerator / denomirator
}

try{
    const result = divide(10,2);
    console.log(result);
}catch(error){
    console.log(error.message);
}