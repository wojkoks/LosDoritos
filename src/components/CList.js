import React from 'react';
import './CList.css';


export const CList = ({children,columns})=>{
    const newStyles = {
        display: 'grid',
        columnGap: '70px',
        rowGap: '30px',
        gridTemplateColumns: `repeat(${columns}, 1fr)`

    }
    return (
        <div id='list' style={newStyles}>
            {children}
        </div>
    )
}