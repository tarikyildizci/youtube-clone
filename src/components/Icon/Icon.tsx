import React from 'react'
import ChevronDown from 'assets/icons/chevron-down.svg'

export type IconProps = {}

export const Icon: React.FC<IconProps> = () => {
    return (
        <div style={{ height: 24, width: 24 }}>
            <ChevronDown />
        </div>
    )
}
