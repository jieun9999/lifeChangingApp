import plus from "../../../img/icon/tabler_plus.png";
import TodoItem from "../../Hobby/TodoItem/TodoItem";
import styled from "styled-components";
import React from "react";
import { useSelector } from "react-redux";
import TodoModal from "../../Hobby/Modal/TodoModal";
import { useState } from "react";

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

const TodoCard = () =>{
    // state는 reducer로 관리하고, dispatch는 reducer를 호출시켜 initialState를 업데이트 시키는 매개체가 된다
    
    const [showTodoModal, setShowTodoModal] = useState(false);
    const todoModalContent = useSelector((state)=> state.hobbyTodoContent.hobbyTodoContent) // store에 맞게 수정
    
    //console.log(todoModalContent)
  
    
   return (
      <Card >
       <Title>To do</Title>
       <div onClick={()=>setShowTodoModal(true)} className ="pluscontainer">
        <img src={plus} alt='icon'></img>
        </div>
        { showTodoModal ? <TodoModal todoModalContent={todoModalContent} closeModal={()=>setShowTodoModal(false)}/>: null} 
        {/* 컴포넌트에 onClick을 props로 내려준것이니 모달컴포넌트로 가서 직접 이벤트를 작성해야 한다 */}
        <TodoItem todoModalContent={todoModalContent}/>
      </Card>
  
   )
  };
  
  export default TodoCard;