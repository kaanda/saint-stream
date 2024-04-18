import React from "react";

export default function Button({ button }) {
    
    const handelClick = () => {
        button.action(button.link);
    }

    return (
        <button className={button.className} onClick={handelClick}>
            <img src={button.icon} alt={button.alt} />
            {button.text}
        </button>
    );
}


