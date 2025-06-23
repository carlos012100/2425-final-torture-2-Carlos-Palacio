export default class Ingredients{
    constructor(name, effects, value, weight)
    {
        this.name = name;
        this.effects = effects;
        this.value = value;
        this.weight = weight;
        this.isEffectPositive = false;
    }

    create(jsonObject)
    {
        let newIngredient = new Ingredients(jsonObject.name, jsonObject.effects, jsonObject.value, jsonObject.weight);

        return newIngredient;
    }
    getEffects()
    {
        return this.effects;
    }   
}