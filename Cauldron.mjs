import Elixir from "./Elixir.mjs";
import Posion from "./Poison.mjs";
import ArrantPack from "./ArrantPrack.mjs";
import Potion from "./Potion.mjs";
import Sanity from "./Sanity.mjs";

export default class Cauldron{

    constructor(){
        this.ingredients = [];
    }
    createPotion(name1, name2)
    {
        let arrayOfEffectNames = [];

       const firstIngredient = this.findtheRightPotion(name1);

       const secondIngredient = this.findtheRightPotion(name2);

       this.checkIfPotionisPositiveOrNegative(firstIngredient);
       this.checkIfPotionisPositiveOrNegative(secondIngredient);

       arrayOfEffectNames = this.findEffectsInCommon(firstIngredient, secondIngredient);

       let modifier = null; 

       let potionEffects = null;

       let sumOfValues = null;

       if( arrayOfEffectNames.length >= 2)
       {
        modifier = "Greater";
        potionEffects = arrayOfEffectNames[0] + "and" + arrayOfEffectNames[1]
        sumOfValues = (firstIngredient.values + secondIngredient.values) * 3;
       }
       if(arrayOfEffectNames.length === 1)
       {
        modifier = "Lesser";
        potionEffects = arrayOfEffectNames[0];
        sumOfValues = firstIngredient.values + secondIngredient.values;
       }

       let sumOfIngredientsWeight = firstIngredient.weight + secondIngredient.weight;

       if(firstIngredient.isEffectPositive === true && secondIngredient.isEffectPositive === true)
       {
        //we create an elixir
        // arrayOfEffectNames[0] + arrayOfEffectNames[1]

        const name = modifier + "elixir of" + potionEffects;
        let newElixir = new Elixir(name, sumOfIngredientsWeight,sumOfValues)
        console.log(newElixir);
        return newElixir;
       }
        else if(firstIngredient.isEffectPositive === false && secondIngredient.isEffectPositive === false)
        {
        //create posion
        const timeDefault = 10;
        const name = modifier + "Poison of" + potionEffects;
        let newPoison = new Posion (name, sumOfIngredientsWeight,sumOfValues, timeDefault)
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
        let counter = 0;
        let arrayOfEffectNames = []
        for (let i = 0; i < firstIngredient.effect.length; ++i)
        {
            for(let j = 0; j < secondIngredient.effect.length; ++j)
            {
                if(firstIngredient.effect[i].name === secondIngredient.effect[j].name)
                {
                    ++counter;

                    return arrayOfEffectNames.push(secondIngredient.effect[j].name)
                }
            }
        }
    }
    checkIfPotionisPositiveOrNegative(ingredient){
         for(let j = 0; j < ingredient.effect.length; ++j)
       {
        if (ingredient.effect[j].type === "Positive")
        {
            ingredient.isEffectPositive = true;

        }
        else{
            ingredient.isEffectPositive = false;

        }
       }


    }

    
    findtheRightPotion(name){
         for(let i = 0; i < this.ingredients.length; ++i)
        {
            if(this.ingredients[i].name === name){
                return this.ingredients[i];
            }
            else{
                return null;
            }
        }
    }
}