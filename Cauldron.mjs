import Elixir from "./Elixir.mjs";
import Posion from "./Poison.mjs";
import ArrantPack from "./ArrantPrack.mjs";
import Potion from "./Potion.mjs";
import Sanity from "./Sanity.mjs";
import Ingredients from "./Ingredients.mjs";

export default class Cauldron{

    constructor(){
        this.ingredients = [];
        this.modifier = null 
        this.potionEffects = null;
        this.sumOfValues = null;
    }
    createPotion(name1, name2)
    {
        let arrayOfEffectNames = [];

       let firstIngredient = this.findtheRightPotion(name1);

       let secondIngredient = this.findtheRightPotion(name2);


       this.checkIfPotionisPositiveOrNegative(firstIngredient);
       this.checkIfPotionisPositiveOrNegative(secondIngredient);

       arrayOfEffectNames = this.findEffectsInCommon(firstIngredient, secondIngredient);
       console.log(arrayOfEffectNames)

       if( arrayOfEffectNames.length >= 2)
       {
        this.modifier = "Greater";
        this.potionEffects = arrayOfEffectNames[0] + "and" + arrayOfEffectNames[1]
        this.sumOfValues = (firstIngredient.values + secondIngredient.values) * 3;
       }
       if(arrayOfEffectNames.length === 1)
       {
        this.modifier = "Lesser";
        this.potionEffects = arrayOfEffectNames[0];
        this.sumOfValues = firstIngredient.values + secondIngredient.values;
       }

       let sumOfIngredientsWeight = firstIngredient.weight + secondIngredient.weight;

       if(firstIngredient.isEffectPositive === true && secondIngredient.isEffectPositive === true)
       {
        //we create an elixir
        // arrayOfEffectNames[0] + arrayOfEffectNames[1]

        const name = this.modifier + "elixir of" + this.potionEffects;
        let newElixir = new Elixir(name, sumOfIngredientsWeight,this.sumOfValues)
        console.log(newElixir);
        return newElixir;
       }
        else if(firstIngredient.isEffectPositive === false && secondIngredient.isEffectPositive === false)
        {
        //create posion
        const timeDefault = 10;
        const name = this.modifier + "Poison of" + this.potionEffects;
        let newPoison = new Posion (name, sumOfIngredientsWeight,this.sumOfValues, timeDefault)
        console.log(newPoison);
        return newPoison;
        }
        else if((firstIngredient.name === "Nightshade" || firstIngredient.name === "Ectoplasm") && secondIngredient.name === "Ectoplasm" || secondIngredient.name === "Nightshade")
        {
            const name = "Potion of Sanity";
            const value = 1000;
            const weight = 1;
            const time = 50;

            const newSanity = new Sanity(name, value, weight, time);
            console.log(newSanity);
            return newSanity;
        }
        else{
            const name = "Arrant Prack"
            const value = 1;
            const weight = 0;
            const time = 1;

            const escoria = new ArrantPack(name, value, weight, time)
            console.log(escoria);
            return escoria;

        }


    }
    findEffectsInCommon(firstIngredient, secondIngredient)
    {
        let arrayOfEffectNames = []
        for (let i = 0; i < firstIngredient.effects.length; ++i)
        {
            for(let j = 0; j < secondIngredient.effects.length; ++j)
            {
                if(firstIngredient.effects[i] === secondIngredient.effects[j])
                {
                    return arrayOfEffectNames.push(secondIngredient.effects[j])
                }
            }
        }
    }
    checkIfPotionisPositiveOrNegative(ingredient){

        if (ingredient.effects.type === "Positive")
        {
            ingredient.isEffectPositive = true;

        }
        else{
            ingredient.isEffectPositive = false;

        }
       


    }

    
    findtheRightPotion(string){
         for(let i = 0; i < this.ingredients.length; ++i)
        {
    
            if(this.ingredients[i].name === string){
                return this.ingredients[i];
            }
        }
    }
}