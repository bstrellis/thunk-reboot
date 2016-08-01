require("./style.scss");

var React = require('react');
var ReactDOM = require('react-dom');

var Content = React.createClass({
  render: function() {
    return (
      <div>
        My, thats a lovely toad you have there, sir.
      </div>
    );
  }
});

class BodyComponent extends React.Component {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}

ReactDOM.render(<BodyComponent />, document.getElementById('content'));
