import { Flex } from 'components'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import logo from 'assets/icons/logo.svg'

export type HeaderLeftProps = {}

export const HeaderLeft: React.FC<HeaderLeftProps> = () => {
    return (
        <Flex align="center">
            <MenuIcon htmlColor="white" />
            <img
                src={logo}
                style={{
                    padding: '18px 14px 18px 16px',
                    color: '#fff',
                    flex: 'none',
                }}
            />
            {/* C!! */}
        </Flex>
    )
}
