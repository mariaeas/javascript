function criarTabuada() {
    let number = +prompt("Digite aqui um número para a resolução da tabuada")
    for (let contador = 1; contador <= 10; contador++) {
        console.log(`${number} x ${contador} = ${number * contador}`)
    }
};

function obterFatorial() {
    let num = +prompt("Digite o número aqui")
    let soma = 1;
    if (Number.isInteger(num) == true) {
        while (num > 0) {
            soma = soma * num;
            console.log(`${soma} = ${soma} x ${num} = ${soma = soma * num}`)
            num--
        }
        return soma

    } else {
        alert("não é inteiro")
        return 0
    }
}


function adivinhação() {
    let sequência = ("1 , 100")
    let number2 = +prompt("Digite aqui, o número que você pensa ter sido o sorteado, para esta dinâmica")
    while (`${sequência.length} !== number2`) {
        console.log(`${sequência.length}`)

        if (`number2 < ${sequência.length}`) {
            alert("O número digitado é menor que o escolhido, resposta errada")

        } else if (`number2 > ${sequência.length}`)
            alert("O número digitado é maior que o escolhido, resposta errada")

        else {
            alert("O número que você digitou, está correto!")
        }
    }
};