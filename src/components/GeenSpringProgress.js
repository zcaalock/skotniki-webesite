import React from 'react'
import { useSpring, animated } from 'react-spring'

export default function GreenSpring(ownProps) {
  const props = useSpring({
    from: { width: '20px', height: '10px', borderBottomLeftRadius: '25px', borderTopLeftRadius: '25px', borderBottomRightRadius: '25px', borderTopRightRadius: '25px', background: ownProps.color, position: 'absolute', zIndex: 0,  },
    to: async next => {
      
        //await next({ width: ownProps.widthStart, background: ownProps.color })        
        await next({ width: ownProps.widthStop, background: ownProps.color, zIndex: 0})
      
    },
  })
  return <animated.div className="script-box" style={props} />
}