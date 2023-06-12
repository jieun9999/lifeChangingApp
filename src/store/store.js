import {configureStore} from '@reduxjs/toolkit'
import storage from "redux-persist/lib/storage";
import {combineReducers} from "redux";
import {persistReducer} from "redux-persist";
import thunk from 'redux-thunk';

import todoModalContentReducer from '../components/Health/TodoItem/modalTodoItemSlice';
import completedModalContentReducer from '../components/Health/TodoItem/modalCompletedItemSlice'
import hobbyTodoContentReducer from "../components/Hobby/TodoItem/SliceTodoItem";
import hobbyCompletedContentReducer from "../components/Hobby/TodoItem/SliceCompletetdItem";
import moneyTodoContentReducer from "../components/Money/TodoItem/SliceTodoItem";
import moneyCompletedContentReducer from "../components/Money/TodoItem/SliceCompletedItem";
import relaTodoContentReducer from "../components/Relationship/TodoItem/SliceTodoItem";
import relaCompletedContentReducer from "../components/Relationship/TodoItem/SliceCompletedItem";

//reducers는 영속성을 적용하기 전의 원래의 리듀서들을 결합한 것이고, 
//rootReducer는 Redux Persist를 통해 영속성이 적용된 리듀서들을 결합한 것입니다.

const reducers = combineReducers({
   healthTodoContent: todoModalContentReducer,
   healthCompletedContent: completedModalContentReducer,
   hobbyTodoContent: hobbyTodoContentReducer,
   hobbyCompletedContent: hobbyCompletedContentReducer,
   moneyTodoContent: moneyTodoContentReducer,
   moneyCompletedContent: moneyCompletedContentReducer,
   relaTodoContent: relaTodoContentReducer,
   relaCompletedContent: relaCompletedContentReducer
})

//로컬스토리지에 적용되는 키와 값
const persistConfig = {
  key: 'healthTodoContent',
  storage,
  whitelist:['healthTodoContent']
};
const persistConfig2 ={
   key: 'healthCompletedContent',
   storage,
   whitelist:['healthCompletedContent']
}
const persistConfig3 = {
   key: 'hobbyTodoContent',
   storage,
   whitelist:['hobbyTodoContent']
 };
 const persistConfig4 = {
   key: 'hobbyCompletedContent',
   storage,
   whitelist:['hobbyCompletedContent']
 };
 const persistConfig5 = {
   key: 'moneyTodoContent',
   storage,
   whitelist:['moneyTodoContent']
 };
 const persistConfig6 = {
   key: 'moneyCompletedContent',
   storage,
   whitelist:['moneyCompletedContent']
 };
 const persistConfig7 = {
  key: 'relaTodoContent',
  storage,
  whitelist:['relaTodoContent']
};
const persistConfig8 = {
  key: 'relaCompletedContent',
  storage,
  whitelist:['relaCompletedContent']
};

//영속적인 reducer들
const persistedReducer = persistReducer(persistConfig, reducers);
const persistedReducer2 = persistReducer(persistConfig2, reducers);
const persistedReducer3 = persistReducer(persistConfig3, reducers);
const persistedReducer4 = persistReducer(persistConfig4, reducers);
const persistedReducer5 = persistReducer(persistConfig5, reducers);
const persistedReducer6 = persistReducer(persistConfig6, reducers);
const persistedReducer7 = persistReducer(persistConfig7, reducers);
const persistedReducer8 = persistReducer(persistConfig8, reducers);


//rootReducer로 영속적인 reducer들 결합
const rootReducer = combineReducers({
   healthTodoContent: persistedReducer,
   healthCompletedContent: persistedReducer2,
   hobbyTodoContent: persistedReducer3,
   hobbyCompletedContent: persistedReducer4,
   moneyTodoContent: persistedReducer5,
   moneyCompletedContent: persistedReducer6,
   relaTodoContent: persistedReducer7,
   relaCompletedContent: persistedReducer8
})

export const store = configureStore({
   reducer: rootReducer, //reducer는 단일 항목
   middleware:[thunk],
   devTools: process.env.NODE_ENV !== 'production',
});

