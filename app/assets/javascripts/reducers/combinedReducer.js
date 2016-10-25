"use strict";

const homeReducer = require('./homeReducer.js');

const combinedReducers = Redux.combineReducers({
	routing: ReactRouterRedux.routerReducer,
	home: homeReducer
});

module.exports = combinedReducers;