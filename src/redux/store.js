// Middleware (applyMiddleware) is the suggested way to extend Redux with custom functionality. 
// Middleware lets you wrap the store's dispatch method for fun and profit. 
// The key feature of middleware is that it is composable. Multiple middleware can be combined together, 
//where each middleware requires no knowledge of what comes before or after it in the chain.

//The most common use case for middleware is to support asynchronous actions without much boilerplate code 
//or a dependency on a library like Rx. 
//It does so by letting you dispatch async actions in addition to normal actions.

import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

//all the middleware functions go in here as values in an array which we pass later to the store
const middleWares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middleWares));

export default store;
