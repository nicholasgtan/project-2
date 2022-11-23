function BigImage({ image }) {
  return (
    <div className="container">
      <img src={image.background} />
      <img src={image.fullPortrait} />
      <div>
        <h2>{image.displayName}</h2>
        <p>{image.description}</p>
      </div>
    </div>
  );
}

export default BigImage;
