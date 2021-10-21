import React, { useEffect } from 'react'
import './App.css'
import { createScene } from './scene/scene'

const canvasStyle = {
  zIndex: 0,
  width: '100%',
  height: '100%',
  position: 'absolute',
  WebkitUserSelect: 'none',
  userSelect: 'none'
} as React.CSSProperties

const engineRendererCanvasId = 'engine-renderer-canvas'

export default () => {

  useEffect(() => {
    createScene(engineRendererCanvasId)
  }, [])

  return (<canvas id={engineRendererCanvasId} style={canvasStyle} />)
}

