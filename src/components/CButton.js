import React, {useState, useEffect} from 'react';
import './CButton.css';

export const CButton = ({text})=>{
    const [circleAnimation,setCircleAnimation] = useState(true);
    return(
        <div id='CButton' onMouseEnter={()=>{setCircleAnimation(false);}}
                             onMouseLeave={()=>{setCircleAnimation(true);}}>
            {text}
            <div id='logText'>{text}</div>
            <div id={circleAnimation===true?"circleAnime":"circleAnimeSlide"}></div>
        </div>
    )
}