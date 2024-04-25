import React from "react";

export default function Crew({crewMember, index}) {
    return (        
        <div key={index}>
            <h3>Equipe: {crewMember.name}</h3>
            <p>Trabalho: {crewMember.job}</p>
        </div>
    );
}
