// var React = require('react'); apparently not required
var NavMenuComponent = require("./nav-menu-component.js");

class HeaderComponent extends React.Component {
  render() {
    return (
      <div className="header-component">
        <div className="header-banner">Thunk! Because you think you had a thought that one time.</div>
        <NavMenuComponent />
      </div>
    );
  }
}

module.exports = HeaderComponent;
