import React, { PropsWithChildren } from 'react'
import { HeaderStyled } from './Header.style'

export type HeaderProps = {}

export const Header: React.FC<PropsWithChildren<HeaderProps>> = ({
    children,
}) => {
    return (
        <HeaderStyled align="center" justify="space-between">
            {children}
        </HeaderStyled>
    )
}
