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
    M_update_frame: (state, action)=>{
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
     M_update_title: (state, action) =>{
        const idNumber = state.length -1;
         state[idNumber].title = action.payload
     },
     M_update_startdate: (state, action) =>{
        const idNumber = state.length -1;
         state[idNumber].startDate = action.payload
     },
     M_update_enddate: (state, action) =>{
        const idNumber = state.length -1;
         state[idNumber].endDate = action.payload
     },
     M_update_content: (state, action)=>{
        const idNumber = state.length -1;
         state[idNumber].content = action.payload
     },
     M_add_item: (state, action) =>{
        const idNumber = state.length -1;
         state[idNumber].upload = true 
     },
     M_delete_item: (state, action)=>{
     const itemId = action.payload;
     const index = state.findIndex((item)=> item.id === itemId)
     if(index !== -1){
         state.splice(index,1);
     }
     },
     M_check_item:(state, action)=>{
    const idNumber = state.length -1;
    state[idNumber].isDone = !state[idNumber].isDone;
    }}
 });

//modalTodoItemSlice.action
export const {M_check_item,M_delete_item, M_update_frame, M_update_title, M_update_startdate, M_update_enddate, M_update_content, M_add_item} = SliceTodoItem.actions

//reducer 
export default SliceTodoItem.reducer;


