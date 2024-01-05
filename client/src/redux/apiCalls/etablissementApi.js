import request from "../../utils/request";
import { etablissementAction } from "../slices/etablissementSlice";
import { toast } from "react-toastify";

export const getAlletablissements = () => {
  return async (dispatch) => {
    dispatch(etablissementAction.setLoading(true));

    request
      .get("/api/etablissements")
      .then((data) => {
        dispatch(etablissementAction.setError(null));
        dispatch(etablissementAction.getEtablissements(data.data));
      })
      .catch((error) => {
        dispatch(etablissementAction.setLoading(false));
        console.log(error);
        //   toast.error(error.response.data.message);
        dispatch(etablissementAction.setError(error.response.data.message));
        dispatch(etablissementAction.getEtablissements(null));
      })
      .finally(() => dispatch(etablissementAction.setLoading(false)));
  };
};

export const addEtablissements = (etablissement) => {
  return async (dispatch) => {
    dispatch(etablissementAction.setLoading(true));
    request
      .post("/api/etablissements/", etablissement)
      .then((data) => {
        dispatch(etablissementAction.setError(null));
        dispatch(etablissementAction.addEtablissement( data.data.etablissement));
        toast.success(data.data.message);
      })
      .catch((error) => {
        dispatch(etablissementAction.setLoading(false));
        // console.log(error.response.data.message);
        toast.error(error.response.data.message);
        // dispatch(etablissementAction.setError(error.response.data.message));
      })
      .finally(() => dispatch(etablissementAction.setLoading(false)));
  };
};

export const removeetablissement = (id) => {
  return async (dispatch) => {
    request
      .delete("/api/etablissements/"+id)
      .then((data) => {
        dispatch(etablissementAction.setError(null));
        toast.success(data.data.message);
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
        dispatch(etablissementAction.setError(error.response.data.message));
      })
      
  };
};
