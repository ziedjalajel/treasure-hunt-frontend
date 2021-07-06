import { useSelector } from "react-redux";
import Thing from "./Thing";

const GarbageList = () => {
  const garbages = useSelector((state) => state.garbages.garbages);

  const garbageList = garbages.map((garbage) => (
    <Thing thing={garbage} key={garbage.id} />
  ));
  return <div className="container">{garbageList}</div>;
};
export default GarbageList;
