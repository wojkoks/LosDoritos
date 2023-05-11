import React from 'react';
import './CSection.css';
import { CTutorList } from './CTutorList';
export const CSection = ({children,columns})=>{
    const newStyles = {
        color:"white",
        height:"auto",
        width:"100%",
        display:"grid",
        gridTemplateColumns:`repeat(${columns})`
    }
    return(
        <div id='grid' style={newStyles}>
            {children}
        </div>
    )
}