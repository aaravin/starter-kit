const createStore = Redux.applyMiddleware(Thunk)(Redux.createStore);
const store = createStore(CombinedReducer);

module.exports = store;