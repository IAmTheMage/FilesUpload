import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import saga from "./saga";
import { login, signUp, feed } from "./reducers";

const sagaMiddleware = createSagaMiddleware();
const combinedReducers = combineReducers({ login, signUp, feed });
const store = createStore(combinedReducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(saga);

export default store;
