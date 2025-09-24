import { createSlice } from "@reduxjs/toolkit";


const arraySlice = createSlice({
  name: "structure",
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      state.push(action.payload);
    },
    removeItem: (state, action) => {
      return state.filter((item, index) => index !== action.payload);
    },
    addValues: (state, action) => {
      state.push(...action.payload);
    },
    cleanArray: () => {
      return [];
    },
  },
});


export const {addItem , removeItem, cleanArray , addValues} = arraySlice.actions;
export default arraySlice.reducer;