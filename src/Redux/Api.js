import axios from "axios";

const YOUR_APP_ID="7341a903";
const YOUR_APP_KEY="81b0dca8ab2ef8fe59083546ad9884cf";

export const getRecipes = async(query)=>{
    const url=`https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`;
    return await axios.get(url)    
}