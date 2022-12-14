class Card{
    constructor(name, cost){
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card{
    constructor(name, cost, power, res){
        super(name, cost);
        this.power = power;
        this.res= res;       
    }
    attack(target){
        target.res -= this.power;
        console.log(`${this.name} attacked ${target.name}. ${target.name}'s resilience was lowered to ${target.res}`);
        return target;
    }
}

class Effect extends Card{
    constructor(name, cost, text, stat, mag){
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.mag = mag;
    }
    play( target ) {
            if( target instanceof Unit ) {
                console.log(`${this.name} to ${target.name}, ${this.stat} adjusted by ${this.mag}`)
                target[this.stat] += this.mag;
            } else {
                console.log("Target must be a user");
            }
        }
        
}

const redBeltNinja = new Unit("red belt ninja", 3,3,4);
const blackBeltNinja = new Unit("black belt  ninja", 4,5,4);
const hardAlgorithm = new Effect("hard algorithm", 2, "increase target resilience by 3", "resilience", "+3");
const unhandledPromiseRejection = new Effect("unhandledPromiseRejection", 2, "increase target resilience by 3", "resilience", "-2");
const pairProgramming = new Effect("pair program", 2, "increase target's power by 2", "power", "+2");

redBeltNinja.attack(blackBeltNinja);
hardAlgorithm.play(redBeltNinja);

hardAlgorithm.play(hardAlgorithm);