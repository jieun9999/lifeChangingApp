import styled from 'styled-components';
import dot from "../../../img/icon/realdot.png";
import edit from "../../../img/icon/tabler_edit.png";
import { useDispatch } from 'react-redux';
import {update_Completed_Frame, update_Completed_Title, update_Completed_StartDate, update_Completed_EndDate, update_Completed_Content, add_Completed_Item} from "../../Health/TodoItem/modalCompletedItemSlice";
import upload from "../../../img/icon/upload.png"


const ModalView = styled.div`
 width: 25vw;
 height: 45vh;
 background: #FFFFFF;
 border-radius: 15px;
 z-index: 100;
 filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

 input.title{
  outline:none;
  border:none;
  border-bottom: 1px solid #D9D9D9;
  width: 16vw;
 height: 4vh;
 margin-left:0.5vw;
 
 }

 textarea{
  outline:none;
 }

 .contentContainer{
  display:flex;
  align-items:center;
  justify-content:center;
 }

 .content{
  width: 22vw;
  height:24vh;
  margin-top:1.5vh;
  border:none;
 }

 .date{
    width: 25vw;
    height: 8vh;
    border-bottom: 2px solid #D9D9D9;
    display:flex;
    flex-direction:row;
    justify-content:space-around;
    align-items:center;

   .일자{
   margin-left:0.5vw;
   }

    input{
    width: 7vw;
    height: 3vh;
    background: #D9D9D9;
    border-radius: 10px;
    border:none;
    outline:none;
    }

    .end{
      margin-right:0.5vw;
    }
   }

 .titleContainer{
  width: 25vw;
  height: 9vh;
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:space-around;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  .dot{
    margin-left:1.5vw;
    margin-top:3vh;
    width:20px;
    height:20px
  }
   .title{
    margin-right:5vw;
    margin-top:3vh;
   }
   .edit{
    width: 33px;
    height:33px;
    margin-right:0.5vw;
    margin-bottom: 2vh;
   }
   .upload{
    width: 33px;
    height:33px;
    margin-right:0.5vw;
    margin-bottom: 2vh;
   }
 }

`;
const ModalBackGround = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(61, 61, 61, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index:50;
`;


const CompletedModal = ({completedModalContent, closeModal}) =>{
    
    const dispatch = useDispatch();
    const handleModalClick = (e) => {
      e.stopPropagation(); // 이벤트 버블링 막기
    };
   //console.log(completedModalContent)

    return(
        <ModalBackGround onClick={closeModal}>
        <ModalView onClick={handleModalClick} >
        <div className = "titleContainer">
        <img className="dot" src = {dot} alt="icon"></img> 
        <input value ={completedModalContent.title} name = "title" className="title" placeholder="메모 제목" onChange={(e)=>dispatch(update_Completed_Title(e.target.value))}></input>
        <img onClick={()=>dispatch(update_Completed_Frame())} className="edit" src={edit} alt="icon"></img>
        <img onClick={()=>dispatch(add_Completed_Item(true))} className='upload' src={upload} alt="icon"></img>
        </div>
        <div className="date">
        <div className='일자'>일자</div>
        <input value ={completedModalContent.startDate} name ="startDate" className ="start" placeholder="시작일" onChange={(e)=>dispatch(update_Completed_StartDate(e.target.value))}></input>
        <div>~</div>
        <input value ={completedModalContent.endDate} name= "endDate" className ="end" placeholder="종료일" onChange={(e)=>dispatch(update_Completed_EndDate(e.target.value))}></input>
        </div>
        <div className='contentContainer'>
        <textarea value ={completedModalContent.content} name ="content" className ="content" placeholder="메모" onChange={(e)=>dispatch(update_Completed_Content(e.target.value))}>
        </textarea>
        </div>
        </ModalView>
        </ModalBackGround>
  )
  };
  
  export default CompletedModal;
  