import { createSlice } from "@reduxjs/toolkit";

// reducer는 순수 함수이기 때문에 외부에서 변수선언을 하는 것은 좋지 않다
export const SliceCompletedItem = createSlice({
    name:"SliceCompletedItem",
    initialState:[],
    reducers:{
        M_update_Completed_Frame:(state, action) =>{
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
        M_update_Completed_Title:(state, action) =>{
            const idNumber = state.length -1;
            state[idNumber].title = action.payload
        },
        M_update_Completed_StartDate: (state, action) =>{
            const idNumber = state.length -1;
            state[idNumber].startDate = action.payload
        },
        M_update_Completed_EndDate: (state, action) =>{
            const idNumber = state.length -1;
            state[idNumber].endDate = action.payload
        },
        M_update_Completed_Content: (state, action)=>{
            const idNumber = state.length -1;
            state[idNumber].content = action.payload
        },
        M_add_Completed_Item: (state, action) =>{
            const idNumber = state.length -1;
            state[idNumber].upload = action.payload
        },
        M_delete_Completed_Item: (state, action)=>{
        const itemId = action.payload;
        const index = state.findIndex((item)=> item.id === itemId)
        if(index !== -1){
            state.splice(index,1);
        }},
        M_check_Completed_Item: (state, action)=>{
        const idNumber = state.length -1;
        state[idNumber].isDone = !state[idNumber].isDone;
        }}
})

export const {M_check_Completed_Item, M_update_Completed_Frame, M_update_Completed_Title, M_update_Completed_StartDate, M_update_Completed_EndDate, M_update_Completed_Content, M_add_Completed_Item, M_delete_Completed_Item} = SliceCompletedItem.actions;
export default SliceCompletedItem.reducer;