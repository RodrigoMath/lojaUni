import React, { useState } from "react";
import styled from "styled-components";

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
  border-radius: 5px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  background-color: black;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;

export function Modal({ onCloseClick=null }) {
    function onClose(){
        if(onCloseClick){
            onCloseClick(false)
        }
    }
  return (
    <ModalContainer>
      <ModalContent>
        <CloseButton onClick={onClose}>×</CloseButton>
        <h2>Compra Finalizada!</h2>
        <p>Obrigado por sua compra.</p>
      </ModalContent>
    </ModalContainer>
  );
}