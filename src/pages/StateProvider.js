import React, {createContext, useContext, useReducer} from 'react'

// preparing for data layer
export const StateContext = createContext();


export const StateProvider = ({reducer, initialState, children}) =>(
    <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
    </StateContext.Provider>
)



// hook which allows us to pull info from data layer

export const useStateValue = () => useContext(StateContext);


// here children is <App/>