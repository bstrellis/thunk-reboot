// TODO THIS COMMIT: username populates from props
// dropdown menu actually drops down on hover
// links work (call render? not sure how to do this)
class NavMenuComponent extends React.Component {
  render() {
    return (
      <div className="nav-menu-component">
        username goes here
        <div className="nav-menu-dropdown">
          <a href="/">Home</a>
          <a href="/">Settings</a>
          <a href="/">Reminders</a>
          <a href="/">Logout</a>
        </div>
      </div>
    );
  }
}

module.exports = NavMenuComponent;
