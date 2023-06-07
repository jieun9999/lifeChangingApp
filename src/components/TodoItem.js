import dot from "../img/icon/gotttt.png";
import noncheck from "../img/icon/non check.png";
import check from "../img/icon/check.png";
import styled from 'styled-components';
import { todoItem } from "../reducers/todoItemReducer";
import { checkReducer } from '../reducers/todoItemReducer';
import { useReducer} from 'react';
import {checkBox} from "../actions/modalActions";


const SeveralItemContainer =styled.div`
z-index: 10;
`;

const TodoItemContainer = styled.div`
 display:flex;
 flex-direction:column;
 width:15vw;
 padding-top: 2vh;
 padding-bottom:2vh;
 background: #EDEDED;
 border-radius: 15px;
 filter: drop-shadow(0px 4px 4px #BABF9D);
 margin-bottom:2vh;


 .content{
font-family: 'Merriweather';
font-style: normal;
font-weight: 400;
font-size: 14px;
color: #000000;
padding-left: 2vw;
}
`;

const TitleContainer = styled.div`
 display:flex;
 flex-direction: row;
 justify-content: space-around;
 width: 15vw;
 margin-bottom:1vh;

 .dot{
    width:15px;
    height:15px;
    margin-top:3px;
    margin-left:3px;
 }
 .noncheck{
    width:20px;
    height:20px;
    padding-right:-1.5vw;
 }

 .title{
font-family: 'Merriweather';
font-style: normal;
font-weight: 700;
font-size: 16px;
color: #000000;
margin-right: 1.5vw;
 }
`;


const TodoItem = () =>{

   const [state, dispatch] = useReducer(checkReducer, todoItem)
  
   const handleCheck = (id) =>{
      dispatch(checkBox(id));
    };

return(
   <SeveralItemContainer>
   {
    state.map((item)=>{
      return (
      <TodoItemContainer key={item.id}>
      <TitleContainer>
      <img className ="dot" src={dot} alt="icon"></img>
      <div className="title">{item.title}</div>
      <img onClick={ () => {handleCheck(item.id)}} className="noncheck" src = {item.isDone ? check: noncheck} alt="icon"></img>
      </TitleContainer>
      <div className="contentcontainer">
      <div className="content">{item.content}</div>
      </div>
      </TodoItemContainer>
      )
    })
   }
    </SeveralItemContainer>
)
};

export default TodoItem;


   
   