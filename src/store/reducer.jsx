import {GETDATA_LOADING,
    GETDATA_SUCCESS,
    GETDATA_ERROR,
    GOAL_DATA
    } from './actionType'

const init={loading:false,data:{CBSE:[],MSB:[],USB:[]},error:false,goal:{}}

export const getdataReducer=(state=init,{type,payload})=>{
    switch(type){
        case GETDATA_LOADING:return{
            ...state,
            loading:true
        }

        case GETDATA_SUCCESS:return{
            ...state,
            data:payload,
            loading:false
        }

        case GETDATA_ERROR:return{
            ...state,
            loading:false,
            error:true
        }

        case GOAL_DATA:return{
            ...state,
            goal:payload
        }

      

        default:return state


    }
}