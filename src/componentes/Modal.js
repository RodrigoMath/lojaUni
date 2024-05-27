import React, { useState } from "react";
import styled from "styled-components";
import vela1 from "../imagens/candly1.png"
import vela2 from "../imagens/candly2.png"
import vela3 from "../imagens/candly3.png"

const images = [
  vela1,
  vela2,
  vela3
]

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); 
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  width: 50%;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
`;

const CloseButton = styled.button`
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
 
  &::before {
    content: '';
    display: block;
    width: 20px;
    height: 20px;
    background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PGxpbmUgY2xhc3M9ImxpbmUiIHgxOCIgeTE9IjYiIHgyPSI2IiB5Mj0iMThMCIvPjxsaW5lIGNsYXNzPSJsaW5lIiB4MT0iNiIgeTE9IjYiIHgyPSIxOCIgeTI9IjE4Ii8+PC9zdmc+');
    background-repeat: no-repeat;
    background-position: center;
  }
`;

const ProdutosDoCarrinho = styled.div`
  display: flex;
  flex-direction: row;
  width: 50%;
  height: 50%;
`

const ImagemProduto= styled.img`
  width: 50%;
  height: 50%;
`

export function Modal({ onCloseClick=null }) {
    function onClose(){
        if(onCloseClick){
            onCloseClick(false)
        }
    }

   // Estado para o contador
   const [counts, setCounts] = useState(Array(images.length).fill(0));

   // Função para aumentar o contador
   const handleIncrement = (index) => {
     setCounts(prevCounts => {
       const newCounts = [...prevCounts];
       newCounts[index] = newCounts[index] + 1;
       return newCounts;
     });
   };
  return (
    <ModalContainer>
      <ModalContent>
        <CloseButton onClick={onClose}>×</CloseButton>
        <h2>Compra Finalizada!</h2>
        <ProdutosDoCarrinho>  
          {images.map((image, index) => (
             <div key={index}>
             <ImagemProduto src={image} />
             <p>Contador: {counts[index]}</p>
             <button onClick={() => handleIncrement(index)}>Aumentar</button>
           </div>
            ))}     
        </ProdutosDoCarrinho>
        <p>Obrigado por sua compra.</p>
      </ModalContent>
    </ModalContainer>
  );
}