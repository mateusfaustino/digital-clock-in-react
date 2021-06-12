import {Link} from 'react-router-dom';
import styled from 'styled-components';

const Brand = styled.h2`
    letter-spacing: 4px;
    font-weight: 200;
`
const StyledLogo= styled.div`
    &.active{
        a{
            h2{
                text-shadow:0 0 30px #2E94E3;
                color:#2E94E3;
                span{
                    &#spanM{
                        &:after{
                            opacity:100%;
                            content:"ateus";
                            transition: 2s;
                        }
                        
                    }
                    &#spanF{
                        transform: translateX(80px);
                        transition: 2s;
                        &:after{
                            content:"austino";
                            opacity:100%;
                            transition: 1s;
                        }
                    }
                }
            }
        }
    }
    a{
        text-decoration:none;
        color:#fff;
        h2{
            span#spanM{
                &:after{
                    position:absolute;
                    content:"ateus";
                    opacity:0;
                    transition: 2s;
                }
            }
            span#spanF{
                transform: translateX(0);
                transition: 2s;
                position:absolute;
                &:after{
                    content:"austino";
                    opacity:0;
                    transition: 2s;
                }
            }
            &:hover{
                
            }
            
        }
        svg{
            fill: #fff;
            height: 6vh;
            width: auto;
        }
    }
    @media screen and (min-width: 755px) {
        a{
            h2{
                text-shadow:0 0 30px #2E94E3;
                color:#2E94E3;
                span{
                    &#spanM{
                        &:after{
                            opacity:100%;
                            content:"ateus";
                        }
                        
                    }
                    &#spanF{
                        transform: translateX(80px);
                        &:after{
                            content:"austino";
                            opacity:100%;
                        }
                    }
                }
            }
        }
    }
`

const Logo = (props) => {
    return (
        <StyledLogo className={props.isActive? "active": ""}>
            <Link to='/'>
                <Brand><span id="spanM">M</span><span id="spanF">F</span></Brand>
            </Link>
        </StyledLogo>
    )
}

export default Logo
