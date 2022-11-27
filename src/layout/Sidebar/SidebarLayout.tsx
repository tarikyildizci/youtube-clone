import {
    Sidebar,
    SidebarCollapsibleItem,
    SidebarItem,
    SidebarSection,
} from 'components'
import React from 'react'
import HomeIcon from '@mui/icons-material/Home'

export type SidebarLayoutProps = {}

export const SidebarLayout: React.FC<SidebarLayoutProps> = () => {
    return (
        <Sidebar>
            <SidebarSection>
                <SidebarItem name="Home" to="" selected Icon={HomeIcon} />
                <SidebarItem name="Shorts" to="" Icon={HomeIcon} />
                <SidebarItem name="Subscriptions" to="" Icon={HomeIcon} />
                <SidebarCollapsibleItem>
                    <SidebarCollapsibleItem.BorderTop />
                    <SidebarCollapsibleItem.Shown>
                        <SidebarItem name="Shorts" to="" Icon={HomeIcon} />
                        <SidebarItem name="Shorts" to="" Icon={HomeIcon} />
                        <SidebarItem name="Shorts" to="" Icon={HomeIcon} />
                        <SidebarItem name="Shorts" to="" Icon={HomeIcon} />
                        <SidebarItem name="Shorts" to="" Icon={HomeIcon} />
                    </SidebarCollapsibleItem.Shown>
                    <SidebarCollapsibleItem.Hidden>
                        <SidebarItem name="Hidden" to="" Icon={HomeIcon} />
                        <SidebarItem name="Hidden" to="" Icon={HomeIcon} />
                        <SidebarItem name="Hidden" to="" Icon={HomeIcon} />
                        <SidebarItem name="Hidden" to="" Icon={HomeIcon} />
                    </SidebarCollapsibleItem.Hidden>
                </SidebarCollapsibleItem>
            </SidebarSection>
            <SidebarSection header="Subscriptions">
                <SidebarCollapsibleItem>
                    <SidebarCollapsibleItem.Shown>
                        <SidebarItem name="Hidden" to="" Icon={HomeIcon} />
                        <SidebarItem name="Hidden" to="" Icon={HomeIcon} />
                        <SidebarItem name="Hidden" to="" Icon={HomeIcon} />
                        <SidebarItem name="Hidden" to="" Icon={HomeIcon} />
                    </SidebarCollapsibleItem.Shown>
                    <SidebarCollapsibleItem.Hidden>
                        <SidebarItem name="Hidden" to="" Icon={HomeIcon} />
                        <SidebarItem name="Hidden" to="" Icon={HomeIcon} />
                        <SidebarItem name="Hidden" to="" Icon={HomeIcon} />
                        <SidebarItem name="Hidden" to="" Icon={HomeIcon} />
                        <SidebarItem name="Hidden" to="" Icon={HomeIcon} />
                        <SidebarItem name="Hidden" to="" Icon={HomeIcon} />
                        <SidebarItem name="Hidden" to="" Icon={HomeIcon} />
                        <SidebarItem name="Hidden" to="" Icon={HomeIcon} />
                        <SidebarItem name="Hidden" to="" Icon={HomeIcon} />
                        <SidebarItem name="Hidden" to="" Icon={HomeIcon} />
                        <SidebarItem name="Hidden" to="" Icon={HomeIcon} />
                        <SidebarItem name="Hidden" to="" Icon={HomeIcon} />
                        <SidebarItem name="Hidden" to="" Icon={HomeIcon} />
                        <SidebarItem name="Hidden" to="" Icon={HomeIcon} />
                        <SidebarItem name="Hidden" to="" Icon={HomeIcon} />
                        <SidebarItem name="Hidden" to="" Icon={HomeIcon} />
                        <SidebarItem name="Hidden" to="" Icon={HomeIcon} />
                        <SidebarItem name="Hidden" to="" Icon={HomeIcon} />
                        <SidebarItem name="Hidden" to="" Icon={HomeIcon} />
                        <SidebarItem name="Hidden" to="" Icon={HomeIcon} />
                        <SidebarItem name="Hidden" to="" Icon={HomeIcon} />
                    </SidebarCollapsibleItem.Hidden>
                </SidebarCollapsibleItem>
            </SidebarSection>
        </Sidebar>
    )
}
