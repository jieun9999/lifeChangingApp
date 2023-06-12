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
    H_update_frame: (state, action)=>{
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
     H_update_title: (state, action) =>{
        const idNumber = state.length -1;
         state[idNumber].title = action.payload
     },
     H_update_startdate: (state, action) =>{
        const idNumber = state.length -1;
         state[idNumber].startDate = action.payload
     },
     H_update_enddate: (state, action) =>{
        const idNumber = state.length -1;
         state[idNumber].endDate = action.payload
     },
     H_update_content: (state, action)=>{
        const idNumber = state.length -1;
         state[idNumber].content = action.payload
     },
     H_add_item: (state, action) =>{
        const idNumber = state.length -1;
         state[idNumber].upload = true 
     },
     H_delete_item: (state, action)=>{
     const itemId = action.payload;
     const index = state.findIndex((item)=> item.id === itemId)
     if(index !== -1){
         state.splice(index,1);
     }
     },
     H_check_item:(state, action)=>{
    const idNumber = state.length -1;
    state[idNumber].isDone = !state[idNumber].isDone;
    }}
 });

//modalTodoItemSlice.action
export const {H_check_item,H_delete_item, H_update_frame, H_update_title, H_update_startdate, H_update_enddate, H_update_content, H_add_item} = SliceTodoItem.actions

//reducer 
export default SliceTodoItem.reducer;


