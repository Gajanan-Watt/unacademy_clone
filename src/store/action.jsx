import { GETDATA_ERROR, GETDATA_LOADING, GETDATA_SUCCESS, GOAL_DATA } from "./actionType"

export const getdataLoading=()=>{
    return {
        type:GETDATA_LOADING
    }
}

export const getdataSuccess=(payload)=>{
    console.log('action',payload);
    return {
        type:GETDATA_SUCCESS,
        payload
    }
}

export const getdataError=(payload)=>{
    return {
        type:GETDATA_ERROR,
        payload
    }
}

export const goalData=(payload)=>{
  
    return{
        type:GOAL_DATA,
        payload
    }
}

// export const applyJob=(payload)=>{
//     return {
//         type:APPLY_JOB,
//         payload
//     }
// }