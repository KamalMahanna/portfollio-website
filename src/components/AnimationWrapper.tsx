import { motion } from 'framer-motion'
import { Box } from '@chakra-ui/react'
import { ReactNode } from 'react'

const MotionBox = motion(Box)

interface AnimationWrapperProps {
  children: ReactNode
  delay?: number
}

const AnimationWrapper = ({ children, delay = 0 }: AnimationWrapperProps) => {
  return (
    <MotionBox
      initial={{ opacity: 0, transform: 'translate3d(0, 20px, 0)' }}
      whileInView={{ 
        opacity: 1, 
        transform: 'translate3d(0, 0, 0)',
        transition: {
          duration: 0.5,
          delay: delay,
          ease: [0.22, 1, 0.36, 1], // Custom easing curve optimized for performance
          opacity: { duration: 0.4 } // Shorter opacity transition
        }
      }}
      viewport={{ once: true, margin: "-50px" }}
      style={{ willChange: 'transform, opacity' }}
    >
      {children}
    </MotionBox>
  )
}

export default AnimationWrapper
