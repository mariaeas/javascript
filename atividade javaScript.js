function criarTabuada() {
    let number = +prompt("Digite aqui um número para a resolução da tabuada")
    for (let contador = 1; contador <= 10; contador++) {
        console.log(`${number} x ${contador} = ${number * contador}`)
    }
};

function obterFatorial() {
let N = +prompt("Digite aqui o número para resolução do fatorial")
let fatorial = N;
for(cont = 1; cont < N; cont++ ) {
fatorial = fatorial * (N - cont);
}
alert(N + "! = " + fatorial);
};

function adivinhação() {
    let chute= 1;
    let númeroSorteado = Math.floor(Math.random() * 100);
    let number2 = +prompt("Digite aqui, o número que você pensa ter sido o sorteado, para esta dinâmica")
    while ( chute !== 100) {
        if (number2 < númeroSorteado) {
            alert("O número digitado é menor que o escolhido, resposta errada")
           ++chute
            
        } else if (number2 > númeroSorteado) {
            alert("O número digitado é maior que o escolhido, resposta errada")
            ++chute
            
        } else {
            alert("O número que você digitou, está correto!")
            break
        }
    }
}
