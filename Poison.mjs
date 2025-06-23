import Potion from  "./Poison.mjs"
export default class Posion extends Potion{

    constructor(name, value, weight, time){
        super(name, value, weight)
        this.time = time;
    }
}