import React, { useEffect, useState } from "react";
import Btn from "../../../components/share/Btn";
import { useDispatch, useSelector } from "react-redux";
import { getCommuneById } from "../../../redux/apiCalls/communeApi";
import SpinerBs from "../../../components/share/SpinerBs";

const Details = ({ handleCloseDeatils, detailsItem }) => {
  const [id, setId] = useState(detailsItem);
  const dispatch = useDispatch();
  const { commune } = useSelector((state) => state.commune);
  useEffect(() => {
    setId(prev=>detailsItem)
    dispatch(getCommuneById(id));
  }, [detailsItem]);
  return (
    <div className="  modal ">
      <div className="modal-dialog">
        <div className="modal-content">
          <>
            <div class="modal-header">
              {!commune && <SpinerBs />}
              {commune && <h5 class="modal-title">{commune.nom}</h5>}
              <Btn className="btn-close" oncklick={handleCloseDeatils} />
            </div>
            <div class="modal-body">
                
            </div>

            <div class="modal-footer gap-3"></div>
          </>
        </div>
      </div>
    </div>
  );
};

export default Details;
