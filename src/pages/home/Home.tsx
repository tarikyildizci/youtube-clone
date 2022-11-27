import { Grid, Thumbnail } from 'components'
import React from 'react'

export type HomeProps = {}

const videoCount = new Array(24).fill(undefined)

export const Home: React.FC<HomeProps> = () => {
    return (
        <div
            style={{
                height: '100%',
                width: '100%',
                overflow: 'auto',
                marginRight: '16px',
                marginLeft: '16px',
                marginTop: '24px',
            }}
        >
            <Grid columns="1fr 1fr 1fr 1fr" columnGap={'16px'} rowGap={'40px'}>
                {videoCount.map((v) => (
                    <Thumbnail />
                ))}
            </Grid>
        </div>
    )
}
