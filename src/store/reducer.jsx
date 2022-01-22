import {
  GETDATA_LOADING,
  GETDATA_SUCCESS,
  GETDATA_ERROR,
  GETDATA2_LOADING,
  GETDATA2_SUCCESS,
  GETDATA2_ERROR,
  GOAL_DATA,
  TUTOR_DATA,
  SHOW_SIDE,
  PHONE_NUMBER,
} from "./actionType";

import { loadData, saveData } from "../components/utils/localStorage";

const init = {
  loading: false,
  data: { CBSE: [], MSB: [], USB: [],JEE:[],IIT:[] },
  data2: { UPSC_CSE: [], Govt_Exams: [],Defence_Exams:[],CAT:[] },
  error: false,
  goal: loadData("goal") || {},
  tutor: loadData("tutor") || {},
  show: false,
  phone:''
};

export const getdataReducer = (state = init, { type, payload }) => {
  switch (type) {
    case GETDATA_LOADING:
      return {
        ...state,
        loading: true,
      };

    case GETDATA_SUCCESS:
      return {
        ...state,
        data: payload,
        loading: false,
      };

    case GETDATA_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };

    case GETDATA2_LOADING:
      return {
        ...state,
        loading: true,
      };

    case GETDATA2_SUCCESS:
      return {
        ...state,
        data2: payload,
        loading: false,
      };

    case GETDATA2_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };

    case GOAL_DATA: {
      saveData("goal", payload);
      return {
        ...state,
        goal: payload,
      };
    }

    case TUTOR_DATA: {
      saveData("tutor", payload);
      return {
        ...state,
        tutor: payload,
      };
    }

    case SHOW_SIDE: {
      return {
        ...state,
        show: payload,
      };
    }

    
    case PHONE_NUMBER: {
      saveData("phone", payload);
      return {
        ...state,
        phone: payload,
      };
    }


    default:
      return state;
  }
};
