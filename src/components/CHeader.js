import React, {useEffect,useState} from 'react';
import './CHeader.css';

import logo from '../icons/Logoblack.png'
import notification from '../icons/Notification.png'
import message from '../icons/Message.png'
import profile from '../icons/Profile.png'

export const CHeader = ({})=>{
    const [showNavbar,setShowNavbar] = useState(false);
    var distanceFromTop;
    
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
                    <span>Ćwikła</span>
                </div>
                <div id='searchBar'><img></img></div>
                <div id='notifications'>
                    <div>
                        <img src={notification}></img>
                    </div>
                    <div>
                        <img src={message}></img>
                    </div>
                    <div>
                        <img src={profile}></img>
                    </div>
                </div>
            </div>
        </div>
    )
}
