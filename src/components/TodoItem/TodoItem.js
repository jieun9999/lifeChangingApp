import dot from "../../img/icon/gotttt.png";
import noncheck from "../../img/icon/non check.png";
import check from "../../img/icon/check.png";
import styled from 'styled-components';


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


const TodoItem = ({todoModalContent}) =>{

//useEffect를 사용하여
//contentState.id가 존재할때
//재렌더링이 되어야 함
//contentState의 형태가 어떻게 되는가? 배열인가 객체인가
//그런데, map 함수는 배열에 써야 한다
// contentState는 한개의 객체만 들어올 수 있다
// 이외에 여러객체를 누적시킬 수 있는 공간이 필요하다

return(
   <SeveralItemContainer>
      {
      todoModalContent.map((item)=> 
      item.upload ?
      <TodoItemContainer key={item.id}>
      <TitleContainer>
      <img className ="dot" src={dot} alt="icon"></img>
      <div className="title">{item.title}</div>
      <img className="noncheck" src = {item.isDone ? check: noncheck} alt="icon"></img>
      </TitleContainer>
      <div className="contentcontainer">
      <div className="content">{item.content}</div>
      </div>
      </TodoItemContainer> : null
      ) 
      }
    </SeveralItemContainer>
)
};

export default TodoItem;


   
   