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
    setAbrirCarrinho(prop)
  }

  

  const [cartItems, setCartItems] = useState([]);

  return (
    <>
      <Header onChartClick={abreModal} cartItems={cartItems}></Header>
      {abrirCarrinho && <Modal onCloseClick={fechaModal} cartItems={cartItems}></Modal>}
      
      <Main cartItems={cartItems} onItemChartAdd={setCartItems} />
    </>
    
  );
}

export default App;
