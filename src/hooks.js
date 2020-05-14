import {useState, useEffect} from 'react'
import {divideScale, sinify} from './utils'
export const useAnimatedScale = (scGap, delay) => {
    const [scale, setScale] = useState(0)
    const [animated, setAnimated] = useState(false)
    return {
        scale,
        start() {
            if (!animated) {
                var currScale = scale
                setAnimated(true)
                const interval = setInterval(() => {
                    currScale += scGap
                    setScale(currScale)
                    if (Math.abs(currScale) > 1) {
                        setScale(0)
                        setAnimated(false)
                        clearInterval(interval)
                    }
                }, delay)
            }
        }
    }
}

export const useDimension = () => {
    const [w, setW] = useState(window.innerWidth)
    const [h, setH] = useState(window.innerHeight)
    useEffect(() => {
        window.onresize = () => {
            setW(window.innerWidth)
            setH(window.innerHeight)
        }
        return () => {
            window.onresize = () => {

            }
        }
    })
}

export const useStyle = (w, h, scale) => {
    const sf = sinify(scale)
    const size = Math.min(w, h) / 8
    const lineWidth = Math.min(w, h) / 60
    const position = 'absolute'
    const hGap = h / 3
    const sf1 = divideScale(sf, 0, 2)
    const sf2 = divideScale(sf, 1, 2)
    return {
        lineStyle(i) {
            const width = `${size}px`
            const height = `${lineWidth}px`
            const left = `${(w - size) * sf1}px`
            const y = hGap * sf2 * (1 - 2 * i)
            const top = `${h / 2 + y - lineWidth / 2}`
            const background = 'green'
            return {position, left, top, width, height, background}
        }
    }
}
