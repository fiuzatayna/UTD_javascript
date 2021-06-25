//-------------- semana 7 --------------

//-------------- arrays --------------

//-------------- vector --------------

let vector = ["uva", "mamão", "maçã", "maracujá", "melancia"];

for (var x=0; x<vector.length; x++){
    console.log(vector[x])
};

for (item in vector){
    console.log(vector[item])
};

//-------------- map --------------

const vectorB = [1,2,3,4,5,6,7];

const newVector = vectorB.map(function(item){
                            return item*2
                            });

console.log(newVector);


//-------------- reduce --------------

const vectorReduce = vectorB.reduce(function(total, next){
                                    return total+next
                                    });

console.log(vectorReduce);

//-------------- filter --------------

const filter = vectorB.filter(function(item){
    return item % 3 == 0
});

console.log(filter);

//-------------- find --------------

const find = vectorB.find(function(item){
                        return item == 6
                        });

console.log(find);