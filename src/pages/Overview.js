import TodoCard from "../components/TodoCard";
import styled from 'styled-components';

const CardContainer = styled.div`
 display:flex;
 flex-direction:row;
 align-items:center;
 justify-content:space-evenly;
`;

const Overview = () =>{

const todoCard = ["To do","In Progress","Completed"]
 return(
 <CardContainer>
 {
    todoCard.map((item)=>{
        return(
            <TodoCard item={item} key={item}>
            </TodoCard>
        )
    })
 }
</CardContainer>
)
};
export default Overview;