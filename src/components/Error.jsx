import React from 'react'

export const Error = ({children}) => {
    return (

        <div className="bg-red-700 text-center p-4 rounded text-white mb-2">
            {children}
        </div>

    )
}
