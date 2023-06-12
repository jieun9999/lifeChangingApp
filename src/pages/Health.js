import styled from 'styled-components';
import TodoCard from "../components/Health/TodoCard/TodoCard";
import CompletedCard from '../components/Health//TodoCard/CompletedCard';


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