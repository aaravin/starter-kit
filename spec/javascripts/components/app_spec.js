describe('App', function() {
	var component;

	beforeEach(function() {
		component = TestUtils.renderIntoDocument(React.createElement(App));
	});

	it('contains a Provider component', function() {
		var provider = TestUtils.findRenderedComponentWithType(component, ReactRedux.Provider);
		expect(provider).not.toBeUndefined();
	});
});