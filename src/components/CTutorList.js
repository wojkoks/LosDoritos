import React from 'react';
import { CTutorTile } from './CTutorTile';
import './CTutorList.css';


export const CTutorList = ({children})=>{
    return (
        <div id='list'>
            {children}
        </div>
    )
}