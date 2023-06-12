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
 



 export const modalTodoItemSlice = createSlice({
  name: "modalTodoItem",
  initialState:[],
  reducers:{
     update_frame: (state, action)=>{
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
     update_title: (state, action) =>{
        const idNumber = state.length -1;
         state[idNumber].title = action.payload
     },
     update_startdate: (state, action) =>{
        const idNumber = state.length -1;
         state[idNumber].startDate = action.payload
     },
     update_enddate: (state, action) =>{
        const idNumber = state.length -1;
         state[idNumber].endDate = action.payload
     },
     update_content: (state, action)=>{
        const idNumber = state.length -1;
         state[idNumber].content = action.payload
     },
     add_item: (state, action) =>{
        const idNumber = state.length -1;
         state[idNumber].upload = true 
     },
     delete_item: (state, action)=>{
     const itemId = action.payload;
     const index = state.findIndex((item)=> item.id === itemId)
     if(index !== -1){
         state.splice(index,1);
     }
     },
    check_item:(state, action)=>{
    const idNumber = state.length -1;
    state[idNumber].isDone = !state[idNumber].isDone;
    }}
 });

//modalTodoItemSlice.action
export const {check_item,delete_item, update_frame, update_title, update_startdate, update_enddate, update_content, add_item} = modalTodoItemSlice.actions


//reducer 
export default modalTodoItemSlice.reducer;


