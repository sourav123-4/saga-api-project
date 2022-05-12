import React from 'react';
import './App.css';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { useSelector,useDispatch } from 'react-redux';
import {types} from './Redux/ActionTypes'
function App() {
  const [search,setSearch]=React.useState("")
  const [query,setQuery]=React.useState("grapes")
  const { recipes } = useSelector(state=>state.data)
  let dispatch=useDispatch()
  React.useEffect(()=>{
    dispatch({type: types.FETCH_RECIPE_START,payload:query})
  },[query])
  const updateSearch = ()=>{
    setQuery(search);
    setSearch("");
  }
   
  return (
    <div className="App">
      <h1><u>Recipe-App</u></h1>
      <form >
        <TextField 
          id="outlined-basic" 
          label="Food" 
          variant="outlined" 
          value={search} 
          style={{width:"250px",height:"50px"}}
          onChange={(e)=>setSearch(e.target.value)}
        />
        <Button 
          variant="contained" 
          color="primary" 
          style={{margin:"5px",width:"80px",height:"50px"}} 
          onClick={updateSearch}
        >
          Search
        </Button>
      </form>
      <div className='img-div'>
      {recipes && recipes.hits && recipes.hits.map((item)=>{
          return (<div>
            <img src={item.recipe.image} alt='logo' height='300px' width='300px'/>
            <h4>{item.recipe.label}</h4>
            </div>)
        })}
      </div>
    </div>
  );
}

export default App;
