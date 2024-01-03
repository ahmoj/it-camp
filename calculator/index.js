function calculator(num1, num2, operation){
    if (operation == '+'){
        let sum = Number(num1) + Number(num2)
        alert(`${num1} + ${num2} = ${sum}`)
    }
    else if (operation == '-'){
        let razlika = Number(num1) - Number(num2)
        alert(`${num1} - ${num2} = ${razlika}`)
    }
    else if (operation == '*'){
        let proizvod = Number(num1) * Number(num2)
        alert(`${num1} * ${num2} = ${proizvod}`)
    }
    else if (operation == '/'){
        let kolicnik = Number(num1) / Number(num2)
        alert(`${num1} / ${num2} = ${kolicnik}`)
    }
    else{
        alert('Molim te unesi operaciju...')
    };
}

calculator(prompt('Unesi 1. broj'), prompt('Unesi 2. broj'), prompt('Unesi operaciju'))