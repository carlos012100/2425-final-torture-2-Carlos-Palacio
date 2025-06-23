import Cauldron from "./Cauldron.mjs";
import Ingredients from "./Ingredients.mjs";
import Potion from "./Potion.mjs";
import Effect from "./Effect.mjs";

//Recibe la base de datos

async function loaData()
{
    const response = await fetch("https://raw.githubusercontent.com/zsiciarz/skyrim-alchemy-toolbox/master/data/ingredients.json")
    const data = await response.json();
    // console.log(data)

    return data;
}

 let data = await loaData();

console.log("data", data)

//factoria de pociones, que contiene el array de ingredientes

const cauldron = new Cauldron ()

console.log(data.ingredients.length)


//funcion que genera los ingredientes y los introduce en nuestro array de ingredientes dentro de Cauldron

function ingredientCreation(dataIngredients)
{
    for(let i = 0; i < dataIngredients.length; ++i)
    {

        let newIngredient = new Ingredients().create(dataIngredients[i])

        cauldron.ingredients.push(newIngredient);
    
    }
}
ingredientCreation(data.ingredients);

console.log(cauldron.ingredients[0].effects)

//Crearemos las 6 pociones con los datos dados
const name1 = "Bear Claws"
const name2 = "Bee"
const potion1 = cauldron.createPotion(name1,name2);

console.log(potion1)


