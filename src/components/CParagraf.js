import React, {useState} from 'react';
import './CParagraf.css';


export const CParagraf = ({children,title})=>{

    const [showTitle,updateTitle] = useState(Boolean(title))

    return(
        <div id='paragraf'>
            <div id={showTitle?'titleShow':'titleHide'}>{title}</div>
            {children}
        </div>
    )
}