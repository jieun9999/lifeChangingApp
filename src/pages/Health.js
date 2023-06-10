import styled from 'styled-components';
import CompletedCard from "../components/TodoCard/CompletedCard";
import TodoCard from "../components/TodoCard/TodoCard";

const CardContainer = styled.div`
 display:flex;
 flex-direction:row;
 align-items:center;
 justify-content:space-evenly;
`;

const Health = () =>{

 return(
 <CardContainer>
 <TodoCard/>
 <CompletedCard/>
</CardContainer>
)
};
export default Health;