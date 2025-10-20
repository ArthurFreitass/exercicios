const inverseText = (string) => {
    let stringArray = string.split('').reverse('').join('')
    return stringArray
}

const checkValue = (string) => {
    if (string === '') {
        throw new Error ('Type one word')
    }
}

try {
    const string = 'Baleia' 
    checkValue(string)
    const reverseWord = inverseText(string)
    if (reverseWord == 'aielaB') {
        console.log('Teste passou ✅');
    } else {
        throw new Error ('Teste falhou')
    }
} catch (error) {
    console.log(error.message);
}


const countLetters = (string) => {
    const stringArray = string.split('')
    const regexallLetters= /[a-zA-ZáàãâéèêíóôõúüçÁÀÃÂÉÈÊÍÓÔÕÚÜÇ]+/
    let count = 0;
    for (let index = 0; index < stringArray.length; index += 1) {
        if (regexallLetters.test(stringArray[index])) {
            count += 1
        } 
    }
    return count
}

const outgoingMessage = (booleanMessage) => {
    if (booleanMessage === true) {
        console.log("Teste passou ✅");      
    } else {
        console.log("Teste não passou! ❌");
        
    }
}

try {
    let word = 'Maça'
    checkValue(word)
    let resultTest = true
    if (countLetters(word) === 2) {
        outgoingMessage(resultTest)
    } else {
        resultTest = false
        outgoingMessage(resultTest)
    }
} catch (error) {
    console.log(error.message);
    
}
