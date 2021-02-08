import {createStore, applyMiddleware, Middleware} from 'redux';
import thunk from 'redux-thunk';
import RootReducer from './reducers/RootReducer'

const middlewares: Middleware[] = [thunk];

const store = createStore(RootReducer, applyMiddleware(...middlewares))

export default store;