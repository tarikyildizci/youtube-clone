import React, { PropsWithChildren, useEffect, useState } from 'react'
import {
    SidebarCollapsibleItemStyled,
    SidebarDividerStyled,
} from './Sidebar.style'
import { SidebarItem } from './SidebarItem'

export type SidebarCollapsibleItemProps = {
    children?: JSX.Element[]
    onStateChange?: (state: boolean) => void
}

type SidebarCollapsibleComponent = React.FC<
    PropsWithChildren<SidebarCollapsibleItemProps>
> & {
    Hidden: React.FC<React.PropsWithChildren<unknown>>
    Shown: React.FC<React.PropsWithChildren<unknown>>
    BorderTop: React.FC<React.PropsWithChildren<unknown>>
}

export const SidebarCollapsibleItem: SidebarCollapsibleComponent = ({
    children,
    onStateChange,
}) => {
    const hidden = children?.find(
        (child) => child.type.displayName === 'Hidden'
    )
    const shown = children?.find((child) => child.type.displayName === 'Shown')
    const borderTop = children?.find(
        (child) => child.type.displayName === 'BorderTop'
    )

    const [isCollapsed, setIsCollapsed] = useState(true)

    useEffect(() => {
        onStateChange && onStateChange(isCollapsed)
    }, [isCollapsed])

    return (
        <SidebarCollapsibleItemStyled direction="column">
            {borderTop && <SidebarDividerStyled />}
            {shown?.props.children}
            {!isCollapsed && hidden?.props.children}
            <SidebarItem
                name={isCollapsed ? 'Show more' : 'Show less'}
                onClick={() => setIsCollapsed((c) => !c)}
            />
        </SidebarCollapsibleItemStyled>
    )
}

const Hidden: React.FC<React.PropsWithChildren<{}>> = () => <></>
const Shown: React.FC<React.PropsWithChildren<{}>> = () => <></>
const BorderTop: React.FC<React.PropsWithChildren<{}>> = () => <></>

Hidden.displayName = 'Hidden'
Shown.displayName = 'Shown'
BorderTop.displayName = 'BorderTop'

SidebarCollapsibleItem.Hidden = Hidden
SidebarCollapsibleItem.Shown = Shown
SidebarCollapsibleItem.BorderTop = BorderTop
