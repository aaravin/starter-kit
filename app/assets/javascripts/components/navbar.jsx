const NavBar = React.createClass({
  render() {
    return (
      <div>
        <div>
          <div>Welcome, {this.props.username}</div>
          <a data-method="delete" href="/users/sign_out">Sign Out</a>
        </div>

        {this.props.children}
      </div>
    );
  }
});