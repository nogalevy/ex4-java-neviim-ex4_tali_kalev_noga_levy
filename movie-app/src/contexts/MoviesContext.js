import React, {useContext, useState} from 'react';

const MoviesContext = React.createContext();

/**
 * A component that renders some children wrapped
 * in a CountContext.Provider so they can access the count context
 * @param children
 * @returns {JSX.Element}
 * @constructor
 */
export function MoviesProvider({children}){
    const [moviesData, setMoviesData] = useState({error:null,isPending: true, data:[]})

    const value = {moviesData, setMoviesData}
    return(
        <MoviesContext.Provider value={value}>
            {children}
        </MoviesContext.Provider>
    );
}

/**
 * A function (custom hook) that returns the context
 * the consumer of context must have access, in other words
 * it must be below a CountContext.Provider.
 * The function CountProvider.Consumer is a shorthand for it
 * @returns {unknown}
 */
export function useMoviesContext() {
    const context = useContext(MoviesContext)
    if (context === undefined) {
        throw new Error('useCount must be used within a SearchProvider')
    }
    return context
}