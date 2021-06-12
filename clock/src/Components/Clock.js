import React, {useState } from 'react'
import styled from 'styled-components'


const DateTime = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    color: #fff;
    font-family: "Segoe UI", sans-serif;
    width:100%;
    max-width:340px;
    padding:15px 10px;
    border:3px solid #2E94E3;
    border-radius:5px;
    -webkit-box-reflect: below 1px linear-gradient(transparent, rgba(255,255,255,0.1));
    transition:0.5s;
    transition-property:background, box-shadow ;
    background:rgba(0,0,0, 0.4);
    &:hover{
        background:#2E94E3;
        box-shadow: 0 0 30px #2E94E3;
    }
    .zero:before{
        content:"0";
    }
    @media(max-width: 400px) {
        max-width:80vw;
    }
    `; 
    const MyDate = styled.div`
        font-size:20px;
        font-weight:600;
        letter-spacing:3px;
        
        span{
            &:not(:last-child){
                margin-right: 6px;
            }
            &#date1,&#date2{
                &:after{
                    content:" de";
                }
            }
        }
    @media(max-width: 400px) {
        font-size:14px;
    }
    `; 
    const Time = styled.div`
        display:flex;
        align-items:center;
        justify-content:center;    
        font-size:60px;
        span{
            margin:0px 6px;
            font-weight:600;
            letter-spacing:3px;
            text-align:center;
            
            &:not(:last-child){
                margin-right: ${props => props.blink===":"? "0":"17px"};
                &:after{
                    content:"${props => props.blink}";
                     
                }
            }
        }
        @media(max-width: 400px) {
            font-size:50px;
            span{
                &:not(:last-child){
                    margin-right: ${props => props.blink===":"? "0":"15px"};
                }
            }
        }
        
    `; 
export default function DigitalClock() {

    const [currentTime, setCurrentTime] = useState(new Date())
    const timeContent =[currentTime.getHours(),currentTime.getMinutes(),currentTime.getSeconds()]
    const weekDays = ["Dom,","Seg,","Ter,", "Qua,", "Qui,", "Sex,", "Sab,"]
    const months = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"]
    const dateContent =[weekDays[currentTime.getDay()],currentTime.getDate(),months[currentTime.getMonth()],currentTime.getFullYear()]
    setInterval(() => {
        setCurrentTime(new Date());
    }, 500);

    return (
        <DateTime>
            <MyDate>
                {dateContent.map((content, index)=>
                    <span id={"date"+index} className={content<10? "zero": ""}>{content}</span>)
                }
            </MyDate>
            <Time blink={currentTime.getUTCMilliseconds()>=500?"":":"} >
                {timeContent.map((content,index)=>
                    <span className={content<10? "zero": ""}>{content}</span>
                    )
                }
            </Time>
        </DateTime>
    )
}
