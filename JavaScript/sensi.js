class Ninja {
    constructor(name, health){
        this.name= name;
        this.health= health;
        this.speed=3;
        this.strength=3;
    }
    sayName(){
        console.log(this.name);
    }

    showStats(){
        console.log("Name : ", this.name, "Health: " , this.health, "Speed:", this.speed, "Strength:", this.strength);
    }

    drinkSake(){
        this.health += 10;
    }




}
const ninja1 = new Ninja("Haninz",5);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();

class Sensi extends Ninja {
    constructor(name){
       
        super(name,200)
        this.speed =10;
        this.strength=10;
        this.wisdom = 10;
    }
    speakWisdom(){
        const healthof = super.drinkSake()
        console.log("What one programmer can do in one month, two programmers can do in two months.");
    }
}


const superHaninz = new Sensi("Master Haninz");
superHaninz.speakWisdom();
superHaninz.showStats();


