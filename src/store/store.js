import {configureStore} from '@reduxjs/toolkit'
import storage from "redux-persist/lib/storage";
import {combineReducers} from "redux";
import {persistReducer} from "redux-persist";
import thunk from 'redux-thunk';

import todoModalContentReducer from '../components/Health/TodoItem/modalTodoItemSlice';
import completedModalContentReducer from '../components/Health/TodoItem/modalCompletedItemSlice'

//reducers는 영속성을 적용하기 전의 원래의 리듀서들을 결합한 것이고, 
//rootReducer는 Redux Persist를 통해 영속성이 적용된 리듀서들을 결합한 것입니다.

const reducers = combineReducers({
   todoModalContent: todoModalContentReducer,
   completedModalContent: completedModalContentReducer
})

//로컬스토리지에 적용되는 키와 값
const persistConfig = {
  key: 'todoModalContent',
  storage,
  whitelist:['todoModalContent']
};
const persistConfig2 ={
   key: 'completedModalContent',
   storage,
   whitelist:['completedModalContent']
}

//영속적인 reducer들
const persistedReducer = persistReducer(persistConfig, reducers);
const persistedReducer2 = persistReducer(persistConfig2, reducers);

//rootReducer로 영속적인 reducer들 결합
const rootReducer = combineReducers({
   todoModalContent: persistedReducer,
   completedModalContent: persistedReducer2
})

export const store = configureStore({
   reducer: rootReducer, //reducer는 단일 항목
   middleware:[thunk],
   devTools: process.env.NODE_ENV !== 'production',
});

