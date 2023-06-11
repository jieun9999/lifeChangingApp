import {configureStore} from '@reduxjs/toolkit'
import todoModalContentReducer from '../components/TodoItem/modalTodoItemSlice';
import completedModalContentReducer from '../components/TodoItem/modalCompletedItemSlice'

export const store = configureStore({
   reducer:{
    todoModalContent:todoModalContentReducer,
    completedModalContent: completedModalContentReducer,
   }
});