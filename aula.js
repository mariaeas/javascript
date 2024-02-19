console.log('Bem vinda ao curso, Maria Eduarda');
let idade = 24;
console.log(idade);
let altura = 160;
console.log(altura);

function welcome() {
    let userName = prompt("Digite seu nome")
    alert(`Seja bem vindo(a), ${userName}`)
    console.log(`A aluna ${userName}, está aprendendo JavaScript`)
};

let pessoa = {
    nome: 'Maria Eduarda',
    idade: 24,
    estaAprovado: true,
    sobrenome: 'Aparecida da Silva'
};
console.log(pessoa);

let família = [11, 24, 52];
console.log(família.length);
console.log(família[2]);

let nomeDoColega = ['Bruno', 24, 'Guaporema'];
console.log(nomeDoColega);

let corSite = "azul"
function resetaCor(cor) {
    corSite = cor;
};
console.log(corSite);
resetaCor("vermelho");
console.log(corSite);

function somar() {
    let texto1 = document.getElementById("textn1")
    let texto2 = document.getElementById("textn2")
    let resultado = document.getElementById("res")
    let n1 = number(texto1.value)
    let n2 = number(texto2.value)
    let soma = n1 + n2
    resultado.innerText = `A soma entre ${n1} e ${n2} é igual a ${soma}`
}

//FUNÇÕES: 1- Realiza uma tarefa e não devolve nada
function dizerNome() {
    console.log('Maria Eduarda');
}
dizerNome();

// FUNÇÕES: 2- Faz um  cálculo ou operação, e retorna algo
function MultiplicarPorDois(valor) {
    return valor * 2;
};
let resultado = MultiplicarPorDois(5);
console.log(resultado);

//Operadores Aritiméticos (matemáticos)
let salário = 100;
console.log(salário - 5);

let idade3 = 24;
console.log(--idade3);
console.log(++idade3);

//Operadores de Comparação/Igualdade
//Igualdade estrita
console.log(1 === 1);
console.log('1' === 1)

//Falsy - undefined, null, 0, false, '', NaN(not a number)
//Truthy

//IF..ELSE
function idade4() {
    let string1 = +prompt("Possui carteira de trabalho");
    let string2 = +prompt("É maior de idade");
    if (string1 && string2 == true) {
        alert("Pode ser contratado")

    } else {
        alert("Não pode ser contratado")
    }

};

function casa() {
    let number1 = +prompt("Digite o valor da sua pintuação de cliente");
    if (number1 > 100) {
        alert("Cliente Premium")
    } else {
        alert("Cliente Comum")
    }
};

//Para mostrar a hora atual, sempre do navegador que estará rodando o código
let horaAtual = new Date()
let hora = agora.getHours()
if (hora > 6 && hora < 12) {
    console.log("Bom dia!");
} else if (hora > 12 && hora < 18) {
    console.log("Boa tarde!");
} else {
    console.log("Boa noite!");
};

function verificarVelocidade() {
    const velocidadeMaxima = 70;
    const kmPorPonto = 5;
    let velocidade = +prompt('Digite a velocidade atingida')
    if (velocidade <= velocidadeMaxima) {
        alert('OK');

    } else if (`${velocidade} - ${velocidadeMaxima}`) {
        alert(`Você ultrapassou ${velocidade - velocidadeMaxima} km`);

    } else if (pontos >= 10)
        alert(`Carteira suspensa, você recebeu ${(velocidade - velocidadeMaxima) / 5} pontos`);
};

//Switch..case
let permissao;
permissao = 'gerente';
switch (permissao) {
    case 'comum':
        console.log('usuário comum');
        break;

    case 'gerente':
        console.log('usuário gerente');
        break;

    default:
        console.log('usuário não reconhecido')
        break
};

//LOOP:
//1-FOR
exibirTipo(5);
function exibirTipo(limite) {
    for (let i = 0; i <= limite; i++) {
        if (i % 2 === 0)
            console.log('PAR');
        else
            console.log('ÍMPAR');
    }
};

for (let i = 2; i < 5; i++) {
    console.log('Estou aprendendo!', i++)
    if (i % 2 !== 0) {
        console.log(i);
    }
};

//2-WHILE
let i = 5;
while (i >= 1) {
    if (i % 2 !== 0) {
        console.log(i);
    }
    i++;
};

//3-DO..WHILE
let O = 0;
do {
    console.log('digitando');
    i++;
} while (O <= 10);

//4-FOR..IN
const indivíduo = {
    nome: 'Maria Eduarda',
    idade: 24
};

for (let chave in indivíduo) {
    console.log(chave, indivíduo.nome);
}

const cores = ['vermelho', 'azul', 'verde'];
for (let indice in cores) {
    console.log(indice, cores[indice])
}

//4-FOR..OF
for (let cor of cores) {
    console.log(cor);
}

function maior() {
    let number1 = +prompt('Digite o primeiro número')
    let number2 = +prompt('Digite o segundo número')
    if (number1 > number2) {
        return number1;
    } else {
        return number2;
    }
};

//FIZZBUZZ
function fizzBuzz() {
    let entrada = +prompt('Digite a entrada')
    if (typeof entrada !== 'number')
        alert('Não é um número');

    if (entrada % 3 === 0)
        alert('Fizz');

    if (entrada % 5 === 0)
        alert('Buzz');

    if (entrada % 3 && 5 === 0)
        alert('FizzBuzz')

    else {
        alert('entrada');
    }
};