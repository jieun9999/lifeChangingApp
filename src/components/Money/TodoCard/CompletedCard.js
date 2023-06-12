import plus from "../../../img/icon/tabler_plus.png"
import CompletedItem from "../../Money/TodoItem/CompletedItem";
import styled from "styled-components";
import React from "react";
import {useSelector } from "react-redux";
import CompletedModal from "../../Money/Modal/CompletedModal";
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

const CompletedCard = ()=>{

    const [showCompletedModal, setShowCompletedModal] = useState(false);
    const completedModalContent = useSelector((state)=> state.moneyCompletedContent.moneyCompletedContent) // store에 맞게 수정
    console.log(completedModalContent)
    
    return (
        <Card >
        <Title>Completed</Title>
        <div onClick={()=>setShowCompletedModal(true)} className ="pluscontainer">
         <img src={plus} alt='icon'></img>
         </div>
         { showCompletedModal ? <CompletedModal completedModalContent={completedModalContent} closeModal={()=>setShowCompletedModal(false)}/>: null} 
         {/* 컴포넌트에 onClick을 props로 내려준것이니 모달컴포넌트로 가서 직접 이벤트를 작성해야 한다 */}
         <CompletedItem completedModalContent={completedModalContent}/>
       </Card>
    )
};

export default CompletedCard;