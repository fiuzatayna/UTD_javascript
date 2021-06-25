//--------------- programação orientada a objeto ----------------

//--------------- aula sincrona ---------------

function Pessoa(nome, idade){
    this.nome = nome;
    this.idade = idade;
}

Pessoa.prototype.andar = function(){
    console.log(`${this.nome} está andando elegantemente`)
}

Pessoa.prototype.mostraIdade = function(){
    console.log(`${this.nome} tem ${this.idade} ano(s).`)
}


/*
class Aluno extends Pessoa{

}


*/

let nome = document.querySelector("#nome");
let idade = document.querySelector("#idade");

function mostraObjecto(){
    var p1 = new Pessoa(nome.value,idade.value);

    p1.mostraIdade();
    p1.andar();
}