import Effect from "./Effect.mjs";
export default class Ingredients{
    constructor(name, effects, value, weight)
    {
        this.name = name;
        this.effects = effects;
        this.value = value;
        this.weight = weight;
        this.isEffectPositive = false;
    }
    //Creamos un array con los effectos
    
    effectCreation(dataEffects)
    {
        for( let i = 0; i < dataEffects.length; ++i)
        {
            if(dataEffects[i].includes("Fortify", "Cure", "Restore", "Regenerate", "Invisibility", "Waterbreathing"))
            {
                let positiveEffects = new Effect(dataEffects[i], "Positive")
    
                return positiveEffects;
            }
            if(dataEffects[i].includes("Weakness") || dataEffects[i].includes("Damage") ||  dataEffects[i].includes("Ravage") || dataEffects[i].includes("Frenzy"), dataEffects[i].includes("Paralysis"),dataEffects[i].includes("Slow"))
            {
                let negativeEffects = new Effect (dataEffects[i], "Negative")
                return negativeEffects;
            }
        }
    }

    create(jsonObject)
    {
        let newIngredient = new Ingredients(jsonObject.name, this.effectCreation(jsonObject.effects), jsonObject.value, jsonObject.weight);

        return newIngredient;
    }
    getEffects()
    {
        return this.effects;
    }   
}