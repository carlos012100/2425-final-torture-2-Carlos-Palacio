import Cauldron from "./Cauldron.mjs";
import Ingredients from "./Ingredients.mjs";
import Potion from "./Potion.mjs";

async function loaData()
{
    const response = await fetch("https://raw.githubusercontent.com/zsiciarz/skyrim-alchemy-toolbox/master/data/ingredients.json")
    const data = await response.json();
    // console.log(data)

    return data;
}

 let data = await loaData();

console.log("data", data)

const cauldron = new Cauldron ()

console.log(data.ingredients.length)


function ingredientCreation(dataIngredients)
{
    for(let i = 0; i < dataIngredients.length; ++i)
    {
        let newIngredient = new Ingredients().create(dataIngredients[i])

        cauldron.ingredients.push(newIngredient);
    
    }
    console.log(cauldron.ingredients)
}
ingredientCreation(data.ingredients)