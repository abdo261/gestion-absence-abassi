import { configureStore} from '@reduxjs/toolkit'
import { communeReducer } from './slices/communeSlice'
import { etablissementReducer } from './slices/etablissementSlice'
import { authReducer } from './slices/authSlice'
const store = configureStore({
    reducer:{
        commune:communeReducer,
        etablissement:etablissementReducer,
        auth:authReducer
    }
})
export default store
