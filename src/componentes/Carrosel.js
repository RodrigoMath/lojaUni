import React, { useState, useEffect, useRef } from "react";
import {motion} from 'framer-motion'
import styled from "styled-components";
import vela1 from "../imagens/candly1.jpg"
import vela2 from "../imagens/candly2.jpg"
import vela3 from "../imagens/candly3.jpg"
import vela4 from "../imagens/candly7.jpg"
import vela5 from "../imagens/candly5.jpg"


const images = [
  vela1,
  vela2,
  vela3,
  vela4,
  vela5
];
const Carousel = styled.div`
cursor: grab;
overflow: hidden;
width: 100%;
max-width: 900px;
margin: 0 auto;
min-height: 30vh;
max-height: 60vh;
display: flex;

justify-content: center;
`

const CarroselContainer = styled.div`
display: flex;
`
const Itemimg = styled.img`
width: 100%;
height: 90%;
border-radius: 12px;
pointer-events: none;
`
const Item = styled.div`
 min-width: 200px;
 min-height: 400px;
 padding: 14px;
`


export function Carrosel(){
  const [width, setWidth] = useState(0)

  const carousel = useRef();
  useEffect( () => {
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
  }, [])

  return(
    <Carousel>
        <motion.div 
        drag="x"
        dragConstraints={{ right:0, left: -width}}
        initial={{ x: 100}}
        animate={{ x: 0}}
        transition={{ duration: 1}}
        >
          <CarroselContainer ref={carousel}>
            {
              images.map(image => (
                <Item>
                <motion.div whileTap={{ cursor : "grabbing"}} >
                  <Itemimg src={image} key={image} />
                </motion.div>
                </Item>
              ))
            }
          </CarroselContainer>    
        </motion.div>
    </Carousel>
  );
}

 
