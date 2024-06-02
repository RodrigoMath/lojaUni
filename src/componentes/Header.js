import React from 'react'; 
import styled from 'styled-components';
import carrinho from '../imagens/sacolas-de-compras.png';

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
    font-family: 'Brush Script MT', cursive; 
    font-size: 24px;
    color: #333;
    text-shadow: 0 0 1px black; 
`

export function Header({ onChartClick = null }) {
    const tornaTrue = () => {
        if (onChartClick) {
            onChartClick(true);
        }
    };

    return (
        <Head>
            <StyledCenterText></StyledCenterText>
            <StyledOpenPhrase>Os melhores Produtos do mercado de aromas</StyledOpenPhrase>
            <DivFlexColumn>
                <StyledImg alt='carrinho de compras' src={carrinho} onClick={tornaTrue}></StyledImg>
                <StyledText>Veja suas compras</StyledText>
            </DivFlexColumn>
        </Head>
            
       
    );
}
