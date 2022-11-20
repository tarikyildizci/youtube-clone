import { Flex, FlexProps } from 'components'
import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

export const SidebarContainerStyled = styled.div`
    background-color: #0f0f0f; // C!!
    width: 240px;
    height: 100%;
    padding-right: 12px;
    overflow: auto;
`
export const SidebarSectionStyled = styled((props: FlexProps) => (
    <Flex {...props} />
))`
    padding: 12px;
    padding-right: 0;
    border-bottom: 1px solid rgb(255 255 255 / 10%); // C!!
`

export const SidebarItemStyled = styled(Link)`
    height: 40px;
    width: calc(100% - 12px);
    text-decoration: none;
    color: #f1f1f1; // C!!
`
export const SidebarButtonStyled = styled.div`
    height: 40px;
    width: calc(100% - 12px);
    color: #f1f1f1; // C!!
    cursor: pointer;
`

export const SidebarItemContentStyled = styled((props: FlexProps) => (
    <Flex {...props} />
))<{
    selected?: boolean
}>`
    height: 100%;
    border-radius: 10px;
    padding: 0 12px;
    &:hover {
        background-color: rgb(255 255 255 / 10%); //C!!
    }
    ${(props) =>
        props.selected &&
        css`
            background-color: rgb(255 255 255 / 10%); //C!!
        `}
`

export const SidebarCollapsibleItemStyled = styled((props: FlexProps) => (
    <Flex {...props} />
))``

export const SidebarDividerStyled = styled.div`
    width: 100%;
    height: 1px;
    background-color: rgb(255 255 255 / 10%); //C!!
    margin: 12px 0;
`
