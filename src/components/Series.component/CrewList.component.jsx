import React from "react";
import Episode from "./Episode.component";
import Crew from "./Crew.component";


export default function CrewList({crew}) {    
    return (
        <div>
            {crew && crew.map((crewMember, index) => (
               <Crew crewMember={crewMember} key={index} />
            ))}          
        </div>
    );
}
