const App = React.createClass({
  createElement(Component, props) {
  	props = _.merge(props, this.props);

  	return (<Component key={Component.displayName} {...props}/>)
  },

  render() {
  	const history = ReactRouterRedux.syncHistoryWithStore(ReactRouter.browserHistory, Store);

    return (
      <ReactRedux.Provider store={Store}>
      	<ReactRouter.Router history={history} createElement={this.createElement}>
      		<ReactRouter.Route path="/" component={NavBar}>
      			<ReactRouter.IndexRoute component={Home} />
      		</ReactRouter.Route>
      	</ReactRouter.Router>
      </ReactRedux.Provider>
    );
  }
});