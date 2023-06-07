
export const initialState ={
  showModal:false
}

     // 현재 상태인 state와 action 객체를 전달받음
    // reducer함수에서 action객체를 확인하고 상태를 변경함
export const modalReducer = (state=initialState, action) =>{
    switch(action.type){
    case 'OPEN_MODAL':
      return {showModal:true};
      case 'CLOSE_MODAL':
        return {showModal:false};
        default:
          return state;
    }
  };

