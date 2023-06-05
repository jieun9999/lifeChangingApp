import TodoCard from "../components/TodoCard";
import styled from 'styled-components';

const CardContainer = styled.div`
 display:flex;
 flex-direction:row;
 align-items:center;
 justify-content:space-evenly;
`;

const Overview = () =>{
 return(
 <CardContainer>
 <TodoCard/>
 <TodoCard/>
 <TodoCard/>
</CardContainer>
)
};
export default Overview;