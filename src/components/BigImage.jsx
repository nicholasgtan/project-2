import logoVert from "../assets/V_Lockup_Vertical_Off-White.png";

function BigImage({ image }) {
  if (image.background == null) {
    return (
      <div className="container">
        <img src={logoVert} />
      </div>
    );
  }
  return (
    <div className="container">
      <img src={image.background} />
      <img src={image.fullPortrait} />
      <div>
        <h2>{image.displayName}</h2>
        <p>{image.description}</p>
        <p>Click Agent Portrait for Abilities.</p>
      </div>
    </div>
  );
}

export default BigImage;
