import {createSlice} from "@reduxjs/toolkit"
const etablissementSlice = createSlice({
    name:'etablissment',
    initialState: {
        etablissements: null,
        etablissement: null,
        Loading:false,
        error:null,
        deleteMessage:null
      },
      reducers: {
        getEtablissements(state, action) {
          state.etablissements = action.payload;
        },
        getCommuneById(state, action) {
          state.etablissement = action.payload;
        },
        setLoading(state,action){
          state.Loading= action.payload
        },
        setError(state,action){
          state.error = action.payload
        },
        addEtablissement(state,action){
          state.etablissements = [...state.etablissements,action.payload]
        },
        setdeleteMessage(state,action){
          state.deleteMessage=action.payload
        }
      },
})

const etablissementReducer = etablissementSlice.reducer;
const etablissementAction = etablissementSlice.actions;
export { etablissementReducer, etablissementAction };