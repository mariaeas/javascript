function welcome() {
    let userName = prompt("Digite o seu nome")
    alert('Bem vindo (a), ${userName}')
};

console.log('Bem vindo ao curso, Maria Eduarda');
let idade = 24;
console.log(idade);
let altura = 160;
console.log(altura);

//const não consegue redefinir o valor da variável
//let permite que o valor da variável seja redefinido quantas vezes seja necessário
//variáveis compostas, são separadas por letra maiúscula, após a primeira palavra começar com letra minúscula (nomeCompleto)

let nome = 'Maria Eduarda'; //string literal, qualquer tipo de texto
let idade2 = 24; //number literal
let estaAprovado = true; //boolean- ajuda a construir regras no aplicativo
let corSelecionado = null; //redefinir o valor

let pessoa = {
    nome: 'Maria Eduarda',
    idade: 24,
    estaAprovado: true,
    sobrenome: 'Aparecida da Silva'
};
console.log(pessoa);

//Arrays - conjunto de dados que pode ser acessado por um índice específico
let família = [11, 24, 52];
console.log(família.length);
console.log(família[2]);

let nomeDoColega = ['Bruno', 24, 'Guaporema'];
console.log(nomeDoColega);

//COMO NOMEAR UMA FUNÇÃO= Verbo+Substantivo
let corSite = "azul"
function resetaCor(cor) {
    corSite = cor;
};
console.log(corSite);
resetaCor("vermelho");
console.log(corSite);

//FUNÇÕES: 1- Realiza uma tarefa e não devolve nada
function dizerNome() {
    console.log('Maria Eduarda');
}
dizerNome();

// FUNÇÕES: 2- Faz um  cálculo ou operação, e retorna algo
function MultiplicarPorDois(valor) {
    return valor * 2;
}
let resultado = MultiplicarPorDois(5);
console.log(resultado);

//Operadores Aritiméticos (matemáticos)
let salário = 100;
console.log(salário - 5);

//++ incrementação ; -- decrementação
let idade3 = 24;
console.log(--idade3);
console.log(++idade3);

//Operadores de Atribuição
let valorTecladoGamer = 100;
valorTecladoGamer += valorTecladoGamer;
console.log(valorTecladoGamer);

//Operadores de Comparação/Igualdade
//Igualdade estrita
console.log(1 === 1);
console.log('1' === 1)

//Operadores Ternário
function casa() {
    let number1 = +prompt("Digite o valor da pontuação");
    if (number1 > 100) {
        alert("Cliente Premium")
    } else {
        alert("Cliente Comum")
    }
}

//Operadores Lógicos: &&(e); ||(ou); !(not)
//Falsy - undefined, null, 0, false, '', NaN(not a number)
//Truthy

function idade4() {
    let string1 = +prompt(`Possui carteira de trabalho`);
    let string2 = +prompt(`É maior de idade`);
    if (string1 && string2 == true) {
        alert("Pode ser contratado")

    } else {
        alert("Não pode ser contratado")
    }

};

let a = 'vermelho';
let b = 'azul';
let c = a;
a = b;
b = c;
console.log(a);
console.log(b);

//IF..ELSE
//Se a hora estiver entre 06:00 até 12:00: Bom Dia!
let hora = 10 //posso definir a hora que quiser ;
if (hora > 6 && hora < 12) {
    console.log("Bom dia!");
}
//Se estiver entre 12:00 até 18:00: Boa tarde!
else if (hora > 12 && hora < 18) {
    console.log("Boa tarde!");
}
//Caso contrário: Boa noite!
else {
    console.log("Boa noite!");
}

//Switch..case
let permissao;
permissao = 'gerente';
switch (permissao) {
    case 'comum':
        console.log('usuário comum');
        break; //parar esta ação

    case 'gerente':
        console.log('usuário gerente');
        break;

    default:
        console.log('usuário não reconhecido')
}

//LOOP:
//1-FOR
for (let i = 0; i < 5; i++) {
    console.log('Estou aprendendo!', i)
    if (i % 2 !== 0) {
        console.log(i);
    }
}

//2-WHILE
let i = 5;
while (i >= 1) {
    if (i % 2 !== 0) {
        console.log(i);
    }
    i--;
}

//3-DO..WHILE
let O = 0;
do {
    console.log('digitando');
    i++;
};
while (O < 10);

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
}

//FIZZBUZZ
function fizzBuzz() {
    let entrada = +prompt('Digite a entrada')
    if (typeof entrada !== 'number')
    alert ('Não é um número');

    if (entrada % 3 === 0)
    alert ('Fizz');

    if (entrada % 5 === 0)
    alert ('Buzz');

    if (entrada % 3 && 5 === 0)
    alert ('FizzBuzz')

    else {
    alert ('entrada');
    }
}

verificarVelocidade(70);
function verificarVelocidade() {
    const velocidadeMáxima = 70;
    const kmPorPonto = 5;
    let number1 = +prompt ('Digite o valor da velocidade atingida')
    if (velocidade <= velocidadeMáxima) {
        alert 'OK';
    }

    else if {
        const pontos = Math.Floor(((velocidade - velocidadeMáxima) / kmPorPonto));
        if(pontos >= 12)
        alert ('Carteira suspensa');
    
        else ()
    alert ('Pontos', pontos);
    }
}

exibirTipo(5);
function exibirTipo(limite) {
    for(let i = 0; i <= limite; i++) {
        if (i % 2 === 0)
        console.log('PAR');
    else
    console.log('ÍMPAR');
    }
}

const filme = {
    título : 'Vingadores',
    ano : 2018,
    diretor : 'Robin',
    personagem : 'Thor'
}
exibirPropriedades(filme);
function exibirPropriedades(obj) {
    for(prop in obj)
    if(typeof obj[prop] === 'string')
    console.log(prop,obj[prop])
}


