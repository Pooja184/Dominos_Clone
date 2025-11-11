import {configureStore} from 'react-redux';
import authReducer from '../features/registerSlice'
export const store=configureStore({
    reducer:{
        auth:authReducer
    }
})