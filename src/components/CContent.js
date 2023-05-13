import React from 'react';
import { CSection } from './CSection';
import './CContent.css';
import { CTutorTile } from './CTutorTile';
import { CList } from './CList';
import { CParagraf } from './CParagraf';
import { CButton } from './CButton';
import { CColorSection } from './CColorSection';

export const CContent = ()=>{
    return (
        <div id='mainContent'>
            <span>Zweryfikowani eksperci!</span>
                <CSection columns="1fr 2fr">  
                    <CList columns="1fr 1fr">
                        <CTutorTile rotation="0deg"/>
                        <CTutorTile rotation="-3deg"/>
                        <CTutorTile rotation="-2deg"/>
                        <CTutorTile rotation="-1.6deg"/>
                        <CTutorTile rotation="0deg"/>
                        <CTutorTile rotation="-0.86deg"/>
                    </CList>
                    <CList columns="1fr">
                        <CParagraf>
                        Tutersi, to nasi eksperci z każdej dziedziny!
                        </CParagraf>
                        <CParagraf>
                        Tutaj każdy jest sobą
                        </CParagraf>
                        <CParagraf>
                        Każdy może należeć do naszej drużyny, by pomagać innym
                        </CParagraf>
                        <CButton text="Dowiedz się więcej"/>
                    </CList>
                </CSection>
                <CColorSection bColor="#E2C447" tColor="#FFFFFF">
                <span>Co to TuterUp?</span>
                Tuter pozwala uczniom i studentom na niemal<br/> natychmiastowe otrzymanie pomocy od naszych ekspertów
                <CSection columns="1fr 1fr 1fr 1fr">
                <CTutorTile rotation="0deg"/>
                <CTutorTile rotation="0deg"/>
                <CTutorTile rotation="0deg"/>
                <CTutorTile rotation="0deg"/>
                </CSection>
                   
                </CColorSection>
                {/* <CTutorList/> */}
            <span>Dlaczego tuter?</span>
            <span>Jak zacząć?</span>
        </div>
    )
}