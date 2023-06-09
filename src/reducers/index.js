import {combineReducers} from 'redux';
import { updateReducer} from"./todoItemReducer";


// 하나의 데이터가 될 것들만 묶음

 const rootReducer = combineReducers({
    update: updateReducer,
});

export default rootReducer;
