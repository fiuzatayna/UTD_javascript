/*

    Programa Javascript para apresentar os exercícios.

*/

function maior(){

    let numero1 = Number.parseInt(document.getElementById('numero1').value),
        numero2 = Number.parseInt(document.getElementById('numero2').value),
        numero3 = Number.parseInt(document.getElementById('numero3').value);

 const mesmo = numero1 == numero2 && numero2 == numero3;
 const um = numero1 > numero2 && numero1 > numero3;
 const dois = numero2 > numero3;

 let res = document.getElementById('resultado');

 if(mesmo){
    res.innerHTML = '<p> Os três números são iguais </p>';
 }else if(um){
    res.innerHTML = `<p> O maior número dos três é: ${numero1} </p>`;
 }else if (dois){
    res.innerHTML = `<p> O maior número dos três é: ${numero2} </p>`;
 }else{
    res.innerHTML = `<p> O maior número dos três é: ${numero3} </p>`;
 }

}

function media(){
 
    let numero1 = Number.parseInt(document.getElementById('numero1').value),
        numero2 = Number.parseInt(document.getElementById('numero2').value),
        numero3 = Number.parseInt(document.getElementById('numero3').value);
    
    let media = (numero1+numero2+numero3)/3;

    console.log(media)

    let res = document.getElementById('resultado');
    res.innerHTML = '<p> Os três números são iguais </p>';

    document.getElementById('resultado').innerText = `A média dos três valores é ${media}`;

}

function multiplos(){

    let numero = 1,
        somador = 0,
        teste = false;

    while(numero<100){
        
        teste = numero%3 == 0 || numero%5 ==0;

        if(teste){
            console.log(numero)
            somador += numero
        }

        numero++

    }
    console.log(somador)
}

// pares.push(c)
// list.push(element)

