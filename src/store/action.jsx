import {
  GETDATA_ERROR,
  GETDATA_LOADING,
  GETDATA_SUCCESS,
  GETDATA2_ERROR,
  GETDATA2_LOADING,
  GETDATA2_SUCCESS,
  GOAL_DATA,
  TUTOR_DATA,
  SHOW_SIDE,
  PHONE_NUMBER,
} from "./actionType";

export const getdataLoading = () => {
  return {
    type: GETDATA_LOADING,
  };
};

export const getdataSuccess = (payload) => {
  console.log("action", payload);
  return {
    type: GETDATA_SUCCESS,
    payload,
  };
};

export const getdataError = (payload) => {
  return {
    type: GETDATA_ERROR,
    payload,
  };
};

export const getdata2Loading = () => {
  return {
    type: GETDATA2_LOADING,
  };
};

export const getdata2Success = (payload) => {
  console.log("action", payload);
  return {
    type: GETDATA2_SUCCESS,
    payload,
  };
};

export const getdata2Error = (payload) => {
  return {
    type: GETDATA2_ERROR,
    payload,
  };
};

export const goalData = (payload) => {
  return {
    type: GOAL_DATA,
    payload,
  };
};

export const tutorData = (payload) => {
  return {
    type: TUTOR_DATA,
    payload,
  };
};

export const showSide = (payload) => {
  return {
    type: SHOW_SIDE,
    payload,
  };
};

export const phoneNumber = (payload) => {
  return {
    type: PHONE_NUMBER,
    payload,
  };
};

// export const applyJob=(payload)=>{
//     return {
//         type:APPLY_JOB,
//         payload
//     }
// }
