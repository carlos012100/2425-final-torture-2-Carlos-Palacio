import Potion from  "./Potion.mjs"
export default class Poison extends Potion{

    constructor(name, value, weight, time){
        super(name, value, weight)
        this.time = time;
    }
        showInfo()
    {
        
    }
}