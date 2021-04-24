//--------------- programação orientada a objeto ----------------

//--------------- aula 3/3 ---------------

// herança

class Account{
    constructor(){
        this.balance = 0;
    }

    withdrawal(value){
        if (value > this.balance){
            console.log("Not enough funds!");
        } else {
            this.balance -= value
            //equivalent to this.balance = this.balance - value;
        }
    }

    deposit(value){
        this.balance += value
        //equivalent to this.balance = this.balance + value;
    }
}

class Savings extends Account{
    yield(percentage){
        this.balance += this.balance * (percentage/100);
    }
}

class Current extends Account{
    maintenance(percentage){
        this.balance -= this.balance * (percentage/100);
    }
}

let c1 = new Savings;

c1.deposit(1000);

console.log(c1.balance);

c1.yield(10);

console.log(c1.balance);

c1.withdrawal(300);

console.log(c1.balance);


