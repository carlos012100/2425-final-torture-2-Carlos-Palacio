import Potion from  "./Poison.mjs"
export default class ArrantPack extends Potion{

    constructor(name, value, weight, time){
        super(name, value, weight)
        this.time = time;
    }
        showInfo()
    {
        
    }
}