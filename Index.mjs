
async function loaData()
{
    const response = await fetch("https://raw.githubusercontent.com/zsiciarz/skyrim-alchemy-toolbox/master/data/ingredients.json")
    const data = await response.json();
    // console.log(data)

    return data;
}
let data = []
 data = await loaData();

console.log("data", data)