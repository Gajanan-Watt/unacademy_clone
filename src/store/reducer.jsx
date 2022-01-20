import {GETDATA_LOADING,
    GETDATA_SUCCESS,
    GETDATA_ERROR,

    GETDATA2_LOADING,
    GETDATA2_SUCCESS,
    GETDATA2_ERROR,

    GOAL_DATA
    } from './actionType'

const init={loading:false,
    data:{CBSE:[],MSB:[],USB:[]},
    data2:{UPSC_CSE:[],Govt_Exams:[]},
    error:false,goal:{}}

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

        case GETDATA2_LOADING:return{
            ...state,
            loading:true
        }

        case GETDATA2_SUCCESS:return{
            ...state,
            data2:payload,
            loading:false
        }

        case GETDATA2_ERROR:return{
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