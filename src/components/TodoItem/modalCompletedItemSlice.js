import { createSlice } from "@reduxjs/toolkit";

let idNumber = 0;

export const modalCompletedSlice = createSlice({
    name:"modalTodoItem",
    initialState:[],
    reducers:{
        update_Completed_Frame:(state, action) =>{
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
        update_Completed_Title:(state, action) =>{
            state[idNumber].title = action.payload
        },
        update_Completed_StartDate: (state, action) =>{
            state[idNumber].startDate = action.payload
        },
        update_Completed_EndDate: (state, action) =>{
            state[idNumber].endDate = action.payload
        },
        update_Completed_Content: (state, action)=>{
            state[idNumber].content = action.payload
        },
        add_Completed_Item: (state, action) =>{
            state[idNumber].upload = action.payload
            idNumber += 1;
        },
        delete_Completed_Item: (state, action)=>{
        const itemId = action.payload;
        const index = state.findIndex((item)=> item.id === itemId)
        if(index !== -1){
            state.splice(index,1);
        }
    }}
})

export const {update_Completed_Frame, update_Completed_Title, update_Completed_StartDate, update_Completed_EndDate, update_Completed_Content, add_Completed_Item, delete_Completed_Item} = modalCompletedSlice.actions;
export default modalCompletedSlice.reducer;