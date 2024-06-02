import {Carrosel} from './Carrosel'
import styled from "styled-components";
import {motion} from 'framer-motion'

import vela1 from "../imagens/candly1.jpg"
import vela2 from "../imagens/candly2.jpg"
import vela3 from "../imagens/candly3.jpg"
import vela4 from "../imagens/candly7.jpg"
import vela5 from "../imagens/candly5.jpg"


const images = [
  vela1,
  vela2,
  vela3,
];

const Central= styled.div`
    width: 100%;
    height: 100%;
    min-height: 200vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 20px;
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
const Subtitulo = styled.h2`
    text-align: center; 
`
const ItensVenda = styled.div`
    display: flex;
    flex-direction: row;
    width: 90%;
    gap: 15 px;
    height: auto;
    flex-wrap: wrap;
`
const ItemVenda = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
`
const ImagemDoItem = styled.img`
    width: auto;
    height: auto;
    border-radius: 20 px;
`

export function Main(){
    return(
        <Central>
        <Titulo>
            <motion.h1 animate={{ x: [100, 0] }} transition={{ duration: 1}}  style={{ textAlign: "center" }}> Velas únicas combinam com </motion.h1>
            <Subtitulo>Pessoas únicas</Subtitulo>
        </Titulo>
        <Carrosel></Carrosel>
        <h1> HAHAHAHHA</h1>
        <ItensVenda>
        {
            images.map(
                image => (
                    <ItemVenda>
                        <ImagemDoItem src={image} key={image}></ImagemDoItem>
                        <p> oi</p>
                    </ItemVenda>
                )
            )
        }
        </ItensVenda>
        </Central>
    );
}