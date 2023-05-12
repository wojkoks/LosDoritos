import React from 'react';
import { CSection } from './CSection';
import './CContent.css';
import { CTutorTile } from './CTutorTile';
import { CList } from './CList';
import { CParagraf } from './CParagraf';

export const CContent = ()=>{
    return (
        <div id='mainContent'>
            <span id='sectionHeader'>Zweryfikowani eksperci!</span>
                <CSection columns="2">
                    <CList columns="2">
                        <CTutorTile rotation="0deg"/>
                        <CTutorTile rotation="-3deg"/>
                        <CTutorTile rotation="-2deg"/>
                        <CTutorTile rotation="-1.6deg"/>
                        <CTutorTile rotation="0deg"/>
                        <CTutorTile rotation="-0.86deg"/>
                    </CList>
                    <CList columns="1">
                        <CParagraf>
                            Siemaneczko ziomeczki,<br/>Elo
                        </CParagraf>
                        <CParagraf>
                            Siemaneczko ziomeczki,<br/>Elo
                        </CParagraf>
                        <CParagraf>
                            Siemaneczko ziomeczki,<br/>Elo
                        </CParagraf>
                    </CList>
                </CSection>
                {/* <CTutorList/> */}
            <span>Forum</span>
            <span>Newsletter</span>
        </div>
    )
}