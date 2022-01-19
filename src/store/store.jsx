
import {createStore} from 'redux'
import { getdataReducer } from './reducer'

export const store =createStore(getdataReducer)