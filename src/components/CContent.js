import React from 'react';
import { CSection } from './CSection';
import './CContent.css';
import { CTutorTile } from './CTutorTile';
import { CTutorList } from './CTutorList';

export const CContent = ()=>{
    return (
        <div id='mainContent'>
            <span id='sectionHeader'>Zweryfikowani eksperci!</span>
                <CSection columns="2">
                    <CTutorList>
                        <CTutorTile rotation="0deg"/>
                        <CTutorTile rotation="-3deg"/>
                        <CTutorTile rotation="-2deg"/>
                        <CTutorTile rotation="-1.6deg"/>
                    </CTutorList>
                </CSection>
                {/* <CTutorList/> */}
            <span>Forum</span>
            <span>Newsletter</span>
        </div>
    )
}