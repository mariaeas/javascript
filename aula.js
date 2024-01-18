console.log('maria edurda')
console.log('bem vindo ao curso')
let idade = 24;
console.log(idade);
let altura = 160;
console.log(altura);

//const não consegue redefinir o valor da variável
//let permite que o valor da variável seja redefinido quantas vezes seja necessário

let nome = 'Maria Eduarda'; //string literal
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

//Arrays - conjunto de dados que pode ser acessado por um índice
let família = [11, 52];
console.log(família);

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
    console.log('Maria Eduarda')
}
dizerNome();

// 2- Faz um  cálculo ou operação, e retorna algo
function MultiplicarPorDois(valor) {
    return valor * 2;
}
//console.log(MultiplicarPorDois(5));
let resultado = MultiplicarPorDois(5);
console.log(resultado);