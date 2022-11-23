function Ability({ abl }) {
  return (
    <div className="abl">
      <img className="icon" src={abl.displayIcon} />
      <br />

      {abl.displayName}
      <br />

      {abl.description}
    </div>
  );
}
export default Ability;
