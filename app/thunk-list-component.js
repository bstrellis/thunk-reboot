var ThunkComponent = require("./thunk-component.js");

class ThunkListComponent extends React.Component {
  render() {
    return (
      <div className="thunk-list-component">
        <ThunkComponent />
        <ThunkComponent />
        <ThunkComponent />
        <ThunkComponent />
      </div>
    );
  }
}

module.exports = ThunkListComponent;
