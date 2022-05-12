import { applyMiddleware,createStore } from "redux";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import rootReducer from './root-reducer'
import rootSage from "./saga";
const sagaMiddleWare=createSagaMiddleware();

const middleWare=[sagaMiddleWare];

if(process.env.NODE_ENV==="development"){
    middleWare.push(logger)
}
const store=createStore(rootReducer, applyMiddleware(...middleWare))
sagaMiddleWare.run(rootSage)
export default store