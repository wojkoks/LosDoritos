import React from 'react';
import './CHeader.css';
import logo from '../icons/Logoblack.png'
import notification from '../icons/Notification.png'
import message from '../icons/Message.png'
import profile from '../icons/Profile.png'

export const CHeader = ({})=>{
    return (
        <div>
            <div id='pasek'>
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
