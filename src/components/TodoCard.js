import plus from "../img/icon/tabler_plus.png";
import TodoItem from "../components/TodoItem";
import styled from "styled-components";


const Card = styled.div`
 width: 15vw;
 height: 60vh;
 border: 1px solid black;
 display:flex;
 flex-direction:column;
 align-items:center;
`;

const TodoCard = () =>{

 return (
    <Card>
     <div>To do</div>
     <div><img src={plus} alt='icon'></img></div>
     <TodoItem/>
    </Card>
 )
};

export default TodoCard;