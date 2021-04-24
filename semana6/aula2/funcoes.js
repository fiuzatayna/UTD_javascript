//--------------- programação orientada a objeto ----------------

//--------------- aula 2/3 ---------------

// getters and setters -----------------

let Student={
    firstname: "Ann",
    age: 23,
    program: "Biomedical Engineering",

    // getters

    get getFirstname(){
        return this.firstname;
    },

    get getAge(){
        return this.age;
    },

    get getProgram(){
        return this.program;
    },

    // setters

    set setFirstname(newFirstname){
        this.firstname = newFirstname;
    },

    set setAge(newAge){
        this.age = newAge;
    },

    set setProgram(newProgram){
        this.program = newProgram;
    }

}

Student.shift = "evening";

// print firstname
console.log(Student.getFirstname);

// change program
console.log(Student.getProgram);

Student.setProgram = "Biotechnology";

console.log(Student.getProgram);
