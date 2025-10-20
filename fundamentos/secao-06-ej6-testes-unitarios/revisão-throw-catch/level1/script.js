// Crie uma função soma(a, b) e escreva testes simulados que verifiquem se ela retorna o valor correto.


const checkisNumber = (num1, num2) => {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        throw new Error('Type one number')
    }
    return num1, num2
}

const sum = (num1, num2) => num1 + num2
const subtraction = (num1, num2) => num1 - num2
const multiplication = (num1, num2) => num1 * num2

try {
    const num1 = 7
    const num2 = 12.5
    checkisNumber(num1, num2)
    console.log(`Teste 1: [7 + 12,5 === 19.5]? Resultado ${sum(num1, num2)}`);    
} catch (error) {
    console.log(error.message);
}


try {
    let num1 = 10
    let num2 = 20
    let resultTest = true
    checkisNumber(num1, num2)
    if (subtraction(num1, num2) === -10) {
        console.log(`Teste 2: [10 - 20 === -10]? Resultado ${resultTest}`);
        
    }
} catch (error) {
    console.log(error.message);
}

try {
    const num1 = 2
    const num2 = 6
    checkisNumber(num1, num2)
    const resultTest = true
    if (multiplication(num1, num2) === 12) {
        console.log(`Teste 3: [2 * 6 === 12]? Resultado ${resultTest}`);       
    }
} catch (error) {
    console.log(error.message);
}
