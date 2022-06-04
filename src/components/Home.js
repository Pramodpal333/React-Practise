import React from 'react'
import styled from "styled-components"
import Section from "./Section"

function Home() {
  return (
      <>
    <Container>
    <Section
     modelName="Model S"
     desc="Order Online for Touchless Dilevery"
     backgroundImg='url("/images/model-s.jpg")'
     leftBtnText="Custom Order"
    rightBtnText="Existing Inventory"
/>
<Section
     modelName="Model Y"
     desc="Order Online for Touchless Dilevery"
     backgroundImg='url("/images/model-y.jpg")'
     leftBtnText="Custom Order"
    rightBtnText="Existing Inventory"
/>

<Section
     modelName="Model 3"
     desc="Order Online for Touchless Dilevery"
     backgroundImg='url("/images/model-3.jpg")'
     leftBtnText="Custom Order"
    rightBtnText="Existing Inventory"
/>

<Section
     modelName="Model X"
     desc="Order Online for Touchless Dilevery"
     backgroundImg='url("/images/model-x.jpg")'
     leftBtnText="Custom Order"
    rightBtnText="Existing Inventory"
/>
    </Container>
      </>
  )
}

export default Home

const Container = styled.div`
height:100vh;
`