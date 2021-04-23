const titulo1 = document.getElementsByTagName('h3')

const titulo2 = document.getElementsByTagName('h3')

const titulo3 = document.getElementsByClassName('vermelho')

const titulo = document.querySelector('#titulo');

//titulo.textContent = 'concluído'

if(titulo.textContent == 'concluído'){
    titulo.setAttribute('style', 'color: red;');
}

// arrow functions

// before...

function multiplicacao(x, y){
    return x*y;
}

console.log(multiplicacao(30,6));

// after...

let a = 3;
let b = 8;

const mult = (a,b) => a*b;

console.log(mult(a,b));


// promises

/*
function gerarBoleto(mes){
    if(mes>0 && mes<=12)
        return Promise.resolve(`${mes}`);
    else
        return Promise.reject('mês inválido');
}


gerarBoleto(15)
    .then(result => console.log(result))
    .catch(error => console.log(error))


console.log('processando....');

*/


// assync e await

function gerarBoleto(mes){

    return new Promise((resolve,reject)=>{
        if(mes>0 && mes<=12)
            return Promise.resolve(`${mes}`);
        else
            return Promise.reject('mês inválido');
    });
}

async function processo(){
    try{
        const res = await gerarBoleto(4);
        console.log(res);
    } catch(error) {
        console.log(error);
    }
}

processo();
