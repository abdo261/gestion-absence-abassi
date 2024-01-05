import request from "../../utils/request";
import { communeAction } from "../slices/communeSlice";
import { toast } from "react-toastify";

export const getAllCommunes = () => {
  return async (dispatch) => {
    dispatch(communeAction.setLoading(true));

    request
      .get("/api/communes")
      .then((data) => {
        dispatch(communeAction.setError(null));
        dispatch(communeAction.getCommunes(data.data));
      })
      .catch((error) => {
        dispatch(communeAction.setLoading(false));
        console.log(error);
        //   toast.error(error.response.data.message);
        dispatch(communeAction.setError(error.response.data.message));
        dispatch(communeAction.getCommunes(null));
      })
      .finally(() => dispatch(communeAction.setLoading(false)));
  };
};

export const addCommunes = (commune) => {
  return async (dispatch) => {
  
    request
      .post("/api/communes/", commune)
      .then((data) => {
        dispatch(communeAction.setError(null));
        dispatch(communeAction.addCommunes( data.data.commune));
        toast.success(data.data.message);
      })
      .catch((error) => {
        dispatch(communeAction.setLoading(false));
        // console.log(error.response.data.message);
        toast.error(error.response.data.message);
        // dispatch(communeAction.setError(error.response.data.message));
      })
      .finally(() => dispatch(communeAction.setLoading(false)));
  };
};
export const updateCommune = (id, updatedCommune,cb) => {
  return async (dispatch) => {
    dispatch(communeAction.setLoading(true));
    request
      .put(`/api/communes/${id}`, updatedCommune)
      .then((data) => {
        console.log(data.data)
        dispatch(communeAction.setError(null));
        dispatch(communeAction.updateCommune(data.data.commune)); 
        toast.success(data.data.message);
      })
      .catch((error) => {
        dispatch(communeAction.setLoading(false));
        toast.error(error.response.data.message);
      })
      .finally(() =>{
        dispatch(communeAction.setLoading(false))
      
      cb&&cb()
      } );
  };
};


export const removeCommune = (id) => {
  return async (dispatch) => {
    
    request
      .delete("/api/communes/"+id)
      .then((data) => {
        dispatch(communeAction.deleteCommune(id));
        dispatch(communeAction.setError(null));
        dispatch(communeAction.setLoading(false));
        toast.success(data.data.message);
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
        dispatch(communeAction.setError(error.response.data.message));
      })
      
  };
};
export const removeMany = (ids) => {
  return async (dispatch) => {
    try {
      const response = await request.delete("/api/communes/delete/many", { data: { ids } });
      dispatch(communeAction.deleteManyCommunes(ids));
      dispatch(communeAction.setError(null));
      toast.success(response.data.message);
      dispatch(communeAction.setLoading(false));
    } catch (error) {
      console.log(error);
      toast.error(error.message);
      dispatch(communeAction.setError(error.response.data.message));
    }
  };
};
