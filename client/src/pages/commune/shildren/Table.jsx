import React, { useState } from "react";

const Table = ({ communes = [], className }) => {
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

  return (
    <table className={className}>
      <thead>
        <tr className="table-primary">
          <th>#</th>
          <th>Nom</th>
          <th>Etablissements</th>
          <th>
            <div className="d-flex flex-nowrap gap-2 justify-content-end me-3">
              <button
                //   onClick={handleDeleteSelected}
                className="btn btn-danger btn-sm"
                disabled={!selectedRows.length > 0}
              >
                Supprimer tous
              </button>

              <input
                type="checkbox"
                onChange={handleSelectAll}
                checked={selectedRows.length === communes.length}
              />
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        {communes.length > 0 ? (
            communes.map((c,i)=>(
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
              <div className="form-check form-switch w-100 d-flex justify-content-end gap-1">
                <input
                  className="form-check-input"
                  type="checkbox"
                  onChange={() => handleRowCheckboxChange(c._id)}
                  checked={selectedRows.includes(c._id)}
                  role="switch"
                  id="flexSwitchCheckDefault"
                />
              </div>
            </td>
          </tr>
            ))
          
        ) : (
          <tr>
            {" "}
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
