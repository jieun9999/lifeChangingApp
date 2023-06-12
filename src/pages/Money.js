import styled from 'styled-components';
import TodoCard from "../components/Money/TodoCard/TodoCard";
import CompletedCard from "../components/Money/TodoCard/CompletedCard";

const CardContainer = styled.div`
 display:flex;
 flex-direction:row;
 align-items:center;
 justify-content:space-evenly;
`;

const RealTitle = styled.div`
font-family: 'Merriweather';
font-style: normal;
font-weight: 400;
font-size: 25px;
color: #40513B;
margin-bottom: 5vh;
margin-left: 4vw;
`;

const Money = () =>{
    return <>
    <RealTitle>Money</RealTitle>
    <CardContainer>
    <TodoCard/>
    <CompletedCard/>
    </CardContainer>
    </>;
   };
   export default Money;