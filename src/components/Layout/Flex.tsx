import styled from 'styled-components'

export type FlexProps = {
    direction?: 'column' | 'row' | 'column-reverse' | 'row-reverse'
    justify?:
        | 'center'
        | 'left'
        | 'right'
        | 'space-around'
        | 'space-between'
        | 'space-evenly'
    align?: 'center' | 'flex-start' | 'flex-end'
    gap?: string
    wrap?: boolean
    children?: any
}

export const Flex = styled.div<FlexProps>`
    display: flex;
    flex-direction: ${(props) => props.direction};
    justify-content: ${(props) => props.justify};
    align-items: ${(props) => props.align};
    height: ${(props) => (props.wrap ? 'auto' : '100%')};
    gap: ${(props) => props.gap};
`
