// 사용자가 클릭을 했을때, 
//변경될 상태가 {} 형태로 들어옴

//modalActions.js

export const openModal = () =>{
   return{
    type:'OPEN_MODAL'
   }
   };
 
export const closeModal = () =>{
    return{
        type:'CLOSE_MODAL'
    }
   };

export const checkBox = (id) =>{
    return{
        type:'CHECK OR NON CHECK',
        payload:id
    }
};

