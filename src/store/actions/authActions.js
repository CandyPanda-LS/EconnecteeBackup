import adminApi from "../apis/AdminAPI";
import employeeAPI from "../apis/EmployeeAPI";
import ProjectManagerAPI from "../apis/ProjectManagerAPI";

export const ACTION_TYPES = {
  REGISTER_SUCCESS: "REGISTER_SUCCESS",
  REGISTER_FAIL: "REGISTER_FAIL",
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGIN_FAIL: "LOGIN_FAIL",
  LOGOUT: "LOGOUT",
};

export const adminRegister = (data, OnSuccess, OnFailure) => (dispatch) => {
    adminApi
      .authAdmin()
      .register(data)
      .then((response) => {
        dispatch({
          type: ACTION_TYPES.REGISTER_SUCCESS,
          payload: response.data.token,
        });
  
        if (response.data.token) {
          localStorage.setItem("x-auth-token", response.data.token);
        }
        OnSuccess();
      })
      .catch(() => {
        dispatch({
          type: ACTION_TYPES.REGISTER_FAIL,
          payload: null,
        });
        OnFailure();
      });
  };

  export const adminLogin = (data, OnSuccess, OnFailure) => (dispatch) => {
    adminApi
      .authAdmin()
      .login(data)
      .then((response) => {
        dispatch({
          type: ACTION_TYPES.LOGIN_SUCCESS,
          payload: response.data.token,
        });
  
        if (response.data.token) {
          localStorage.setItem("x-auth-token", response.data.token);
        }
        OnSuccess();
      })
      .catch(() => {
        dispatch({
          type: ACTION_TYPES.LOGIN_FAIL,
          payload: null,
        });
        OnFailure();
      });
  };


  export const employeeRegister = (data, OnSuccess, OnFailure) => (dispatch) => {
    employeeAPI
      .authEmployee()
      .register(data)
      .then((response) => {
        dispatch({
          type: ACTION_TYPES.REGISTER_SUCCESS,
          payload: response.data.token,
        });
  
        if (response.data.token) {
          localStorage.setItem("x-auth-token", response.data.token);
        }
        OnSuccess();
      })
      .catch(() => {
        dispatch({
          type: ACTION_TYPES.REGISTER_FAIL,
          payload: null,
        });
        OnFailure();
      });
  };

  export const employeeLogin = (data, OnSuccess, OnFailure) => (dispatch) => {
    employeeAPI
      .authEmployee()
      .login(data)
      .then((response) => {
        dispatch({
          type: ACTION_TYPES.LOGIN_SUCCESS,
          payload: response.data.token,
        });
  
        if (response.data.token) {
          localStorage.setItem("x-auth-token", response.data.token);
        }
        OnSuccess();
      })
      .catch(() => {
        dispatch({
          type: ACTION_TYPES.LOGIN_FAIL,
          payload: null,
        });
        OnFailure();
      });
  };


  export const productManagerRegister = (data, OnSuccess, OnFailure) => (dispatch) => {
    ProjectManagerAPI
      .authProjectManager()
      .register(data)
      .then((response) => {
        dispatch({
          type: ACTION_TYPES.REGISTER_SUCCESS,
          payload: response.data.token,
        });
  
        if (response.data.token) {
          localStorage.setItem("x-auth-token", response.data.token);
        }
        OnSuccess();
      })
      .catch(() => {
        dispatch({
          type: ACTION_TYPES.REGISTER_FAIL,
          payload: null,
        });
        OnFailure();
      });
  };

  export const productManagerLogin = (data, OnSuccess, OnFailure) => (dispatch) => {
    ProjectManagerAPI
      .authProjectManager()
      .login(data)
      .then((response) => {
        dispatch({
          type: ACTION_TYPES.LOGIN_SUCCESS,
          payload: response.data.token,
        });
  
        if (response.data.token) {
          localStorage.setItem("x-auth-token", response.data.token);
        }
        OnSuccess();
      })
      .catch(() => {
        dispatch({
          type: ACTION_TYPES.LOGIN_FAIL,
          payload: null,
        });
        OnFailure();
      });
  };