import React from 'react';
import Actor from './Movies.components/Actor.component';
import { act } from 'react';

export default function Cast({cast}) {
    if (!cast || cast.length === 0) {
        return <p>Não há informações disponíveis sobre o elenco.</p>;
    }
    
    return (
        <>
            <h2>Elenco</h2>
            <span>
                {cast && cast.map((actor, index) => {
                    return (
                        <Actor key={index} actor={actor} />
                    )
                    } 
                )}
            </span>    
        </>
    );
}

