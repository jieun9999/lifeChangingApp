import plus from "../img/icon/tabler_plus.png";
import TodoItem from "../components/TodoItem";
import styled from "styled-components";
import React, {useReducer} from "react";
import Modal from "../components/Modal";
import { modalReducer} from "../reducers/modalReducer";
import { initialState } from "../reducers/modalReducer";
import { openModal } from "../actions/modalActions";
import { closeModal } from "../actions/modalActions";


const Title = styled.div`
 margin-top: 2vh;
 margin-bottom:2vh;
font-family: 'Merriweather';
font-style: normal;
font-weight: 400;
font-size: 22px;
color: #353535;
width:11vw;
`;

const Card = styled.div`
 width: 17vw;
 height: 60vh;
 display:flex;
 flex-direction:column;
 align-items:center;background: #FFFFFF;
 box-shadow: inset 0px 4px 4px rgba(130, 130, 130, 0.5);
 border-radius: 20px;

 .pluscontainer{
   width:15vw;
   display:flex;
   flex-direction:row;
   align-items:center;
   justify-content:center;
   background: rgba(213, 255, 191, 0.5);
   box-shadow: 0px 4px 4px rgba(95, 92, 92, 0.75);
   border-radius: 20px;
   margin-bottom: 4vh;
   height:5vh;
 }
`;


const TodoCard = ({item}) =>{
  // state는 reducer로 관리하고, dispatch는 reducer를 호출시켜 initialState를 업데이트 시키는 매개체가 된다
  const [state, dispatch] = useReducer(modalReducer, initialState);

  //dispatch로 actions를 전달해주고, dispatch가 modalReducer를 호출하여 전역 상태관리를 하는구나
  const handleOpenModal = () =>{
    dispatch(openModal())
  };

  const handleCloseModal = () =>{
   dispatch(closeModal())
  };

 return (
    <Card>
     <Title>{item}</Title>
     <div onClick={handleOpenModal} className ="pluscontainer">
      <img src={plus} alt='icon'></img>
      </div>
      {state.showModal ? <Modal onClick={handleCloseModal}/>: null} 
      {/* 컴포넌트에 onClick을 props로 내려준것이니 모달컴포넌트로 가서 직접 이벤트를 작성해야 한다 */}
     <TodoItem/>
    </Card>
 )
};

export default TodoCard;