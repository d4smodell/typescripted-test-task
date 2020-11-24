import { applyMiddleware, compose, createStore } from "redux";
import { rootReducer } from "./reducers/rootReducer";
import thunk from 'redux-thunk'

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ 
    ? compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__())
    : applyMiddleware(thunk));
