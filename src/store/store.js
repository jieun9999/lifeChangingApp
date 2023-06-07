//store.js

//Store은 만들어진 여러가지의 reducer를 전역에서 관리하는 저장소다
// Store가 있으면 useSelector를 사용해서 어떤 reducer로 업데이트된 state의 값을 꺼내서 
//다른 파일의 변수에 할당할 수 있다 (state가 여러 파일을 넘어 자유자재로 이동가능)

import {createStore} from 'redux';
import rootReducer from '../reducers/index';

const store = createStore(rootReducer);

export default store;
