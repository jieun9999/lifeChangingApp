import { createSlice } from "@reduxjs/toolkit";

// reducer는 순수 함수이기 때문에 외부에서 변수선언을 하는 것은 좋지 않다
export const SliceCompletedItem = createSlice({
    name:"SliceCompletedItem",
    initialState:[],
    reducers:{
        H_update_Completed_Frame:(state, action) =>{
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
        H_update_Completed_Title:(state, action) =>{
            const idNumber = state.length -1;
            state[idNumber].title = action.payload
        },
        H_update_Completed_StartDate: (state, action) =>{
            const idNumber = state.length -1;
            state[idNumber].startDate = action.payload
        },
        H_update_Completed_EndDate: (state, action) =>{
            const idNumber = state.length -1;
            state[idNumber].endDate = action.payload
        },
        H_update_Completed_Content: (state, action)=>{
            const idNumber = state.length -1;
            state[idNumber].content = action.payload
        },
        H_add_Completed_Item: (state, action) =>{
            const idNumber = state.length -1;
            state[idNumber].upload = action.payload
        },
        H_delete_Completed_Item: (state, action)=>{
        const itemId = action.payload;
        const index = state.findIndex((item)=> item.id === itemId)
        if(index !== -1){
            state.splice(index,1);
        }},
        H_check_Completed_Item: (state, action)=>{
        const idNumber = state.length -1;
        state[idNumber].isDone = !state[idNumber].isDone;
        }}
})

export const {H_check_Completed_Item, H_update_Completed_Frame, H_update_Completed_Title, H_update_Completed_StartDate, H_update_Completed_EndDate, H_update_Completed_Content, H_add_Completed_Item, H_delete_Completed_Item} = SliceCompletedItem.actions;
export default SliceCompletedItem.reducer;