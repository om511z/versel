import {  legacy_createStore as createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import { jacketDetailsReducer, jacketReducer, jeansDetailsReducer, jeansReducer, kurtaDetailsReducer, kurtaReducer, shirtDetailsReducer, shirtReducer, tshirtDetailsReducer, tshirtReducer } from './Reducer/shirtReducer';

const reducer = combineReducers({
   shirt:shirtReducer,
   shirtdetail:shirtDetailsReducer,
   tshirt:tshirtReducer,
   tshirtdetail:tshirtDetailsReducer,
   jeans:jeansReducer,
   jeansdetail:jeansDetailsReducer,
   jacket:jacketReducer,
   jacketdetail:jacketDetailsReducer,
   kurta:kurtaReducer,
   kurtadetail:kurtaDetailsReducer
})

let initialState = {}

const middleware = [thunk]
const store = createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleware)))

export default store;