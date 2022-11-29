function Ability({ abl }) {
  if (abl.displayIcon === null) {
    return null;
  }
  return (
    <div className="abl">
      <img className="icon" src={abl.displayIcon} />
      <br />
      <span className="abl-title">{abl.displayName}</span>
      <br />
      {abl.description}
    </div>
  );
}
export default Ability;
