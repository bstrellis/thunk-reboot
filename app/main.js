require("./style.scss");
var HeaderComponent = require("./header-component.js");
var JumbotronComponent = require("./jumbotron-component.js");

var React = require('react');
var ReactDOM = require('react-dom');

class BodyComponent extends React.Component {
  render() {
    // <CreateThunkComponent />
    // <ThunkListComponent />
    return (
      <div className="body-component">
        <HeaderComponent />
        <JumbotronComponent />
      </div>
    );
  }
}

ReactDOM.render(<BodyComponent />, document.getElementById('content'));
