import React from 'react'
import {useAnimatedScale, useDimension} from './hooks'
import LineSplitMoverPresentational from './LineSplitMoverPresentational'

const LineSplitMoverContainer = (props) => {
    const {scale, start} = useAnimatedScale(0.01, 20)
    const {w, h} = useDimension()
    return <LineSplitMoverPresentational w = {w} h = {h} scale = {scale} onClick = {start}>
          </LineSplitMoverPresentational>
}

export default LineSplitMoverContainer
