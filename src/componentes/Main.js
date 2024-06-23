import { Carrosel } from './Carrosel'
import styled from "styled-components";
import { motion } from 'framer-motion'

import adicionar from "../imagens/adicionar.png"
import vela1 from "../imagens/candly1.jpg"
import vela2 from "../imagens/candly2.jpg"
import vela3 from "../imagens/candly3.jpg"
import vela4 from "../imagens/candly7.jpg"
import vela5 from "../imagens/candly5.jpg"
import vela6 from "../imagens/candly6.jpg"
import vela14 from "../imagens/candly14.jpg"
import vela13 from "../imagens/candly13.jpg"
import vela11 from "../imagens/candly11.jpg"
import vela10 from "../imagens/candly10.jpg"
import vela9 from "../imagens/candly9.jpg"



const images = [
    vela1,
    vela2,
    vela3,
];

const allProductImages = [
    vela14,
    vela13,
    vela11,
    vela10,
    vela9
]
const Central = styled.div`
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
    width: 30%;
    margin-left: 15px;
    margin-bottom: 10px;
    display: center;
 `
const ImagemDoItem = styled.img`
    width: auto;
    height: auto;
    border-radius: 20px;
    border-color: black;
`
const ImagensFinais= styled.div`
    display: flex;
    flex-direction: row;
`
const ImagemDoItemFinal = styled.img`
    margin-top: 50px;
    width: 20%;
    height: 100%;
    border-radius: 20px;
    border-color: black;
`
const ImagemAdicionar = styled.img`
    width: 50%;
    height: 50%;
    cursor: pointer;
    align-items: center;
    
`

export function Main({ cartItems, onItemChartAdd }) {
    function constListItens(index) {
        const itemIndex = cartItems.findIndex(item => item.index === index);
        if (itemIndex > -1) {

        } else {
            const newCart = [...cartItems, { index }];
            onItemChartAdd(newCart);
        }
        console.log(cartItems);

        
        console.log(index)

    }

    return (
        <Central>
            <Titulo>
                <motion.h1 animate={{ x: [100, 0] }} transition={{ duration: 1 }} style={{ textAlign: "center" }}> Velas únicas combinam com </motion.h1>
                <Subtitulo>Pessoas únicas</Subtitulo>
            </Titulo>
            <Carrosel></Carrosel>
            <h1> Itens do catálogo:</h1>
            <ItensVenda>
                {
                    images.map(
                        (image, index) => (
                            <ItemVenda>
                                <ImagemDoItem src={image} key={index}></ImagemDoItem>
                                <h2>R$ {10 + index*5} </h2>
                                <ImagemAdicionar src={adicionar} onClick={() => constListItens(index)}></ImagemAdicionar>
                            </ItemVenda>
                        )
                    )
                }
            </ItensVenda>
            <h1>Em breve:</h1>
            <ItensVenda>
                {
                    allProductImages.map(
                        image => (
                            <ItemVenda>
                                <ImagemDoItem src={image} key={image}></ImagemDoItem>
                            </ItemVenda>
                        )
                    )
                }
            </ItensVenda>
            <Titulo>Gostou? Fique por dentro de nossas novidades:</Titulo>
            <ItensVenda>
                <ImagensFinais>
                    <ImagemDoItemFinal src={vela6}/>
                </ImagensFinais>
            </ItensVenda>
        </Central>
    );
}