import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import { fetchTreasures } from "../store/actions/treasureAction";
import Thing from "./Thing";

const TreasureList = () => {
  const dispatch = useDispatch();
  useEffect(dispatch(fetchTreasures()));
  const treasures = useSelector((state) => state.treasures.treasures);
  const user = useSelector((state) => state.users.users);
  if (!user) return <Redirect to="/" />;
  const treasureList = treasures.map((treasure) => (
    <Thing thing={treasure} key={treasure.id} />
  ));

  return <div className="container">{treasureList}</div>;
};
export default TreasureList;
