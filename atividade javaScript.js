function criarTabuada() {
    let number = +prompt("Digite aqui um número para a resolução da tabuada")
    for (let contador = 1; contador <= 10; contador++) {
        console.log(`${number} x ${contador} = ${number * contador}`)
    }
};

function obterFatorial() {
    let num = +prompt("Digite o número aqui")
    let fatorial = 1;
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

// function obterFatorial() {
//     let N = +prompt("Digite aqui o número para resolução do fatorial")
//     let fatorial = N;
//     for(cont = 1; cont < N; cont++ ) {
//     fatorial = fatorial * (N - cont);
// }
// alert(N + "! = " + fatorial);
// }



function adivinhação() {
    let númeroSorteado = Math.floor(math.rando() * 100);
    let number2 = +prompt("Digite aqui, o número que você pensa ter sido o sorteado, para esta dinâmica")
    while ( númeroSorteado !== number2) 
        if (number2 < númeroSorteado) {
            alert("O número digitado é menor que o escolhido, resposta errada")

        } else if (number2 > númeroSorteado)
            alert("O número digitado é maior que o escolhido, resposta errada")

        else {
            alert("O número que você digitou, está correto!")
        }
    }