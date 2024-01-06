import Btn from "../../components/share/Btn";
import "./commune.css";
import Table from "./shildren/Table";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllCommunes } from "../../redux/apiCalls/communeApi";
import {BsPlusCircle,BsAward} from "react-icons/bs"

const Commune = () => {
  const {communes}= useSelector(state=>state.commune)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getAllCommunes())

  },[])
  return (
    <div className="commune d-flex flex-column w-100  mt-2">
      <div className="table-title w-100 d-flex justify-content-between align-items-center">
        <h1><BsAward/>  Liste des Communes</h1>
        <div>
        <BsPlusCircle size={30} className="btn-ajoute"/>
        </div>
      </div>
      <div className="table-container">
        {communes &&<Table  className="table" communes={communes}/>

        }
      
      </div>
      
    </div>
  );
};

export default Commune;
