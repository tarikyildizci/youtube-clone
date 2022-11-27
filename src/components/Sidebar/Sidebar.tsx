import { Flex } from 'components/Layout/Flex'
import {
    SidebarItem,
    SidebarItemBaseProps,
} from 'components/Sidebar/SidebarItem'
import React, { PropsWithChildren } from 'react'
import { WithId } from 'utils/types'
import {
    SidebarContainerStyled,
    SidebarSectionHeaderStyled,
    SidebarSectionStyled,
} from './Sidebar.style'

export type SidebarSectionProps = {
    header?: string
}

export type SidebarProps = {}

export const SidebarSection: React.FC<
    PropsWithChildren<SidebarSectionProps>
> = ({ children, header }) => (
    <SidebarSectionStyled direction="column" wrap>
        {header && (
            <SidebarSectionHeaderStyled>{header}</SidebarSectionHeaderStyled>
        )}
        {children}
    </SidebarSectionStyled>
)
export const Sidebar: React.FC<PropsWithChildren> = ({ children }) => (
    <SidebarContainerStyled>{children}</SidebarContainerStyled>
)
