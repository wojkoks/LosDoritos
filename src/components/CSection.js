import React from 'react';
import './CSection.css';
import { CTutorList } from './CTutorList';
export const CSection = (props)=>{
    const newStyles = {
        backgroundColor:"red",
        color:"white",
        height:"300px",
        width:"300px",
        display:"grid",
        gridTemplateColumns:`repeat(${props.columns}, 1fr)`
        

    }
    return(
        <div id='grid' style={newStyles}>
        </div>
    )
}