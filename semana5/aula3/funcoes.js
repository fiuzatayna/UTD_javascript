function efetuarPagamento(total){
    if(total <= saldo)
        return Promise.resolve('Compra autorizada');
    else
        return Promise.reject('Transação interrompida. Saldo insuficiente.');
}

let saldo = 100;

efetuarPagamento(120)
    .then(result => console.log("Promise resolved: "+result))
    .catch(error => console.log("Promise rejected: "+error))

console.log("Processando...")