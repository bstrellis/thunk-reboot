class CreateThunkComponent extends React.Component {
  render() {
    return (
      <div className="create-thunk-component">
        <div className="inspirational-dinosaur">
          Inspirational Dinosaur
        </div>
        <div className="input-placeholder">
          History made here.
        </div>
        <button>Engrave it in stone!</button>
      </div>
    );
  }
}

module.exports = CreateThunkComponent;
// this line breaks it. why?
// <input type="text" placeholder="Fetch my zarf, boy!">
