import { ACTION_TYPES } from "../actions/ProjectManagerActions";

const initialState = {
  projectManagerList: [],
  singleProjectManager: null,
};

export const projectManagerReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.GET_PROJECT_MANAGER:
      return {
        ...state,
        singleProjectManager: action.payload,
      };
    case ACTION_TYPES.GET_ALL_PROJECT_MANAGERS_LIST:
      return {
        ...state,
        projectManagerList: [...action.payload],
      };
    case ACTION_TYPES.DELETE_PROJECT_MANAGER:
      return {
        ...state,
        projectManagerList: state.projectManagerList.filter(
          (x) => x._id !== action.payload
        ),
      };
    case ACTION_TYPES.UPDATE_PROJECT_MANAGER:
      return {
        ...state,
        projectManagerList: state.projectManagerList.map((x) =>
          x._id === action.payload._id ? action.payload : x
        ),
      };
    default:
      return state;
  }
};
