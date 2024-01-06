import React, { useEffect, useState } from "react";
import Btn from "../../../components/share/Btn";
import { useDispatch, useSelector } from "react-redux";
import { getCommuneById } from "../../../redux/apiCalls/communeApi";
import SpinerBs from "../../../components/share/SpinerBs";
import { BsEye } from "react-icons/bs";
import Input from "../../../components/share/Input";
import SwiperWrapper from "./SwiperWrapper";
import Select from "../../../components/share/Select";

const Details = ({ handleCloseDeatils, detailsItemId }) => {
  const [id, setId] = useState(detailsItemId);
  const dispatch = useDispatch();
  const { commune } = useSelector((state) => state.commune);
  useEffect(() => {
    setId((prev) => detailsItemId);
    dispatch(getCommuneById(id));
  }, [detailsItemId]);
  return (
    <div className="  modal ">
      <div className="modal-dialog ">
        <div className="modal-content">
          <>
            <div class="modal-header">
              <h3>
                <BsEye />
                <span className="ms-2">Details</span>{" "}
              </h3>
              <Btn className="btn-close" oncklick={handleCloseDeatils} />
            </div>
            <div class="modal-body">
              {!commune && <SpinerBs />}
              {commune && <h5 class="modal-title">{commune.nom}</h5>}
              <div class="modal-body">
                <Input
                  type="text"
                  // defaultValue={newItem}
                  // onchange={handleItemeChange}
                  placeholder="Etablissement"
                  className="modal-input"
                />
                <Select
                  classParent=""
                  className="form-select form-select-sm"
                  titleOptions="choisire le secteur"
                  const options ={ [
                    { nom: "primaire", _id: "primaire" },
                    { nom: "collège", _id: "college" }, 
                    { nom: "lycée", _id: "lycee" }, 
                  ]}
                />
                <div className="swiper-Container w-100 mt-2 ">
                  <SwiperWrapper />
                </div>
              </div>
            </div>
            <div class="modal-footer gap-3"></div>
          </>
        </div>
      </div>
    </div>
  );
};

export default Details;
