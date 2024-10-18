const ThirdQuadrant = ({
  image,
  position,
  top,
  right,
  width,
  height,
  index,
}) => {
  return (
    <div
      className={`${position} ${top} ${right} ${width} ${height} overflow-hidden ${index}`}
    >
      <img src={image} alt="quadrant" />
    </div>
  );
};

export default ThirdQuadrant;
