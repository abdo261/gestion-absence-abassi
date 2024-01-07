import { useEffect, useState } from "react";
import Btn from "../../../components/share/Btn";
import { useDispatch, useSelector } from "react-redux";
import {
  getCommuneById,
  updateCommune,
} from "../../../redux/apiCalls/communeApi";
import SpinerBs from "../../../components/share/SpinerBs";
import { containsSpecialChars, isEmpty } from "../../../utils/disable";
import Input from "../../../components/share/Input";
import {  BsPencilSquare } from "react-icons/bs";
import ErrorAlert from "../../../components/share/ErrorAlert";

const Edite = ({ handleCloseEdite, editItemId }) => {

  const [newValue, setNewValue] = useState("");
  const dispatch = useDispatch();

  const { commune } = useSelector((state) => state.commune);

  const handelSave = (e) => {
    e.preventDefault();
    console.log(newValue);
    dispatch(updateCommune(editItemId, { nom: newValue }));
    handleCloseEdite();
  };

  const handelChange = (value) => setNewValue((prev) => value);
   
  
  useEffect(() => {
    setNewValue("");
    dispatch(getCommuneById(editItemId));
  }, [editItemId]);
  return (
    <div className="  modal ">
      <div className="modal-dialog">
        <form className="modal-content" onSubmit={handelSave}>
          <>
            <div class="modal-header">
              <h3>
                <BsPencilSquare /> <span className="ms-2">Modifié</span>{" "}
              </h3>
              <Btn className="btn-close" oncklick={handleCloseEdite} />
            </div>
            <div class="modal-body">
              {!commune && <SpinerBs />}
              {commune && (
                <Input
                  defaultValue={commune.nom}
                  placeholder="Commune Nom"
                  className="modal-input"
                  onchange={handelChange}
                />
              )}
              {containsSpecialChars(newValue) && (
                <ErrorAlert error="Le texte contient des caractères spéciaux." />
              )}
            </div>

            <div class="modal-footer gap-3">
              <Btn
                oncklick={handleCloseEdite}
                className="annuler"
                text="annuler"
              />
              <Btn
                // oncklick={handleAddCommune}
                className={`ajoute ${
                  !isEmpty(newValue) && "btn btn-secondary"
                }`}
                text="ajouté"
                type="submit"
                disabled={!isEmpty(newValue) || commune.nom === newValue}
              />
            </div>
          </>
        </form>
      </div>
    </div>
  );
};

export default Edite;
