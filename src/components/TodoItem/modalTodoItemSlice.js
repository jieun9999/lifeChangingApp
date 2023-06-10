import { createSlice } from "@reduxjs/toolkit";

export const modalTodoItemSlice = createSlice({
 name: "modalTodoItem",
 initialState:{
  id: null,
  isDone:false,
  title: '',
  startDate: '',
  endDate: '',
  content: '',
 },
 reducers:{
    update_title: (state, action) =>{
        state.title = action.payload
    },
    update_startdate: (state, action) =>{
        state.startDate = action.payload
    },
    update_enddate: (state, action) =>{
       state.endDate = action.payload
    },
    update_content: (state, action)=>{
        state.content = action.payload
    },
    add_item: (state, action) =>{
        state.id = action.payload
    }
 }
});

//modalTodoItemSlice.action
export const {update_title, update_startdate, update_enddate, update_content, add_item} = modalTodoItemSlice.actions
//reducer 
export default modalTodoItemSlice.reducer;


