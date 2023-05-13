import React, {useContext, useState} from 'react';

const SearchContext = React.createContext();

/**
 * A component that renders some children wrapped
 * in a CountContext.Provider so they can access the count context
 * @param children
 * @returns {JSX.Element}
 * @constructor
 */
export function SearchProvider({children}){
    const[search, setValue] = useState('')

    const value = {search, setValue}
    return(
        <SearchContext.Provider value={value}>
            {children}
        </SearchContext.Provider>
    );
}

/**
 * A function (custom hook) that returns the count context
 * the consumer of context must have access, in other words
 * it must be below a CountContext.Provider.
 * The function CountProvider.Consumer is a shorthand for it
 * @returns {unknown}
 */
export function useSearch() {
    const context = useContext(SearchContext)
    if (context === undefined) {
        throw new Error('useCount must be used within a SearchProvider')
    }
    return context
}