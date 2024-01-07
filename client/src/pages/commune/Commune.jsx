
import "./commune.css";
import Table from "./shildren/Table";
import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect, useState } from "react";
import { addCommunes, getAllCommunes, removeCommune, removeMany } from "../../redux/apiCalls/communeApi";
import { BsPlusCircle, BsAward } from "react-icons/bs";
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
   
  const getAllCommunesCallback = useCallback(() => {
    dispatch(getAllCommunes());
  }, [dispatch]);
  
  const getAllEtablissementsCallback = useCallback(() => {
    dispatch(getAlletablissements());
  }, [dispatch]);
  
  useEffect(() => {
    getAllCommunesCallback();
    getAllEtablissementsCallback();
  }, [getAllCommunesCallback, getAllEtablissementsCallback]);

  const [searchValue, setSearchValue] = useState("");
  const [newItem, setNewItem] = useState("");
  const [detailsItemId, setDetailsItemId] = useState(null);
  const [editItemId, setEditItemId] = useState(null);
  const [showCreate, setShowCreate] = useState(false);
  const [isCloseCreate,setIsCloseCreate]=useState(false)

  const filterCommunes = communes
    ? communes.filter((c) =>
        c.nom.toLowerCase().includes(searchValue.toLowerCase())
      )
    : null;

  const handleAddClick = () => {
    setShowCreate(true);
    setIsCloseCreate(false)
  };

  const handleCloseCreate = () => {
    setShowCreate(false);
    setIsCloseCreate(false)
  };

  const handleAddCommune = (e) => {
    e.preventDefault()
    console.log("Adding commune:", newItem);
    dispatch(addCommunes({ nom: newItem }));
    setNewItem("")
    isCloseCreate && setShowCreate(false);

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
     setNewItem('')
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
  const handelDeleteAll = (ids) => {
    //  dispatch(removeCommunes(id))
    dispatch(
      communeAction.setdeleteMenyMessage({
        message: "Êtes-vous sûr de vouloir supprimer las communes selectioné ?",
        ids
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
      
        dispatch(communeAction.setdeleteMessage(null));
      
       
    });
  }
  if (deleteMenyMessage) {
    swal({
      title: deleteMenyMessage.message,
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((isOk) => {
      if (isOk) {
        dispatch(removeMany(deleteMenyMessage.ids));
       dispatch(communeAction.setdeleteMenyMessage(null));
       
      }
      else{
        dispatch(communeAction.setdeleteMenyMessage(null));
      }
       
    });
  }

  return (
    <div className="commune d-flex flex-column w-100  mt-2 shadow-lg">
      <div className="table-title w-100 d-flex justify-content-between align-items-center gap-1">
        <h1 className="h2">
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
      {/* table-container */}
      <div className=" cadre-table-scroll ">
        {Loading && <SpinerBs />}
        {error && <ErrorAlert error={error}/>}
        {communes && (
          <Table
            className="table table-scroll"
            communes={filterCommunes}
            etablissements={etablissements}
            hendelDetailsCklick={hendelDetailsCklick}
            handelEditeMode={handelEditeMode}
            handelDeleteCklick={handelDelete}
            handelDeleteAll={handelDeleteAll}
          />
        )}
      </div>
      {showCreate && (
        <Create
          newItem={newItem}
          handleItemeChange={handleItemeChange}
          handleAddCommune={handleAddCommune}
          handleCloseCreate={handleCloseCreate}
          setIsCloseCreate={(value)=>setIsCloseCreate(value)}
          isCloseCreate={isCloseCreate}

        />
      )}
      {detailsItemId && (
        <Details
          detailsItemId={detailsItemId}
          handleCloseDeatils={handleCloseDeatils}
          etablissements={etablissements}
       
        />
      )}
      {editItemId && (
        <Edite editItemId={editItemId} handleCloseEdite={handleCloseEdite}  />
      )}
    </div>
  );
};

export default Commune;
