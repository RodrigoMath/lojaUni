import Carousel from "./Carrosel";
import styled from "styled-components";

const Central= styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export function Main(){
    return(
        <Central>
        <Carousel></Carousel>
        <div> 
            <p>Aqui deve vir as outras imagens, que no futuro também vão vir do backend, abaixo de cada imagem deve ter o preço (vem do backend) e também a opção de adicionar ao carrinho</p>
            <p>Para estilizar, use os Styled Components, use o Header.js como exemplo.</p>
        </div>
        </Central>
    );
}