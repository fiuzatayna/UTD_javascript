//--------------- aula 2/3: ECMASCRIPT ---------------

//------ let e const

// var permitia a chamada de uma variável mesmo antes de sua declaração, exemplo

//console.log(variavel); //imprime undefined pois variavel ainda não foi declarada
var variavel = 1;

// console.log(variavel2); //dá erro porque a variável não foi declarada
let variavel2 = 1;

// console.log(variavel3); //dá erro porque a variável não foi declarada
const variavel3 = 1; //permite a imutabilidade da variável, veja

// variavel3 = 2; //dá erro porque essa variável é imutável

//------ valores padrões de função

/*

function mostraIdade(idade){
    console.log(idade); //retorna undefined pois não há valor padrão atribuído
}

mostraIdade()

*/

///*

function mostraIdade(idade=33){
    console.log(idade); //retorna 33 se não houver valor atribuído
}

mostraIdade() //retorna 33

mostraIdade('25') //retorna o valor passado

//*/

//------ impressão com o ecmascript

let nome="Juan";
let idade="72";
let endereco="Serra do Passado";

//antes do ecmascritp...
//console.log("Nome: "+nome+", "+"Idade: "+idade+","+"Endereco: "+endereco+".");

//agora...
//console.log(`Nome: ${nome}, Idade: ${idade}, Endereço: ${endereco}`);

//------ arrow functionss

// função normal
function soma(x,y){
    return x+y;
}

let somaArrow = (x,y) => x + y;

console.log(soma);
console.log(somaArrow);

console.log(soma(10,20));
console.log(somaArrow(10,20));
