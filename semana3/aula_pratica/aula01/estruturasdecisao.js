//alert("Olá Mundo!");

/*

    Programa Javascript para apresentar estruturas de decisão.

*/

// Criando variáveis com var, let ou const

var letra='Javascript';
console.log(letra);

let numero1=10, numero2=25;

/*

// + soma, - subtração, * multiplicação e / divisão //

console.log(numero1+numero2);

console.log(numero1-numero2);

console.log(numero1*numero2);

console.log(numero1/numero2);

// concatenation

console.log(letra+letra)

*/


/*

// 

console.log(numero1>numero2);

console.log(numero1<=numero2);

console.log(numero1==numero2);

console.log(numero1!=numero2);

//

*/


/*

letra = "10";


console.log(numero1==letra); //igual (valores)

console.log(numero1===letra); //identico(valores e tipos)

*/

/*

letra = 1;

if(numero1===letra){
    console.log("Eles são do mesmo tipo")
} else if (numero1==letra){
    console.log("Os dois são iguais")
} else {
    console.log("Os dois não são iguais ou do memos tipo")
}

*/

let opcao = 3
switch(opcao){
    case 1 : console.log("ensino médio"); break;
    case 2 : console.log("graduação"); break;
    case 3 : console.log("mestrado"); break;
    case 4 : console.log("doutorado"); break;
    default: console.log("escolaridade não definida")
}