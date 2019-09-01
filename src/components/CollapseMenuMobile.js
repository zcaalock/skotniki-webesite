import React from 'react'
import { useSpring, animated } from 'react-spring'

export default function GreenSpring(ownProps) {
  const props = useSpring({
    from: { width: '50px', height: '50px', position: 'absolute' },
    to: async next => {
      
        //await next({ width: ownProps.widthStart, background: ownProps.color })        
        await next({ width: ownProps.widthStop, position: ownProps.postionStop})
      
    },
  })
  return <animated.div className="mobileNavBar" style={props} >asdasd</animated.div>
}