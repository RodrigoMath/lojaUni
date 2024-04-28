import React from 'react'; 
import styled from 'styled-components';
import carrinho from '../imagens/carrinho-de-compras.png';
import velas from '../imagens/LogoVelas.jpg'

const Head = styled.header`
    background-color: beige; /* Cor de fundo */
    border-bottom: 2px solid darkslategray; /* Borda inferior escura */
    padding: 10px; /* Espaçamento interno */
    display: flex;
    align-items: center;
    height: 50px;
    display: flex;
    justify-content: space-between;
`
const DivFlexColumn = styled.div`
    display: flex;
    flex-direction: column;
    width: 30px;
    height: 70px;
`
const StyledImg = styled.img`
    width: 20 px;
    cursor: pointer;
`;
const StyledCenterText = styled.img`
    
`
const StyledText = styled.span`
    font-size: 10px; 
    color: black;
`;
const StyledOpenPhrase = styled.div`
font-size: 14px; 
color: black;
`

export function Header({ onChartClick = null }) {
    const tornaTrue = () => {
        if (onChartClick) {
            onChartClick(true);
        }
    };

    return (
        <Head>
            <StyledOpenPhrase>Os melhores Produtos do mercado de aromas</StyledOpenPhrase>
            <StyledCenterText src={carrinho}></StyledCenterText>
            <DivFlexColumn>
                <StyledImg alt='carrinho de compras' src={carrinho} onClick={tornaTrue}></StyledImg>
                <StyledText>Veja suas compras</StyledText>
            </DivFlexColumn>
        </Head>
            
       
    );
}
