import styled from 'styled-components';
import dot from "../img/icon/realdot.png";
import edit from "../img/icon/tabler_edit.png";
import { useReducer } from 'react';
import { updateReducer } from "../reducers/todoItemReducer"

const ModalView = styled.div`
 width: 25vw;
 height: 45vh;
 background: #FFFFFF;
 border-radius: 15px;
 z-index: 100;
 filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

 input.title{
  outline:none;
  border:none;
  border-bottom: 1px solid #D9D9D9;
  width: 16vw;
 height: 4vh;
 margin-left:0.5vw;
 
 }

 textarea{
  outline:none;
 }

 .contentContainer{
  display:flex;
  align-items:center;
  justify-content:center;
 }

 .content{
  width: 22vw;
  height:24vh;
  margin-top:1.5vh;
  border:none;
 }

 .date{
    width: 25vw;
    height: 8vh;
    border-bottom: 2px solid #D9D9D9;
    display:flex;
    flex-direction:row;
    justify-content:space-around;
    align-items:center;

   .일자{
   margin-left:0.5vw;
   }

    input{
    width: 7vw;
    height: 3vh;
    background: #D9D9D9;
    border-radius: 10px;
    border:none;
    outline:none;
    }

    .end{
      margin-right:0.5vw;
    }
   }

 .titleContainer{
  width: 25vw;
  height: 9vh;
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:space-around;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  .dot{
    margin-left:1.5vw;
    margin-top:3vh;
    width:20px;
    height:20px
  }
   .title{
    margin-right:5vw;
    margin-top:3vh;
   }
   .edit{
    margin-right:1vw;
    margin-bottom: 2vh;
   }
 }

`;
const ModalBackGround = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(61, 61, 61, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index:50;
`;

export const initialState = {
  id:'',
  isDone:false,
  title: '',
  startDate: '',
  endDate: '',
  content: '',
};

const Modal = ({onClick}) =>{

  const [state, dispatch] = useReducer(updateReducer, initialState)

  const handleModalClick = (e) => {
    e.stopPropagation(); // 이벤트 버블링 막기
  };

  //사용자가 입력한 값을 추적하는 함수
  const handleInputChange = (e) =>{
   const {name, value} = e.target;
   dispatch({type: `UPDATE_${name.toUpperCase()}`, payload: value})
  };

  //클릭으로 적은 모든 내용을 한번에 전달
  const addItem = () =>{
  dispatch({type:'ADD_ITEM'});
  };
  //payload를 줄필요가 없음

  console.log(state)
  /**
   * 현재의 updateReducer는 모달 창에 사용되는 값들만 인식하고 처리하기 때문에 다른 페이지로 상태를 전달하는데에는 적합하지 않습니다. 따라서 새로운 리듀서를 만들어서 다른 페이지에서 사용하는 상태를 처리하는 것이 좋습니다.
   */
  /**
   * content: "1ㅈㅁㅇㅁㄴ"endDate: "2024-01-01"id: 2 isDone: false startDate: "2022-01-01" title: "안뇽"
   */

return(
    <ModalBackGround onClick={onClick}>
    <ModalView onClick={handleModalClick} >
    <div className = "titleContainer">
    <img className="dot" src = {dot} alt="icon"></img> 
    <input value ={state.title} name = "title" className="title" placeholder="메모 제목" onChange={handleInputChange}></input>
    <img onClick={addItem} className="edit" src={edit} alt="icon"></img>
    </div>
    <div className="date">
    <div className='일자'>일자</div>
    <input value ={state.startDate} name ="startDate" className ="start" placeholder="시작일" onChange={handleInputChange}></input>
    <div>~</div>
    <input value ={state.endDate} name= "endDate" className ="end" placeholder="종료일" onChange={handleInputChange}></input>
    </div>
    <div className='contentContainer'>
    <textarea value ={state.content} name ="content" className ="content" placeholder="메모" onChange={handleInputChange}>
    </textarea>
    </div>
    </ModalView>
    </ModalBackGround>
)
};

export default Modal;
