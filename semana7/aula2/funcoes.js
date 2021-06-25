//-------------- semana 7 --------------

let listx = ["frango", "carne", "peixe", "maçã", "aveia", "laranja", "melancia"];

// forEach

listx.forEach(showItems);

function showItems(item){
    console.log(item);
}

// rest parameters accepts an indeterminate number of parameters

function changeList(...vowels){
    console.log(vowels)
}

changeList("a", "e", "i", "o", "u");

// spread operator allows using the ... to concatenate a list to other items

let food = [...listx, "suco", "uva", "pêra"];

console.log(food);

// map

let numbers = [3,4,5,6,7];

console.log(numbers);

let copy = numbers.map(item=>item*2);

console.log(copy)

console.log(numbers);