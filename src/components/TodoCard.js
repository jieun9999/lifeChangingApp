import plus from "../img/icon/tabler_plus.png";
import TodoItem from "../components/TodoItem";
import styled from "styled-components";

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
 width: 15vw;
 height: 60vh;
 display:flex;
 flex-direction:column;
 align-items:center;background: #FFFFFF;
 box-shadow: inset 0px 4px 4px rgba(130, 130, 130, 0.5);
 border-radius: 20px;

 .pluscontainer{
   width:13vw;
   display:flex;
   flex-direction:row;
   align-items:center;
   justify-content:center;
   background: rgba(213, 255, 191, 0.5);
   box-shadow: 0px 4px 4px rgba(95, 92, 92, 0.75);
   border-radius: 20px;
   margin-bottom: 4vh;
   height:4vh;
 }
`;

const TodoCard = ({item}) =>{


 return (
    <Card>
     <Title>{item}</Title>
     <div className ="pluscontainer"><img src={plus} alt='icon'></img></div>
     <TodoItem/>
    </Card>
 )
};

export default TodoCard;