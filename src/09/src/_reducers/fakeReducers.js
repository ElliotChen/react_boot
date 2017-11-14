
function fakeReducers(state = {}, action) {
	console.log(`invoke fake reducer with action : ${action.type}`);
	switch (action.type) {
		default:
			return state;
	}
}

export {fakeReducers};