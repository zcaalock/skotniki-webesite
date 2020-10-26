import React from 'react'
import { useSpring, animated } from 'react-spring'

export default function GreenSpring(ownProps) {
  const props = useSpring({
    from: { left: '0%', top: '0%', width: '100%', height: '0%', background: ownProps.color, position: 'absolute', zIndex: -1 },
    to: async next => {
      
        //await next({ width: ownProps.widthStart, background: ownProps.color })        
        await next({ height: ownProps.heightStop})
      
    },
  })
  return <animated.div className="script-box" style={props} />
}