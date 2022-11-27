import { Flex } from 'components/Layout'
import React from 'react'
import { ThumbnailVideo } from './Thumbnail.style'

export type ThumbnailProps = {}

export const Thumbnail: React.FC<ThumbnailProps> = () => {
    return (
        <Flex direction="column">
            <ThumbnailVideo src="https://i.ytimg.com/vi/dPoQNCFShQg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBb-eePlU80xGK4PO2tkbiSiCSvHg" />
            <Flex>
                <img
                    src="https://www.indyturk.com/sites/default/files/article/main_image/2020/08/14/440866-1854448434.jpg"
                    style={{ height: 36, width: 36, borderRadius: '50%' }}
                />
                <Flex>
                    <p>This Is My Test Video Title</p>
                    <p>Channel Name</p>
                    <p>300 views * 3 months ago</p>
                </Flex>
            </Flex>
        </Flex>
    )
}
