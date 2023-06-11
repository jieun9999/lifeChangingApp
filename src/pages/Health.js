import styled from 'styled-components';
import TodoCard from "../components/TodoCard/TodoCard";
import CompletedCard from '../components/TodoCard/CompletedCard';


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