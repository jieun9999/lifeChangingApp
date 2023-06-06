import styled from 'styled-components';


const ModalView = styled.div`
 width: 30vw;
 height: 20vh;
 background: #FFFFFF;
 border-radius: 15px;
 z-index: 100;

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

const Modal = ({onClick}) =>{
return(
    <ModalBackGround>
    <ModalView onClick={onClick}>
    </ModalView>
    </ModalBackGround>
)
};

export default Modal;