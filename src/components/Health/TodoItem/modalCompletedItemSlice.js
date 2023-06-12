import { createSlice } from "@reduxjs/toolkit";

// reducer는 순수 함수이기 때문에 외부에서 변수선언을 하는 것은 좋지 않다


export const modalCompletedSlice = createSlice({
    name:"modalTodoItem",
    initialState:[],
    reducers:{
        update_Completed_Frame:(state, action) =>{
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
        update_Completed_Title:(state, action) =>{
            const idNumber = state.length -1;
            state[idNumber].title = action.payload
        },
        update_Completed_StartDate: (state, action) =>{
            const idNumber = state.length -1;
            state[idNumber].startDate = action.payload
        },
        update_Completed_EndDate: (state, action) =>{
            const idNumber = state.length -1;
            state[idNumber].endDate = action.payload
        },
        update_Completed_Content: (state, action)=>{
            const idNumber = state.length -1;
            state[idNumber].content = action.payload
        },
        add_Completed_Item: (state, action) =>{
            const idNumber = state.length -1;
            state[idNumber].upload = action.payload
        },
        delete_Completed_Item: (state, action)=>{
        const itemId = action.payload;
        const index = state.findIndex((item)=> item.id === itemId)
        if(index !== -1){
            state.splice(index,1);
        }},
        check_Completed_Item: (state, action)=>{
        const idNumber = state.length -1;
        state[idNumber].isDone = !state[idNumber].isDone;
        }}
})

export const {check_Completed_Item, update_Completed_Frame, update_Completed_Title, update_Completed_StartDate, update_Completed_EndDate, update_Completed_Content, add_Completed_Item, delete_Completed_Item} = modalCompletedSlice.actions;
export default modalCompletedSlice.reducer;