import React, { ReactNode } from 'react'

function DashBoardLayout({ children }: { children: ReactNode }) {
    return (
        <div>
            {
                children
            }
        </div>
    )
}

export default DashBoardLayout