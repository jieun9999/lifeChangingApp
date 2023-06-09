
import { initialContentState } from "../components/TodoCard";

export const todoItem = [

    {id:0,
    isDone:false,
    title:"강아지와 산책하기",
    content:"물병, 목줄, 비닐봉투 챙겨야 함",
    startDate: "2023-06-06",
    endDate: "2023-06-06",
    },

    {id:1,
    isDone:false,
    title:"비타민 D 챙겨먹기",
    content:"협탁위에",
    startDate: "2023-06-07",
    endDate: "2023-06-14",
    }
];



// 모달에서 글쓰기 버튼 누르면 저장되는 리듀서
// 여러번 CASE가 호출될 경우, state가 누적된다
export const updateReducer = (state=initialContentState, action)=>{
  
 switch(action.type){
  case 'UPDATE_TITLE': 
    return{...state, title: action.payload};
  case 'UPDATE_STARTDATE':
    return{...state, startDate: action.payload};
  case 'UPDATE_ENDDATE':
    return{...state, endDate:action.payload};
  case 'UPDATE_CONTENT':
    return {...state, content: action.payload};
  case 'ADD_ITEM':
    return  {...state, id:action.payload};
    //여기서 todoItem을 바로 쓸 수 없다. state나 action관련된 변수만 넣어야 한다
   // 배열은 가능하지만, 객체는 전개연산자(...)를 쓸 수 없다
    default:
    return state;
 }
};

//클릭해서 받은 item.id가 같은 객체에 대해서만  isDone 속성을 바꿔주어야 하거든

/*export const checkReducer = (state=initialState, action) =>{
    const id = action.payload;
  
   switch(action.type){
    case 'CHECK OR NON CHECK':
      return (
        state.map((item) => {
          if(item.id === id){
            return {...item, isDone:!item.isDone}
          }
          return item;
        })
      )
      default:
        return state;
   }
  };
  */