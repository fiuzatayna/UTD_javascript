//-------------- semana 7 --------------

let numbers = [1,2,3,4];

/*
let [a,b,c,d] = numbers;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
*/

/*
let [a, ...b] = numbers;

console.log(a);
console.log(b);
*/

//--- reduce ---

const sum = numbers.reduce(function(result,item){
    return result + item;
});

console.log(sum);

//--- filter ---

const filter = numbers.filter(item=>item<3)

console.log(filter)

const student = [
    {name: 'João', score:8},
    {name: 'Ana', score:10},
    {name: 'Paulo', score:5},
    {name: 'Carlos', score:6},
];

const pass = student.filter(student=>student.score>=7);

console.log(pass);