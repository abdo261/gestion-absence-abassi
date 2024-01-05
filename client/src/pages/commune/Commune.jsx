import Btn from "../../components/share/Btn";
import "./commune.css";
import { BsArrowClockwise } from "react-icons/bs";
import Create from "./shildren/Create";
const Commune = () => {
  return (
    <div className="commune d-flex flex-column w-100  mt-2">
      <div className="table-title d-flex justify-content-between align-items-center">
        <h1>Liste des Communes</h1>
        <div>
        <Btn
          icon={<BsArrowClockwise />}
          text="Actualiser la liste"
          className=" btn-sm refrech-btn"
        />
        </div>
      </div>
      <div className="">content2</div>
      <Create />
    </div>
  );
};

export default Commune;
