import React from 'react';
import './CClassTiles.css';

export const CClassTiles = ()=>{
    return (
        <div>
            <div id='tiles'>
                <div className='tile' id='main'><span><a style={{fontSize:"7rem"}}>Hej!</a><br></br> Jesteś uczniem <br/> lub korepetytorem?</span>
                <div id='circle'></div>
                </div>
            </div>
        </div>
    )
}