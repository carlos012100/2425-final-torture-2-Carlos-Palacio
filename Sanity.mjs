import Potion from  "./Poison.mjs"
export default class Sanity extends Potion{

    constructor(name, value, weight, time){
        super(name, value, weight)
        this.time = time;
    }
        showInfo()
    {
        
    }
}