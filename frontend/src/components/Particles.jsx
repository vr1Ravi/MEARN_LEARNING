import React, { useCallback, useMemo } from 'react'
import Particles from 'react-tsparticles'
import {loadSlim} from 'tsparticles-slim'

import particlesConfig from './config/particles-config'

const ParticleBackground = () => {
    const options = useMemo(()=>{
    return particlesConfig()
      
    }, [])

    const particlesInit = useCallback((engine)=>{
        loadSlim(engine)
    }, [])
  return (
    <Particles 
   init={particlesInit}
   options={options}
  ></Particles>
  )
}

export default ParticleBackground