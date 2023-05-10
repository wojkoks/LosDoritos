import React from 'react';
import './CClassTiles.css';

export const CClassTiles = ()=>{
    return (
        <div>
            <div id='tiles'>
                <div className='tile' id='student'><span>Uczeń</span></div>
                <div className='tile' id='tutor'><span>Korepetytor</span></div>
            </div>
        </div>
    )
}