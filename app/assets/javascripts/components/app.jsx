class App extends React.Component {
  render () {
    return (
      <div>
        <div>Text: {this.props.text}</div>
      </div>
    );
  }
}

App.propTypes = {
  text: React.PropTypes.string
};
