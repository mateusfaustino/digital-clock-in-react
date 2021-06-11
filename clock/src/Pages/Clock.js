import React from 'react'
import styled from 'styled-components'
import DigitalClock from '../Components/Clock'

const Page = styled.div`
    height:100vh;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    background:#10101E;
`
export default function Clock() {
    return (
        <Page>
            <DigitalClock></DigitalClock>
        </Page>
    )
}
