import React from 'react'
import { Flex } from 'components'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import { HeaderLayout } from './Header'
import { SidebarLayout } from './Sidebar'

export type LayoutProps = {}

export const Layout: React.FC<LayoutProps> = () => {
    return (
        <LayoutStyled>
            <Flex direction="column">
                <HeaderLayout />
                <Flex style={{ flex: 1, minHeight: 0 }}>
                    <SidebarLayout />
                    <Outlet />
                </Flex>
            </Flex>
        </LayoutStyled>
    )
}

export const LayoutStyled = styled.div`
    height: 100vh;
    overflow: auto;
`
