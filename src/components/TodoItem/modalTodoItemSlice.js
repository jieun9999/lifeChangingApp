import { createSlice } from "@reduxjs/toolkit";

/*
 * {
  id: null,
  isDone:false,
  title: '',
  startDate: '',
  endDate: '',
  content: '',
 }
 */
 let idNumber = 0;
        
export const modalTodoItemSlice = createSlice({
 name: "modalTodoItem",
 initialState:[],
 reducers:{
    update_frame: (state, action)=>{
        state.push({
            id: idNumber,
            isDone:false,
            title: '',
            startDate: '',
            endDate: '',
            content: '',
            upload: false 
    })
    },
    update_title: (state, action) =>{
        state[idNumber].title = action.payload
    },
    update_startdate: (state, action) =>{
        state[idNumber].startDate = action.payload
    },
    update_enddate: (state, action) =>{
        state[idNumber].endDate = action.payload
    },
    update_content: (state, action)=>{
        state[idNumber].content = action.payload
    },
    add_item: (state, action) =>{
        state[idNumber].upload = action.payload
        idNumber += 1;
    }
 }
});

//modalTodoItemSlice.action
export const {update_frame, update_title, update_startdate, update_enddate, update_content, add_item} = modalTodoItemSlice.actions
//reducer 
export default modalTodoItemSlice.reducer;


