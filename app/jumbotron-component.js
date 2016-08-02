var CreateThunkComponent = require("./create-thunk-component.js");
var ThunkListComponent = require("./thunk-list-component.js");

class JumbotronComponent extends React.Component {
  render() {
    return (
      <div className="jumbotron-component">
        <CreateThunkComponent />
        <ThunkListComponent />
      </div>
    );
  }
}

module.exports = JumbotronComponent;
