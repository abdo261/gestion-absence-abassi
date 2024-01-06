import Btn from "../../components/share/Btn";
import "./commune.css";
import Table from "./shildren/Table";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { addCommunes, getAllCommunes } from "../../redux/apiCalls/communeApi";
import { BsPlusCircle, BsAward, BsXCircle } from "react-icons/bs";
import SearchFilter from "./shildren/SearchFilter";
import Create from "./shildren/Create";
import SpinerBs from "../../components/share/SpinerBs";
import ErrorAlert from "../../components/share/ErrorAlert";
import Details from "./shildren/Details";
import { communeAction } from "../../redux/slices/communeSlice";

const Commune = () => {
  const dispatch = useDispatch();
  const { communes, Loading, error, deleteMessage, deleteMenyMessage } =
    useSelector((state) => state.commune);
  useEffect(() => {
    dispatch(getAllCommunes());
  }, []);

  const [searchValue, setSearchValue] = useState("");
  const [newItem, setNewItem] = useState("");
  const [showCreate, setShowCreate] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [detailsItem, setDetailsItem] = useState(null);

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

  const handleItemeChange = (value) => {
    setNewItem(value);
  };
  const hendelDetailsCklick = (id) => {
    setDetailsItem((prev) => id);
    setShowDetails(true);
  };
  const handleCloseDeatils = () => {
    setShowDetails(false);
    setDetailsItem(prev=>null)
    dispatch(communeAction.getCommuneById(null))
  };
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
        {/* {error && <ErrorAlert error={error}/>} */}
        {communes && (
          <Table
            className="table"
            communes={filterCommunes}
            hendelDetailsCklick={hendelDetailsCklick}
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
      {showDetails && (
        <Details
          detailsItem={detailsItem}
          handleCloseDeatils={handleCloseDeatils}
        />
      )}
    </div>
  );
};

export default Commune;
