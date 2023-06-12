import { createSlice } from "@reduxjs/toolkit";

// reducer는 순수 함수이기 때문에 외부에서 변수선언을 하는 것은 좋지 않다
export const SliceCompletedItem = createSlice({
    name:"SliceCompletedItem",
    initialState:[],
    reducers:{
        R_update_Completed_Frame:(state, action) =>{
            const idNumber = state.length -1;
            state.push({
                id: idNumber + 1 ,
                isDone:true,
                title: '',
                startDate: '',
                endDate: '',
                content: '',
                upload: false 
        })
        },
        R_update_Completed_Title:(state, action) =>{
            const idNumber = state.length -1;
            state[idNumber].title = action.payload
        },
        R_update_Completed_StartDate: (state, action) =>{
            const idNumber = state.length -1;
            state[idNumber].startDate = action.payload
        },
        R_update_Completed_EndDate: (state, action) =>{
            const idNumber = state.length -1;
            state[idNumber].endDate = action.payload
        },
        R_update_Completed_Content: (state, action)=>{
            const idNumber = state.length -1;
            state[idNumber].content = action.payload
        },
        R_add_Completed_Item: (state, action) =>{
            const idNumber = state.length -1;
            state[idNumber].upload = action.payload
        },
        R_delete_Completed_Item: (state, action)=>{
        const itemId = action.payload;
        const index = state.findIndex((item)=> item.id === itemId)
        if(index !== -1){
            state.splice(index,1);
        }},
        R_check_Completed_Item: (state, action)=>{
        const idNumber = state.length -1;
        state[idNumber].isDone = !state[idNumber].isDone;
        }}
})

export const {R_check_Completed_Item, R_update_Completed_Frame, R_update_Completed_Title, R_update_Completed_StartDate, R_update_Completed_EndDate, R_update_Completed_Content, R_add_Completed_Item, R_delete_Completed_Item} = SliceCompletedItem.actions;
export default SliceCompletedItem.reducer;