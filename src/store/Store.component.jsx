import React from "react";

const initialState = {   
    movies: [], 
    series: []
}
export const context = React.createContext(initialState);


export default function Store({children}) {
    const [state, setState] = React.useState(initialState);

    const update = (key, value) => {
        const newState = {...state, [key]: value};
        console.log(newState);
        setState({...newState});
    }

    return (
        <div>
            <context.Provider value={{
                movies: state.movies,
                series: state.series,
                setMovies: n => update("movies", n),
                setSeries: n => update("series", n)
            }}>
                {children}  
            </context.Provider>
        </div>
    );
}