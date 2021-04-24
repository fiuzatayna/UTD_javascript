//--------------- programação orientada a objeto ----------------

//--------------- aula 1/3 ---------------

// constructor method -----------------

function Person(){
    this.name = "";
    this.age = "";
}

let p1 = new Person();

p1.name = "Joanne";
console.log(p1.name);

p1.age = "33";
console.log(p1.age);

// literal method -----------------

let Student={
    firstname: "Ann",
    age: 23,
    program: "Biomedical Engineering"
}

console.log(Student.firstname);
console.log(Student.age);
console.log(Student.program);

// destructuring -----------------

let {firstname,age} = Student;

console.log(firstname);
console.log(age);


// add parameter -----------------

Student.shift = "evening";

console.log(Student.shift);