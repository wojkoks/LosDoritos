import React from 'react';
import { CSection } from './CSection';
import './CContent.css';
import { CTutorTile } from './CTutorTile';

export const CContent = ()=>{
    return (
        <div id='mainContent'>
            <span>Zweryfikowani eksperci!</span>
                <CSection columns="2">
                    dalczego
                </CSection>
                {/* <CTutorList/> */}
            <span>Forum</span>
            <span>Newsletter</span>
        </div>
    )
}