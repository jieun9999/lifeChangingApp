import {configureStore} from '@reduxjs/toolkit'
import modalOpenReducer from "../components/Modal/ModalOpenSlice";
import todoModalContentReducer from '../components/TodoItem/modalTodoItemSlice';
import completedModalContentReducer from "../components/TodoItem/modalCompletedItemSlice"

export const store = configureStore({
   reducer:{
    modalOpen: modalOpenReducer,
    todoModalContent:todoModalContentReducer,
    completedModalContent:completedModalContentReducer,

   }
});