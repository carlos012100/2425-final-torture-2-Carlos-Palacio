export default class Effect{
    constructor(name, type)
    {
        this.name = name;
        this.type = type;
    }
    create(name)
    {
        let newName = new Effect(name, this.type)
        return newName;
    }
}