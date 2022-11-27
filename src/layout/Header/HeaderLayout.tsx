import { Header } from 'components'
import React from 'react'
import { HeaderLeft } from './HeaderLeft'

export type HeaderLayoutProps = {}

export const HeaderLayout: React.FC<HeaderLayoutProps> = () => {
    return (
        <Header>
            <HeaderLeft />
        </Header>
    )
}
