import React, {useEffect,useState} from 'react';
import './CHeader.css';
import { CButton } from './CButton';

import logo from '../icons/Logoblack.png'
import notification from '../icons/Notification.png'
import message from '../icons/Message.png'
import profile from '../icons/Profile.png'

export const CHeader = ({})=>{
    const [showNavbar,setShowNavbar] = useState(false);
    var distanceFromTop;
    // const [circleAnimation,setCircleAnimation] = useState(true);
  
    window.onload = ()=>{
        distanceFromTop = document.querySelector('#main').getBoundingClientRect().height-83;
        }
        useEffect(()=>{
            const handleScroll = () =>{
            if(window.scrollY > distanceFromTop){
                setShowNavbar(true)
            }else{
                setShowNavbar(false)
            }
        };
        window.addEventListener('scroll',handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }},[])
        return (
            <div>
            <div className={showNavbar?'pasek show':'pasek'}>
                <div id='logo'>
                    <img src={logo}/>
                    <span>TuterUp</span>
                </div>
                <CButton text="Zaloguj się"/>
                {/* <div id='loginButton' onMouseEnter={()=>{setCircleAnimation(false);}}
                    onMouseLeave={()=>{setCircleAnimation(true);}}>
                    <div id='logText'>Zaloguj się</div>
                    <div id={circleAnimation===true?"circleAnime":"circleAnimeSlide"}></div> 
                </div>*/}
                {/* <div id='notifications'>
                    <div>
                        <img src={notification}></img>
                    </div>
                    <div>
                        <img src={message}></img>
                    </div>
                    <div>
                        <img src={profile}></img>
                    </div>
                </div> */}
            </div>
        </div>
    )
}
