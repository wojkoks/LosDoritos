import React from 'react';
import './CColorSection.css';

export const CColorSection = ({children,bColor,tColor})=>{
    return(
        <div id='coloredSection' style={{backgroundColor:`${bColor}`,color:`${tColor}`}}>
            {children}
        </div>
    )
}