import React, { useCallback, useEffect, useState } from "react";
import Btn from "../../../components/share/Btn";
import { useDispatch, useSelector } from "react-redux";
import { getCommuneById } from "../../../redux/apiCalls/communeApi";
import SpinerBs from "../../../components/share/SpinerBs";
import { BsEye } from "react-icons/bs";
import Input from "../../../components/share/Input";
import SwiperWrapper from "./SwiperWrapper";
import Select from "../../../components/share/Select";
import { filterEtablissementBySecteur } from "../../../utils/filter";
import { FaSchoolFlag } from "react-icons/fa6";
const Details = ({ handleCloseDeatils, detailsItemId, etablissements }) => {
  const [secteur, setSecteur] = useState(null);
  const EtablissementsFilter = filterEtablissementBySecteur(
    secteur,
    etablissements
  );
  const dispatch = useDispatch();
  const { commune } = useSelector((state) => state.commune);

  const getCommuneByIdCallback = useCallback(() => {
    dispatch(getCommuneById(detailsItemId));
  }, [dispatch, detailsItemId]);

  useEffect(() => {
    getCommuneByIdCallback();
  }, [getCommuneByIdCallback]);

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
              {commune && (
                <h5 class="modal-title text-with-shadow d-flex justify-content-between align-items-center">
                  <span>{commune.nom}</span>{" "}
                  <span className="d-flex align-items-center gap-3">
                    <span className="fs-3">{EtablissementsFilter.filter(e=>e.commune===detailsItemId).length }</span>
                  
                    <FaSchoolFlag size={30} />{" "}
                  </span>
                </h5>
              )}
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
                  titleOptions="Tous les secteurs"
                  const
                  options={[
                    { nom: "primaire", _id: "primaire" },
                    { nom: "collége", _id: "collége" },
                    { nom: "lycée", _id: "lycée" },
                  ]}
                  onchange={(value) => setSecteur(value)}
                />
                <div className="swiper-Container w-100 mt-2 ">
                  <SwiperWrapper
                    etablissements={EtablissementsFilter}
                    detailsItemId={detailsItemId}
                  />
                </div>
              </div>
            </div>
            <div class="modal-footer gap-3">
              
            </div>
          </>
        </div>
      </div>
    </div>
  );
};

export default Details;
