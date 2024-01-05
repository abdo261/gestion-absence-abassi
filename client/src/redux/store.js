import { configureStore} from '@reduxjs/toolkit'
import { communeReducer } from './slices/communeSlice'
import { etablissementReducer } from './slices/etablissementSlice'
const store = configureStore({
    reducer:{
        commune:communeReducer,
        etablissement:etablissementReducer
    }
})
export default store
