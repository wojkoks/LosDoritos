import React from 'react';
import './CTutorTile.css';


export const CTutorTile = ({rotation})=>{
    return(
        <div id='rect' style={{transform:`rotate(${rotation})`}}>
                <img src='' alt='nimo'></img>
        </div>
    )
}