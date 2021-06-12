import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';


const Ul = styled.ul`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 45px 40px 8px;
    flex-direction: column;
    background:#10101E;
    position: fixed;
    top: 10vh;
    left: 0;
    width: 100%;
    height: 90vh;
    z-index: 0;
    border-top: 1px solid #fff;
    transform: translateX(${props => props.active ? '0' : '-100' }vw);
    transition: 1s;

    li{
        list-style:none;
        &:not(:last-child){
            border-bottom: 1px solid #fff;
        }
        a{
            display: flex;
            color: #fff;
            font-family: sans-serif;
            font-weight: 700;
            text-decoration:none;
        }
        
    }

    @media screen and (min-width: 755px) {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: row;
            background-color: transparent;
            position:initial;
            width: auto;
            transform: none;
        li{
            border-bottom: none;
            a{
                display: flex;
                color: #fff;
                margin-right: 16px;
                font-family: sans-serif;
                font-weight: 600;
            }
        }
    }
    
`

const Menu = (props) => {
    
 return(
    <Ul  active={props.isActive? true: false} >
            <li onClick={props.setIsActive}><Link  to='/about' >Código Fonte</Link></li>
            <li onClick={props.setIsActive}><Link  to='/contact' >Github</Link></li>
            <li onClick={props.setIsActive}><Link  to='/buy' >Linkedin</Link></li>
    </Ul>
)
    
    
}

export default Menu
