//alert("Olá Mundo!");

/*

    Programa Javascript para apresentar estruturas de repetição.

*/

let flag = true;
let contador = 0;

/*
const painel = document.getElementById("painel");
let texto = "";

while(flag){
    if (contador<10){
        console.log("trabalhando...")
        contador++;

        //imprime na tela
        texto = "trabalhando"   
        let resultado = document.createTextNode(texto+" ");
        painel.appendChild(resultado);

    }else{
        flag = false;
    };
};
*/

for (let x=0; x<20; x+=2){
    let resultado = document.createTextNode(x+", ");
    painel.appendChild(resultado);
}