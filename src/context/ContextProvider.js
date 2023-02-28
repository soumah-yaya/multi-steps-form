import { useReducer } from 'react'

import { PropsContext, DispatchContext } from './index.js';


import { initialState, reducer } from '../store/index.js';


export function ContextProvider({ children }) {

    const [state, dispatch] = useReducer(reducer, initialState)
    return (

        <PropsContext.Provider value={state}>
            <DispatchContext.Provider value={dispatch}>
                {children}
            </DispatchContext.Provider>
        </PropsContext.Provider>
    )
}