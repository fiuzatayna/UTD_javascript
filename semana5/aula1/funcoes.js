//--------------- aula 1/3 ---------------

let tag = document.getElementsByTagName('ul'); // pega elementos que tem tag name ul

let novoElemento = document.createElement('li'); // cria um novo elemento li
novoElemento.innerText = 'PHP'; // atribui esse texto PHP para o novo elemento
tag[0].appendChild(novoElemento); // insere esse elemento na primeira lista ul

let novoElemento2 = document.createElement('li'); // cria um novo elemento li
novoElemento2.innerText = 'Ruby'; // atribui esse texto Ruby para o novo elemento
tag[0].appendChild(novoElemento2); // insere esse elemento na primeira lista ul (tag[0])

console.log(tag[4].innerHTML); // imprime no console o html presente no elemento 5 da lista tag

//---------------

let tag2 = document.getElementsByTagName('ol'); //pega elementos de tag name ol

let novoElemento3 = document.createElement('li'); // cria um novo elemento li
novoElemento3.innerText = 'React'; // atribui esse texto Ruby para o novo elemento
tag2[0].appendChild(novoElemento3); // insere esse elemento na primeira lista ol (tag2[0])

console.log(tag2[0].innerHTML); // imprime no console o html presente no primeiro elemento da lista tag2