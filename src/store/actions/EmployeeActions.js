import employeeAPI from "../apis/EmployeeAPI";

export const ACTION_TYPES = {
  ADD_EMPLOYEE: "ADD_EMPLOYEE",
  GET_EMPLOYEE: "GET_EMPLOYEE",
  GET_ALL_EMPLOYEES: "GET_ALL_EMPLOYEES",
  DELETE_EMPLOYEE:"DELETE_EMPLOYEE",
  UPDATE_EMPLOYEE:"UPDATE_EMPLOYEE"
};

export const employeeRegister = (data, OnSuccess, OnFailure) => (dispatch) => {
  employeeAPI
    .authEmployee()
    .register(data)
    .then((response) => {
      dispatch({
        type: ACTION_TYPES.ADD_EMPLOYEE,
        payload: response.data,
      });
      OnSuccess();
    })
    .catch(() => {
      OnFailure();
    });
};

export const fetchEmployee =  () =>  (dispatch) => {
employeeAPI
    .authEmployee()
    .getEmployeeDetails()
    .then( (response) => {
      dispatch({
        type: ACTION_TYPES.GET_EMPLOYEE,
        payload: response.data,
      });
    })
    .catch(() => { });
};

export const fetchAllEmployeeList = () => (dispatch) => {
  employeeAPI
    .authEmployee()
    .fetchAllEmployeeList()
    .then((response) => {
      dispatch({
        type: ACTION_TYPES.GET_ALL_EMPLOYEES,
        payload: response.data,
      });
    })
    .catch(() => { });
};

export const deleteEmployee = (employeeId ,OnSuccess, OnFailure) => (dispatch) => {
  employeeAPI
    .authEmployee()
    .deleteEmployee(employeeId)
    .then(() => {
      dispatch({
        type: ACTION_TYPES.DELETE_EMPLOYEE,
        payload: employeeId,
      });
      OnSuccess();
    })
    .catch(() => { 
      OnFailure();
    });
};

export const updateEmployee = (employeeId, data, OnSuccess, OnFailure) => (dispatch) => {
  employeeAPI
    .authEmployee()
    .updateEmployee(employeeId,data)
    .then((response) => {
      dispatch({
        type: ACTION_TYPES.UPDATE_EMPLOYEE,
        payload: response.data,
      });
      OnSuccess();
    })
    .catch(() => { 
      OnFailure();
    });
};