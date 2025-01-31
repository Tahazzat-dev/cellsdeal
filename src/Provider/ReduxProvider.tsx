
'use client'

import { Provider } from 'react-redux'

import { store } from '@/Redux/store/store'
import React from 'react'


function ReduxProvider({ children }: { children: React.ReactNode }) {
    return (
        <Provider store={store}>
            {children}
        </Provider>
        
    )
}

export default ReduxProvider