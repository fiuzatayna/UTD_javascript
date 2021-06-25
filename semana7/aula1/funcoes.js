//-------------- semana 7 --------------

let listx = [];

listx[0] = "leite";
listx[1] = "carne";
listx[2] = "frango";
listx[3] = "maçã";
listx[4] = "abacate";
listx[5] = "peixe";

console.log(listx);

//-------------- add items --------------

console.log("***PUSH***")

listx.push("uva"); //adds a last item

console.log(listx); 

console.log("***UNSHIFT***")

listx.unshift("aveia"); //adds a first item

console.log(listx);

//-------------- remove items --------------

console.log("***POP***")

listx.pop(); //removes last item

console.log(listx);

console.log("***SHIFT***")

listx.shift(); //removes first item

console.log(listx);

//-------------- remove or replaces items --------------

console.log("***SPLICE***")

listx.splice(3,2); //removes 2 items from index 3 on
console.log(listx);

listx.splice(2,1, "melancia"); //inserts item on index 2 to replace the next 1 items
console.log(listx);

listx.splice(2); //removes all items from a given index on
console.log(listx);