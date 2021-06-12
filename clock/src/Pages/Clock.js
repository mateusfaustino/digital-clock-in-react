import React from 'react'
import styled from 'styled-components'
import DigitalClock from '../Components/Clock'
import Navbar from '../Components/Header/index'


const Page = styled.div`
    height:100vh;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    background:#10101E;
`
const Title = styled.h1`
color:#fff;
padding-bottom:32px;
`

export default function Clock() {
    return (
        <Page>
            <Navbar/>   
            <Title>Digital Clock</Title>
            <DigitalClock/>
        </Page>
    )
}
