import React from 'react'
import {useStyle} from './hooks'

const LineSplitMover = ({i, w, h, scale}) => {
    const {lineStyle} = useStyle(w, h, scale)
    return <div style = {lineStyle(i)}></div>
}

const Button = ({w, h, scale, onClick}) => {
   const {buttonStyle} = useStyle(w, h, scale)
   return <button onClick = {onClick} style = {buttonStyle()}>start</button>
}

const LineSplitMoverPresentational = ({w, h, scale, onClick}) => {
    return <div>
      {[0, 1].map(i => <LineSplitMover i = {i} w = {w} h = {h} scale = {scale} key = {`ls_${i}`}/>)}
      <Button w = {w} h = {h} scale = {scale} onClick = {onClick}></Button>
    </div>
}

export default LineSplitMoverPresentational
