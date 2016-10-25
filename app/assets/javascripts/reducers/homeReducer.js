"use strict";

const homeDefaults = require('./defaults/homeDefaults.js');

function homeReducer(state, action) {
	let newState = state ? _.cloneDeep(state) : _.cloneDeep(homeDefaults);

	switch(action.type) {
		case 'TESTING':
			return newState;
	}

	return newState;
}

module.exports = homeReducer;