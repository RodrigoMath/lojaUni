import React, { useState } from "react";
import styled from "styled-components";
import vela1 from "../imagens/candly1.jpg"
import vela2 from "../imagens/candly2.jpg"
import vela3 from "../imagens/candly3.jpg"
import axios from 'axios';

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
  width: 100%;
  height: 50%;
  gap: 10px;
`

const ImagemProduto= styled.img`
  width: 100%;
  height: 70%;
  border-radius: 10px;
`
const Titulo = styled.div`
    font-family: 'Brush Script MT', cursive; 
    font-size: 24px;
    color: #333;
    text-shadow: 0 0 0.1px black; 
    display: flex; 
    flex-direction: column;
    justify-content: center; 
    align-items: center; 
`
const FinalizaDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const ButtonCalcularTotal = styled.button`
  height: 130px;
  width: 200px;
  border-radius: 15px;
  cursor: pointer;
  background-color: #D0F0C0;
`
const QuantidadeDoItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between; 
  width: 150px;
  height: 100px;
  border: 1px solid black;
  border-radius: 5px;
`;

const Contador = styled.p`
  font-size: 24px;
  margin-right: 10px;
`;

const Button = styled.input`
  width: 40px;
  height: 30px;
  border: none;
  border-radius: 5px;
  background-color: #4caf50; 
  color: white;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    background-color: #45a049; 
  }
`;


export function Modal({ onCloseClick=null, cartItems }) {
    function onClose(){
        if(onCloseClick){
            onCloseClick(false)
        }
    }
    const [carrinhoDados, setCarrinhoDados] = useState([null]);

   // Estado para o contador
   const [counts, setCounts] = useState(Array(images.length).fill(0));
   const [countsPost, setCountsPost] = useState(Array(images.length).fill(0));


     function handleBuyPost(){
      axios.post('http://localhost:8080/carrinho', countsPost)
      .then((response) => {
        if (response.status >= 200 && response.status < 300) {
          setTimeout(() => {
            axios.get('http://localhost:8080/carrinho/' + response.data.id) 
              .then(response => {
                console.log("Dados do carrinho:", response.data);
                setCarrinhoDados(response.data);
              })
              .catch(error => {
                console.error("Erro ao buscar dados do carrinho:", error);
              });
          }, 1000); 
        } else {
          console.error("Erro na compra:", response.data); 
        }
      })
      .catch((error) => {
        console.error("Erro ao realizar a compra:", error); 
      });
    }

   // Função para aumentar o contador
   const handleIncrement = (index, item) => {
    setCountsPost(prevCountss => {
      const newCountss = [...prevCountss];
      newCountss[item.index] = newCountss[item.index] + 1; 
      return newCountss;
    });
     setCounts(prevCounts => {
       const newCounts = [...prevCounts];
       newCounts[index] = newCounts[index] + 1;
       return newCounts;
     });
   };

   const handleDecrement = (index, item) => {
    setCountsPost(prevCountss => {
      const newCountss = [...prevCountss];
      newCountss[item.index] = newCountss[item.index] - 1; 
      return newCountss;
    });
     setCounts(prevCounts => {
       const newCounts = [...prevCounts];
       newCounts[index] = newCounts[index] - 1;
       return newCounts;
     });
   };

  return (
    <ModalContainer>
      <ModalContent>
        <CloseButton onClick={onClose}>X</CloseButton>
        <Titulo>Produtos no carrinho:</Titulo>
        <ProdutosDoCarrinho>  
          {cartItems.map((item, index) => (
             <div key={index}>
             <ImagemProduto src={images[item.index]} />
             <QuantidadeDoItem>
                <Contador>{counts[index]}</Contador>
                <Button type="button" value="+" onClick={() => handleIncrement(index, item)} />
                <Button type="button" value="-" onClick={() => handleDecrement(index, item)} />
              </QuantidadeDoItem>
           </div>
            ))}     
        </ProdutosDoCarrinho>
        <FinalizaDiv>
        <ButtonCalcularTotal onClick={handleBuyPost}>Clique para calcular o valor total da compra!</ButtonCalcularTotal>
        <h2>Total a pagar: R$ {carrinhoDados.total}.</h2>
        </FinalizaDiv>
      </ModalContent>
    </ModalContainer>
  );
}