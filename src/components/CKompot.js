import React from 'react';
import './CKompot.css'

export const CKompot = ({children,path,title,size})=>{
    return(
        <div id='kompot'>
            <img src={path} style={{height:`${size}`,width:`${size}`}}></img>
            <p id='pTitle'>{title}</p>
            {children}
        </div>
    )
}