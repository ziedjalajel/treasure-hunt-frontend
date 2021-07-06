import { Link } from "react-router-dom";

const Thing = ({ thing }) => {
  return (
    <div className="container">
      <h3>{thing.name}</h3>
    </div>
  );
};
export default Thing;
