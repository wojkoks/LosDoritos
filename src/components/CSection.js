import React from 'react';
import './CSection.css';
export const CSection = ({children,columns})=>{
    const newStyles = {
        color:"white",
        height:"auto",
        width:"100%",
        display:"grid",
        gridTemplateColumns:`${columns}`
    }
    return(
        <div id='grid' style={newStyles}>
            {children}
        </div>
    )
}