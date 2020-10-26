import React from 'react'
import { useSpring, animated } from 'react-spring'

export default function GreenSpring(ownProps) {
  const props = useSpring({
    from: { left: '0%', top: '0%', width: '0%', height: ownProps.height, background: ownProps.color, position: 'relative', zIndex: 9, overflow: 'hidden', whiteSpace: 'nowrap' },
    to: async next => {
      
        //await next({ width: ownProps.widthStart, background: ownProps.color })        
        await next({ width: ownProps.widthStop, background: ownProps.color, zIndex: 9})
      
    },
  })
return <animated.div className="script-box" style={props} ><h4 className='listItems'><li>{ownProps.content}</li></h4></animated.div>
}