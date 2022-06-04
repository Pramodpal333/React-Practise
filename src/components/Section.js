import React from 'react'
import styled from "styled-components"

function Section({modelName,desc,leftBtnText,rightBtnText,backgroundImg}) {
  return (
    <div >
    <Wrap background={backgroundImg} >
      <ItemText >
          <h1>{modelName}</h1>
          <p>{desc}</p>
      </ItemText>

<Buttons>
      <ButtonGroup>
          <LeftButton>
          {leftBtnText}
          </LeftButton>
          <RIghtButton>
          {rightBtnText}
          </RIghtButton>
      </ButtonGroup>

      <DownArrow src="/images/down-arrow.svg"/>

      </Buttons>
    </Wrap> </div>
  )
}

export default Section

const Wrap = styled.div`
width: 100vw;
height:100vh;
background-size: cover;
background-position: center;
background-repeat: no-repeat;
// background:${props => props.background};
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;

background-image:${props => props.background};;
`

const ItemText = styled.div`
text-align:center;
padding:15vh;
`


const ButtonGroup = styled.div`
display:flex;
margin-bottom:20px;
@media (max-width: 768px){
  flex-direction:column;
  margin-bottom:10px;
}
`

const LeftButton = styled.div`
background: rgba(23, 26, 32, 0.8);
color:white;
 margin: 5px;
height:40px;
border-radius: 100px;
width: 256px;
display:flex;
justify-content:center;
align-items:center;
opacity:0.85;
text-transform:uppercase;
font-size:13px;
cursor:pointer;
`

const RIghtButton = styled(LeftButton)`
background: white;
color:black;
opacity:0.65;
`

const DownArrow = styled.img`
height:40px;
margin-top:20px;
animation: animateDown infinite 1.5s;
`

const Buttons = styled.div`
display:flex;
flex-direction:column;
margin-bottom:20px;
`