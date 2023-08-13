import starSrc from "./icons/star.png";

const Star = ({ active }) => {
  if (typeof active === "undefined") {
    active = true;
  }

  return (
    <img
      src={starSrc}
      alt="Star"
      className={`star ${active ? "active" : ""}`}
    />
  );
};

export default Star;
