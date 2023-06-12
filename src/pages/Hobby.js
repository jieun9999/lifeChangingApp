import styled from 'styled-components';
import TodoCard from "../components/Hobby/TodoCard/TodoCard"
import CompletedCard from "../components/Hobby/TodoCard/CompletedCard"

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

const Hobby = () =>{
    return (
        <>
        <RealTitle>Hobby</RealTitle>
        <CardContainer>
        <TodoCard/>
        <CompletedCard/>
        </CardContainer>
        </>
    )
   };
   export default Hobby;