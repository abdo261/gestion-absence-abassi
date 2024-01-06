import React, { useState } from "react";
import {
  BsEye,
  BsPencilSquare,
  BsTrash3,
} from "react-icons/bs";
import Btn from "../../../components/share/Btn";
import BtnCheckbox from "../../../components/share/BtnCheckbox";

const Table = ({ communes = [], className,hendelDetailsCklick,handelEditeMode }) => {
  const [selectedRows, setSelectedRows] = useState([]);

  const handleRowCheckboxChange = (id) => {
    if (selectedRows.includes(id)) {
      setSelectedRows(selectedRows.filter((rowId) => rowId !== id));
    } else {
      setSelectedRows([...selectedRows, id]);
    }
  };

  const handleSelectAll = () => {
    const allCommuneIds = communes.map((c) => c._id);
    setSelectedRows(
      selectedRows.length === allCommuneIds.length ? [] : allCommuneIds
    );
  };
  const handelEditeCklick = (e, id) => {
    e.stopPropagation();
    handelEditeMode(id)
  };
  const handelDeleteCklick = (e, id) => {
    e.stopPropagation();
    console.log("delete", id);
  };
  const handelShowDetailsCklick = (e, id) => {
    e.stopPropagation();
    hendelDetailsCklick(id)
  };

  return (
    <table className={className}>
      <thead>
        <tr className="table-info">
          <th>#</th>
          <th>Nom</th>
          <th>Etablissements</th>
          <th>
            <div className="d-flex flex-nowrap gap-2 justify-content-end me-3">
              <Btn
                className="btn btn-danger btn-sm"
                //   onClick={handleDeleteSelected}
                disabled={!selectedRows.length > 0}
                text={<img src="/trash-muli.png" className="trash-muli"/>}
              />
              <BtnCheckbox
                onchange={handleSelectAll}
                checked={communes.length>0&& selectedRows.length === communes.length}
              />
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        {communes.length > 0 ? (
          communes.map((c, i) => (
            <tr
              key={i}
              onClick={() => handleRowCheckboxChange(c._id)}
              className={selectedRows.includes(c._id) ? "table-secondary" : ""}
            >
              {" "}
              <td>{i}</td>
              <td>{c.nom}</td>
              <td>9</td>
              <td>
                <div className=" w-100 d-flex align-items-center justify-content-end gap-2">
                  {/* <button className="btn btn-sm"> </button>
                   */}
                  <Btn
                    className="btn btn-outline-primary btn-sm"
                    text={<BsEye />}
                    oncklick={(e) => handelShowDetailsCklick(e, c._id)}
                  />
                  <Btn
                    className="btn btn-outline-dark btn-sm"
                    text={<BsPencilSquare />}
                    oncklick={(e) => handelEditeCklick(e, c._id)}
                  />
                  <Btn
                    className="btn btn-outline-danger btn-sm"
                    text={<BsTrash3 />}
                    oncklick={(e) => handelDeleteCklick(e, c._id)}
                  />
                  <BtnCheckbox
                    onchange={() => handleRowCheckboxChange(c._id)}
                    checked={selectedRows.includes(c._id)}
                  />
                 
                </div>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={4} className="text-center fw-bold">
              non commune trouvé
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default Table;
