import Btn from "../../components/share/Btn";
import "./commune.css";
import Table from "./shildren/Table";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { addCommunes, getAllCommunes, removeCommune } from "../../redux/apiCalls/communeApi";
import { BsPlusCircle, BsAward, BsXCircle } from "react-icons/bs";
import SearchFilter from "./shildren/SearchFilter";
import Create from "./shildren/Create";
import SpinerBs from "../../components/share/SpinerBs";
import ErrorAlert from "../../components/share/ErrorAlert";
import Details from "./shildren/Details";
import { communeAction } from "../../redux/slices/communeSlice";
import Edite from "./shildren/Edite";
import { getAlletablissements } from "../../redux/apiCalls/etablissementApi";
import swal from "sweetalert";
const Commune = () => {
  const dispatch = useDispatch();
  const { communes, Loading, deleteMessage, deleteMenyMessage,error } = useSelector(
    (state) => state.commune
  );
  const { etablissements } = useSelector( (state) => state.etablissement);
   
  
  useEffect(() => {

    dispatch(getAllCommunes())
    dispatch(getAlletablissements())
  
  }, []);

  const [searchValue, setSearchValue] = useState("");
  const [newItem, setNewItem] = useState("");
  const [detailsItemId, setDetailsItemId] = useState(null);
  const [editItemId, setEditItemId] = useState(null);
  const [showCreate, setShowCreate] = useState(false);

  const filterCommunes = communes
    ? communes.filter((c) =>
        c.nom.toLowerCase().includes(searchValue.toLowerCase())
      )
    : null;

  const handleAddClick = () => {
    setShowCreate(true);
  };

  const handleCloseCreate = () => {
    setShowCreate(false);
  };

  const handleAddCommune = () => {
    console.log("Adding commune:", newItem);
    dispatch(addCommunes({ nom: newItem }));
    setShowCreate(false);
  };

  const handleItemeChange = (value) => setNewItem(value);

  const hendelDetailsCklick = (id) => setDetailsItemId((prev) => id);

  const handleCloseDeatils = () => {
    setDetailsItemId((prev) => null);
    dispatch(communeAction.getCommuneById(null));
  };

  const handelEditeMode = (id) => setEditItemId((prev) => id);

  const handleCloseEdite = () => {
    setEditItemId((prev) => null);
    dispatch(communeAction.getCommuneById(null));
  };
  const handelDelete = (id) => {
    //  dispatch(removeCommunes(id))
    dispatch(
      communeAction.setdeleteMessage({
        message: "Êtes-vous sûr de vouloir supprimer la commune ?",
        id,
      })
    );
  };
  if (deleteMessage) {
    swal({
      title: deleteMessage.message,
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((isOk) => {
      if (isOk) {
        dispatch(removeCommune(deleteMessage.id));
       dispatch(communeAction.setdeleteMessage(null));
      }
       
    });
  }
  return (
    <div className="commune d-flex flex-column w-100  mt-2 shadow-lg">
      <div className="table-title w-100 d-flex justify-content-between align-items-center gap-1">
        <h1>
          <BsAward /> Liste des Communes
        </h1>
        <SearchFilter
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
        <div onClick={handleAddClick}>
          <BsPlusCircle size={30} className="btn-ajoute" />
        </div>
      </div>
      <div className="table-container ">
        {Loading && <SpinerBs />}
        {error && <ErrorAlert error={error}/>}
        {communes && (
          <Table
            className="table"
            communes={filterCommunes}
            etablissements={etablissements}
            hendelDetailsCklick={hendelDetailsCklick}
            handelEditeMode={handelEditeMode}
            handelDelete={handelDelete}
          />
        )}
      </div>
      {showCreate && (
        <Create
          newItem={newItem}
          handleItemeChange={handleItemeChange}
          handleAddCommune={handleAddCommune}
          handleCloseCreate={handleCloseCreate}
        />
      )}
      {detailsItemId && (
        <Details
          detailsItemId={detailsItemId}
          handleCloseDeatils={handleCloseDeatils}
        />
      )}
      {editItemId && (
        <Edite editItemId={editItemId} handleCloseEdite={handleCloseEdite}  />
      )}
    </div>
  );
};

export default Commune;
