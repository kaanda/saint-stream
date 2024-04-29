import React from 'react';
import Actor from './Movies.components/Actor.component';

export default function Cast({cast}) {
    
    return (
        <>
            <h2>Elenco</h2>
            <span>{cast && cast.map((actor, index) => {
                return (
                    <Actor key={index} actor={actor} />
                )
            } )}</span>    
        </>
    );
}

