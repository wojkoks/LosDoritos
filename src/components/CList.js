import React from 'react';
import './CList.css';


export const CList = ({children,columns,fraction})=>{
    const newStyles = {
        display: 'grid',
        columnGap: '30px',
        rowGap: '30px',
        gridTemplateColumns: `${columns}`

    }
    return (
        <div id='list' style={newStyles}>
            {children}
        </div>
    )
}