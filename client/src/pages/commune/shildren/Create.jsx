import React from "react";

import Btn from "../../../components/share/Btn";
import Input from "../../../components/share/Input";
import { containsSpecialChars, isEmpty } from "../../../utils/disable";
import ErrorAlert from "../../../components/share/ErrorAlert";
import BtnCheckbox from "../../../components/share/BtnCheckbox";

const Create = ({
  newItem,
  handleItemeChange,
  handleAddCommune,
  handleCloseCreate,
  setIsCloseCreate,
  isCloseCreate,
}) => {
  return (
    <div className="  modal ">
      <form className="modal-dialog" onSubmit={handleAddCommune}>
        <div className="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Ajouté Commune</h5>
            <Btn className="btn-close" oncklick={handleCloseCreate} />
          </div>
          <div class="modal-body">
            <Input
              type="text"
              defaultValue={newItem}
              onchange={handleItemeChange}
              placeholder="Commune Nom"
              className="modal-input"
              autoFocus={true}
            />
          </div>
          {containsSpecialChars(newItem) && (
            <ErrorAlert error="Le texte contient des caractères spéciaux." />
          )}

          <div class="modal-footer ">
            <div className="d-flex w-100 justify-content-between align-items-center">
              {" "}
              <span className="">
                <BtnCheckbox
                  onchange={(e) => setIsCloseCreate(!isCloseCreate)}
                  text={<span className=" checkbox-create-text">fermer la fenêtre après la création</span>}
                  
                /> 
              </span>
              <span className="d-flex  align-items-center gap-3">
                {" "}
                <Btn
                  oncklick={handleCloseCreate}
                  className="annuler"
                  text="annuler"
                />
                <Btn
                  type="submit"
                  className={`ajoute ${
                    !isEmpty(newItem) && "btn btn-secondary"
                  }`}
                  text="ajouté"
                  disabled={!isEmpty(newItem)}
                />{" "}
              </span>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Create;
