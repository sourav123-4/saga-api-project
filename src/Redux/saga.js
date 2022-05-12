import { takeLatest, all, put, fork, call } from "redux-saga/effects";
import { types } from "./ActionTypes";
import { getRecipes } from "./Api";

export function* onLoadRecipeAsync({ payload:query }){
    try{
        const res=yield call(getRecipes,query);
        yield put({ type:types.FETCH_RECIPE_SUCCESS,payload:res.data })
    }catch(error){
        yield put({ type:types.FETCH_RECIPE_FAIL,payload:error })
    }
}

export function* onLoadRecipe(){
    yield takeLatest(types.FETCH_RECIPE_START,onLoadRecipeAsync)
}
const recipeSaga=[fork(onLoadRecipe)];

export default function* rootSage(){
    yield all([...recipeSaga])
}