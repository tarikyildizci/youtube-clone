import React from 'react'
import { OverridableComponent } from '@mui/material/OverridableComponent'
import { SvgIconTypeMap } from '@mui/material/SvgIcon/SvgIcon'
import {
    SidebarButtonStyled,
    SidebarItemContentStyled,
    SidebarItemStyled,
} from './Sidebar.style'

export type SidebarItemBaseProps = {
    name: string
    selected?: boolean
    Icon?: OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & {
        muiName: string
    }
}

export type SidebarLinkItemProps = SidebarItemBaseProps & { to: string }
export type SidebarButtonItemProps = SidebarItemBaseProps & {
    onClick: () => void
}

export type SidebarItemProps = SidebarLinkItemProps | SidebarButtonItemProps

export const SidebarItem: React.FC<SidebarItemProps> = (props) => {
    const { name, selected, Icon } = props

    if ('to' in props) {
        return (
            <SidebarItemStyled to={props.to}>
                <SidebarContent {...props} />
            </SidebarItemStyled>
        )
    }
    return (
        <SidebarButtonStyled onClick={props.onClick}>
            <SidebarContent {...props} />
        </SidebarButtonStyled>
    )
}

const SidebarContent: React.FC<SidebarItemBaseProps> = ({
    name,
    selected,
    Icon,
}) => (
    <SidebarItemContentStyled selected={selected} align="center" gap={'24px'}>
        {Icon && <Icon />}
        <div>{name}</div>
    </SidebarItemContentStyled>
)
