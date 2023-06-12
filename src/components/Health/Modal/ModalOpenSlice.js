import { createSlice } from '@reduxjs/toolkit'

export const modalOpenSlice = createSlice({
    name: 'modalOpen',
    initialState:{
        showModal:false
      },
    reducers:{
      modalIsOpen(state){
        state.showModal = true
      },
      modalIsClose(state){
        state.showModal = false
      }
    }
})

export const {modalIsOpen, modalIsClose} = modalOpenSlice.actions
export default modalOpenSlice.reducer;