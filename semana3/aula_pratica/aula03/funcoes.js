//alert("Olá Mundo!");

/*

    Programa Javascript para apresentar funções.

*/

const painel = document.getElementById("painel");
let texto = "";

let numero1=30, numero2=10;

//função com os parâmetros e com retorno
function soma(variavel1, variavel2){
    return variavel1 + variavel2;
};

texto = soma(numero1, numero2);

//função sem parâmetro e com retorno
function endereco(){
    return "Av. Beira Mar, 212";
}

texto = endereco();

//função sem parâmetro e sem retorno
function olaMundo(){
    console.log("Olá mundo!")
}

olaMundo();

const resultado = document.createTextNode(texto);
painel.appendChild(resultado);