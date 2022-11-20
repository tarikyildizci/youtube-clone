import {
    Sidebar,
    Flex,
    SidebarProps,
    SidebarSection,
    SidebarItem,
    SidebarCollapsibleItem,
} from 'components'
import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import styled from 'styled-components'
import HomeIcon from '@mui/icons-material/Home'

export type LayoutProps = {}

// const sidebarData: SidebarProps['sections'] = [
//     {
//         id: '',
//         items: [
//             {
//                 id: '',
//                 name: 'Home',
//                 to: '',
//                 selected: true,
//                 Icon: HomeIcon,
//             },
//             {
//                 id: '',
//                 name: 'Shorts',
//                 to: '',
//             },
//             {
//                 id: '',
//                 name: 'Subscriptions',
//                 to: '',
//             },
//             {
//                 id: '',
//                 separator: true,
//             },
//             {
//                 id: '',
//                 name: 'Library',
//                 to: '',
//             },
//             {
//                 id: '',
//                 name: 'History',
//                 to: '',
//             },
//             {
//                 id: '',
//                 name: 'Your Videos',
//                 to: '',
//             },
//             {
//                 id: '',
//                 name: 'Watch Later',
//                 to: '',
//             },
//             {
//                 id: '',
//                 name: 'Your Clips',
//                 to: '',
//             },
//         ],
//     },
// ]

export const Layout: React.FC<LayoutProps> = () => {
    return (
        <LayoutStyled>
            <Flex direction="column">
                <div
                    style={{
                        width: '100vw',
                        height: 60,
                        backgroundColor: '#0f0f0f',
                        color: 'white',
                    }}
                >
                    HEADER
                </div>
                <Flex>
                    <Sidebar>
                        <SidebarSection>
                            <SidebarItem
                                name="Home"
                                to=""
                                selected
                                Icon={HomeIcon}
                            />
                            <SidebarItem name="Shorts" to="" Icon={HomeIcon} />
                            <SidebarItem
                                name="Subscriptions"
                                to=""
                                Icon={HomeIcon}
                            />
                            <SidebarCollapsibleItem>
                                <SidebarCollapsibleItem.BorderTop />
                                <SidebarCollapsibleItem.Shown>
                                    <SidebarItem
                                        name="Shorts"
                                        to=""
                                        Icon={HomeIcon}
                                    />
                                    <SidebarItem
                                        name="Shorts"
                                        to=""
                                        Icon={HomeIcon}
                                    />
                                    <SidebarItem
                                        name="Shorts"
                                        to=""
                                        Icon={HomeIcon}
                                    />
                                </SidebarCollapsibleItem.Shown>
                                <SidebarCollapsibleItem.Hidden>
                                    <SidebarItem
                                        name="Hidden"
                                        to=""
                                        Icon={HomeIcon}
                                    />
                                    <SidebarItem
                                        name="Hidden"
                                        to=""
                                        Icon={HomeIcon}
                                    />
                                    <SidebarItem
                                        name="Hidden"
                                        to=""
                                        Icon={HomeIcon}
                                    />
                                    <SidebarItem
                                        name="Hidden"
                                        to=""
                                        Icon={HomeIcon}
                                    />
                                </SidebarCollapsibleItem.Hidden>
                            </SidebarCollapsibleItem>
                        </SidebarSection>
                        <SidebarSection header="Subscriptions">
                            <SidebarCollapsibleItem>
                                <SidebarCollapsibleItem.Shown>
                                    <SidebarItem
                                        name="Hidden"
                                        to=""
                                        Icon={HomeIcon}
                                    />
                                    <SidebarItem
                                        name="Hidden"
                                        to=""
                                        Icon={HomeIcon}
                                    />
                                    <SidebarItem
                                        name="Hidden"
                                        to=""
                                        Icon={HomeIcon}
                                    />
                                    <SidebarItem
                                        name="Hidden"
                                        to=""
                                        Icon={HomeIcon}
                                    />
                                </SidebarCollapsibleItem.Shown>
                                <SidebarCollapsibleItem.Hidden>
                                    <SidebarItem
                                        name="Hidden"
                                        to=""
                                        Icon={HomeIcon}
                                    />
                                    <SidebarItem
                                        name="Hidden"
                                        to=""
                                        Icon={HomeIcon}
                                    />
                                    <SidebarItem
                                        name="Hidden"
                                        to=""
                                        Icon={HomeIcon}
                                    />
                                    <SidebarItem
                                        name="Hidden"
                                        to=""
                                        Icon={HomeIcon}
                                    />
                                    <SidebarItem
                                        name="Hidden"
                                        to=""
                                        Icon={HomeIcon}
                                    />
                                    <SidebarItem
                                        name="Hidden"
                                        to=""
                                        Icon={HomeIcon}
                                    />
                                    <SidebarItem
                                        name="Hidden"
                                        to=""
                                        Icon={HomeIcon}
                                    />
                                    <SidebarItem
                                        name="Hidden"
                                        to=""
                                        Icon={HomeIcon}
                                    />
                                    <SidebarItem
                                        name="Hidden"
                                        to=""
                                        Icon={HomeIcon}
                                    />
                                    <SidebarItem
                                        name="Hidden"
                                        to=""
                                        Icon={HomeIcon}
                                    />
                                    <SidebarItem
                                        name="Hidden"
                                        to=""
                                        Icon={HomeIcon}
                                    />
                                    <SidebarItem
                                        name="Hidden"
                                        to=""
                                        Icon={HomeIcon}
                                    />
                                    <SidebarItem
                                        name="Hidden"
                                        to=""
                                        Icon={HomeIcon}
                                    />
                                    <SidebarItem
                                        name="Hidden"
                                        to=""
                                        Icon={HomeIcon}
                                    />
                                    <SidebarItem
                                        name="Hidden"
                                        to=""
                                        Icon={HomeIcon}
                                    />
                                    <SidebarItem
                                        name="Hidden"
                                        to=""
                                        Icon={HomeIcon}
                                    />
                                    <SidebarItem
                                        name="Hidden"
                                        to=""
                                        Icon={HomeIcon}
                                    />
                                    <SidebarItem
                                        name="Hidden"
                                        to=""
                                        Icon={HomeIcon}
                                    />
                                    <SidebarItem
                                        name="Hidden"
                                        to=""
                                        Icon={HomeIcon}
                                    />
                                    <SidebarItem
                                        name="Hidden"
                                        to=""
                                        Icon={HomeIcon}
                                    />
                                    <SidebarItem
                                        name="Hidden"
                                        to=""
                                        Icon={HomeIcon}
                                    />
                                </SidebarCollapsibleItem.Hidden>
                            </SidebarCollapsibleItem>
                        </SidebarSection>
                    </Sidebar>
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
