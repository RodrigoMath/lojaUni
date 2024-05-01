import {Carrosel} from './Carrosel'
import styled from "styled-components";
import {motion} from 'framer-motion'

const Central= styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`


export function Main(){
    return(
        <Central> 
        <motion.h1 animate={{x: 200}} transition={{ duration: 1}}> Você diferente, velas diferentes </motion.h1>
        <Carrosel></Carrosel>
        <div> 
            <p>Aqui deve vir as outras imagens, que no futuro também vão vir do backend, abaixo de cada imagem deve ter o preço (vem do backend) e também a opção de adicionar ao carrinho</p>
            <p>Para estilizar, use os Styled Components, use o Header.js como exemplo.</p>
        </div>
        </Central>
    );
}