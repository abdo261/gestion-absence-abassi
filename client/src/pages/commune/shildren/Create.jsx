import React from "react";
import { BsXCircle } from "react-icons/bs";
import Btn from "../../../components/share/Btn";
import Input from "../../../components/share/Input";
import { containsSpecialChars, isEmpty } from "../../../utils/disable";
import ErrorAlert from "../../../components/share/ErrorAlert";

const Create = ({
  newItem,
  handleItemeChange,
  handleAddCommune,
  handleCloseCreate,
}) => {

  return (
    <div className="  modal " >
      <div className="modal-dialog">
        <div className="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Ajouté Commune</h5>
            <Btn className="btn-close" oncklick={handleCloseCreate}/>
          </div>
          <div class="modal-body">
            <Input
              type="text"
              defaultValue={newItem}
              onchange={handleItemeChange}
              placeholder="Commune Nom"
              className='modal-input'
            />
          </div>
         {containsSpecialChars(newItem)&& <ErrorAlert error= 'Le texte contient des caractères spéciaux.' />}

          <div class="modal-footer gap-3">
            <Btn oncklick={handleCloseCreate}  className="annuler" text="annuler"/>
            <Btn oncklick={handleAddCommune}  className={`ajoute ${!isEmpty(newItem) && "btn btn-secondary"}`} text="ajouté" disabled={!isEmpty(newItem)}/>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
