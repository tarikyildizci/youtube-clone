import styled from 'styled-components'

export type GridProps = {
    columns?: string
    rows?: string
    columnGap?: string | number
    rowGap?: string | number
    wrap?: boolean
    children?: any
}

export const Grid = styled.div<GridProps>`
    display: grid;
    height: ${(props) => (props.wrap ? 'auto' : '100%')};
    grid-template-columns: ${(props) => props.columns};
    grid-template-rows: ${(props) => props.rows};
    column-gap: ${(props) => props.columnGap};
    row-gap: ${(props) => props.rowGap};
    /* align-items: stretch;
    justify-items: stretch; */
`
