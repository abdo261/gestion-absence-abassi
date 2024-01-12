import request from "../../utils/request";
import { authActions } from "../slices/authSlice";
import { toast } from "react-toastify";

export const LoginUser = (user, cb) => {
  return async (dispatch) => {
    dispatch(authActions.setLoading(true));
    request
      .post("/api/user/login", user)
      .then((response) => {
        dispatch(authActions.setError(null));
        dispatch(authActions.loginUser(response.data));
        // console.log(response);
        toast.success(response.data.message);
        response.status === 200 && cb && cb();
        localStorage.setItem("userInfo", JSON.stringify(response.data));
      })
      .catch((err) => {
        dispatch(authActions.setLoading(false));
        console.log(err);
        dispatch(authActions.setError(err.response.data.message));
        dispatch(authActions.loginUser(null));
        toast.error(err.response.data.message);
      })
      .finally(() => dispatch(authActions.setLoading(false)));
  };
};

export const LogoutUser = (cb) => {
  return async (dispatch) => {
    dispatch(authActions.logoutUser(null));
    localStorage.removeItem("userInfo");
    cb && cb();
  };
};
