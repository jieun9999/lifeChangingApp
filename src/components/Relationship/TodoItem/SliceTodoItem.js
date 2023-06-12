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
 export const SliceTodoItem = createSlice({
  name: "SliceTodoItem",
  initialState:[],
  reducers:{
    R_update_frame: (state, action)=>{
        const idNumber = state.length -1;
         const newItem ={
                 id: idNumber +1,
                 isDone:false,
                 title: '',
                 startDate: '',
                 endDate: '',
                 content: '',
                 upload: false};
         state.push(newItem)
     },
     R_update_title: (state, action) =>{
        const idNumber = state.length -1;
         state[idNumber].title = action.payload
     },
     R_update_startdate: (state, action) =>{
        const idNumber = state.length -1;
         state[idNumber].startDate = action.payload
     },
     R_update_enddate: (state, action) =>{
        const idNumber = state.length -1;
         state[idNumber].endDate = action.payload
     },
     R_update_content: (state, action)=>{
        const idNumber = state.length -1;
         state[idNumber].content = action.payload
     },
     R_add_item: (state, action) =>{
        const idNumber = state.length -1;
         state[idNumber].upload = true 
     },
     R_delete_item: (state, action)=>{
     const itemId = action.payload;
     const index = state.findIndex((item)=> item.id === itemId)
     if(index !== -1){
         state.splice(index,1);
     }
     },
     R_check_item:(state, action)=>{
    const idNumber = state.length -1;
    state[idNumber].isDone = !state[idNumber].isDone;
    }}
 });

//modalTodoItemSlice.action
export const {R_check_item,R_delete_item, R_update_frame, R_update_title, R_update_startdate, R_update_enddate, R_update_content, R_add_item} = SliceTodoItem.actions

//reducer 
export default SliceTodoItem.reducer;


