import { createSlice } from "@reduxjs/toolkit";

export const modalCompletedItemSlice = createSlice({
 name: "modalCompletedItem",
 initialState:{
  id: null,
  isDone:false,
  title: '',
  startDate: '',
  endDate: '',
  content: '',
 },
 reducers:{
    update_title2: (state, action) =>{
        state.title = action.payload
    },
    update_startdate2: (state, action) =>{
        state.startDate = action.payload
    },
    update_enddate2: (state, action) =>{
       state.endDate = action.payload
    },
    update_content2: (state, action)=>{
        state.content = action.payload
    },
    add_item2: (state, action) =>{
        state.id = action.payload
    }
 }
});

//modalTodoItemSlice.action
export const {update_title2, update_startdate2, update_enddate2, update_content2, add_item2} = modalCompletedItemSlice.actions
//reducer 
export default modalCompletedItemSlice.reducer;


