import React, { useState } from "react"; // Importe o React corretamente
import { Header } from './componentes/Header';
import { Modal } from "./componentes/Modal";
import { Main } from "./componentes/Main";


function App() {
  const [abrirCarrinho, setAbrirCarrinho] = useState(false);

  function abreModal() {
    setAbrirCarrinho(true)
  }
  function fechaModal(prop) {
    console.log(prop)
    setAbrirCarrinho(prop)
  }

  return (
    <>
      <Header onChartClick={abreModal}></Header>
      {abrirCarrinho && <Modal onCloseClick={fechaModal}></Modal>}
      <Main></Main>
      
    </>
    
  );
}

export default App;
