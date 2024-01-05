import { createSlice } from "@reduxjs/toolkit";

const communeSlice = createSlice({
  name: "commune",
  initialState: {
    communes: null,
    commune: null,
    Loading:false,
    error:null,
    deleteMessage:null,
    deleteMenyMessage:null,
  },
  reducers: {
    getCommunes(state, action) {
      state.communes = action.payload
    },
    getCommuneById(state, action) {
      state.commune = action.payload;
    },
    setLoading(state,action){
      state.Loading= action.payload
    },
    setError(state,action){
      state.error = action.payload
    },
    addCommunes(state,action){
      state.communes = [...state.communes,action.payload].sort((a, b) => {
        return new Date(b.updatedAt) - new Date(a.updatedAt);
      });
    },
    deleteCommune(state,action){
      state.communes = state.communes.filter(c=>c._id!==action.payload).sort((a, b) => {
        return new Date(b.updatedAt) - new Date(a.updatedAt);
      });
    },
    setdeleteMessage(state,action){
      state.deleteMessage=action.payload
    },
    setdeleteMenyMessage(state,action){
      state.deleteMenyMessage=action.payload
    },
    updateCommune(state, action) {
      state.communes = state.communes.map((commune) =>
        commune._id === action.payload._id ? action.payload : commune
      );
      state.commune = action.payload; 
    },
    deleteManyCommunes(state, action) {
    
        state.communes = state.communes.filter(
          (commune) => !action.payload.includes(commune._id)
        )
        
      
    },
  },
});
const communeReducer = communeSlice.reducer;
const communeAction = communeSlice.actions;
export { communeReducer, communeAction };
