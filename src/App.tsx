import { Box, Container } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import React, { Suspense } from 'react'

const About = React.lazy(() => import('./components/About'))
const Projects = React.lazy(() => import('./components/Projects'))
const Skills = React.lazy(() => import('./components/Skills'))
const Experience = React.lazy(() => import('./components/Experience'))
const OpenSource = React.lazy(() => import('./components/OpenSource'))
const Contact = React.lazy(() => import('./components/Contact'))
const Footer = React.lazy(() => import('./components/Footer'))

function App() {
  return (
    <Box
      minH="100vh"
      bg="brand.primary"
      overflowX="hidden"
      position="relative"
      bgGradient="linear(to-b, brand.primary 0%, brand.secondary 50%, brand.primary 100%)"
      _before={{
        content: '""',
        position: 'fixed',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        bg: `radial-gradient(circle at 50% 0, #6D28D940 0%, transparent 40%)`,
        pointerEvents: 'none',
        zIndex: 0
      }}
      sx={{
        scrollBehavior: 'smooth',
        '&::-webkit-scrollbar': {
          width: '10px',
        },
        '&::-webkit-scrollbar-track': {
          bg: 'brand.primary',
        },
        '&::-webkit-scrollbar-thumb': {
          bg: 'brand.accent',
          borderRadius: 'full',
        },
      }}
    >
      <Box position="fixed" top={0} left={0} right={0} zIndex={1000}>
        <Navbar />
      </Box>

      <Box as="main" pt="72px">
        <Hero />
        
        
          <Container maxW="container.xl" px={{ base: 4, md: 8 }}>
            <Suspense fallback={<div>Loading...</div>}>
              <About />
              <Experience />
              <OpenSource />
              <Projects />
              <Skills />
            </Suspense>
          </Container>
        

        <Box bg="brand.primary">
          <Suspense fallback={<div>Loading...</div>}>
            <Contact />
            <Footer />
          </Suspense>
        </Box>
      </Box>
    </Box>
  )
}

export default App
