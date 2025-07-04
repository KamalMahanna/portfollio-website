import { 
  Box, 
  Container, 
  Heading, 
  Text, 
  Button, 
  Stack,
  Icon,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import AnimationWrapper from './AnimationWrapper'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const MotionBox = motion(Box)
const MotionStack = motion(Stack)

const scrollAnimation = {
  y: [0, 10, 0],
  transition: {
    duration: 1.5,
    repeat: Infinity,
    ease: "easeInOut",
  },
}

const Hero = () => {

  return (
    <Box 
      id="home"
      minH="100vh" 
      position="relative" 
      overflow="hidden"
      display="flex"
      pt="64px"
    >
      

      <Container maxW="container.lg" position="relative" zIndex={1} pt="16px">
        <MotionStack
          spacing={8}
          align="flex-start"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Box>
            <AnimationWrapper delay={0.2}>
              <Text
                bgGradient="linear(to-r, brand.accent, brand.highlight)"
                bgClip="text"
                fontSize="xl"
                fontWeight="bold"
                mb={3}
              >
              Hi there, I'm
              </Text>
            </AnimationWrapper>
            <AnimationWrapper delay={0.4}>
              <Heading
                as="h1"
                fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
                lineHeight="shorter"
                fontWeight="bold"
                mb={8}
              >
              Kamal Kiran Mahanna
              </Heading>
            </AnimationWrapper>
            <AnimationWrapper delay={0.6}>
              <Heading
                as="h2"
                fontSize={{ base: "2xl", md: "3xl" }}
                color="gray.400"
                fontWeight="medium"
                mb={6}
              >
              Data Scientist & Analyst
              </Heading>
            </AnimationWrapper>
            <AnimationWrapper delay={0.8}>
              <Text
                fontSize="xl"
                color="gray.400"
                maxW="container.md"
                lineHeight="tall"
                mb={8}
              >
              IBM-certified Data Scientist specialized in developing innovative solutions 
              using cutting-edge technologies and deep learning architectures.
              </Text>
            </AnimationWrapper>

            <AnimationWrapper delay={1}>
              <Stack 
                direction={{ base: "column", sm: "row" }}
                spacing={4}
                mb={8}
              >
              <Button
                as="a"
                href="#projects"
                size="lg"
                bg="brand.accent"
                color="white"
                boxShadow="none"
                _hover={{
                  transform: "translateY(-2px)",
                  bg: "transparent",
                  boxShadow: "0 0 10px #6D28D9, 0 0 20px #6D28D9, 0 0 30px #6D28D9, 0 0 40px #6D28D9",
                }}
                transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
              >
                View My Work
              </Button>
              <Button
                as="a"
                href="#contact"
                size="lg"
                variant="outline"
                borderWidth="2px"
                borderColor="brand.accent"
                boxShadow="none"
                _hover={{
                  transform: "translateY(-2px)",
                  bg: "transparent",
                  borderColor: "transparent",
                  boxShadow: "0 0 10px #6D28D9, 0 0 20px #6D28D9, 0 0 30px #6D28D9, 0 0 40px #6D28D9",
                }}
                transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
              >
                Get in Touch
              </Button>
              </Stack>
            </AnimationWrapper>

            <AnimationWrapper delay={1.2}>
              <Stack 
                direction="row" 
                spacing={6}
                color="gray.400"
              >
              <Box
                as="a"
                href="https://github.com/KamalMahanna"
                target="_blank"
                rel="noopener noreferrer"
                _hover={{ color: "brand.accent", transform: "translateY(-2px)" }}
                transition="all 0.3s ease"
              >
                <Icon as={FaGithub} w={6} h={6} />
              </Box>
              <Box
                as="a"
                href="https://www.linkedin.com/in/kamalmahanna"
                target="_blank"
                rel="noopener noreferrer"
                _hover={{ color: "brand.accent", transform: "translateY(-2px)" }}
                transition="all 0.3s ease"
              >
                <Icon as={FaLinkedin} w={6} h={6} />
              </Box>
              <Box
                as="a"
                href="mailto:kamalkiranmahanna@gmail.com"
                _hover={{ color: "brand.accent", transform: "translateY(-2px)" }}
                transition="all 0.3s ease"
              >
                <Icon as={FaEnvelope} w={6} h={6} />
              </Box>
              </Stack>
            </AnimationWrapper>
          </Box>
        </MotionStack>
      </Container>

      {/* Scroll indicator */}
      <MotionBox
        position="absolute"
        bottom={24}
        left="50%"
        transform="translateX(-50%)"
        opacity={0.5}
        _hover={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        animate={{ ...scrollAnimation, opacity: 0.5 }}
        style={{ willChange: "transform" }}
      >
        <Box
          width="30px"
          height="50px"
          border="2px solid"
          borderColor="gray.400"
          borderRadius="full"
          position="relative"
        >
          <Box
            position="absolute"
            top="8px"
            left="50%"
            transform="translateX(-50%)"
            width="4px"
            height="8px"
            borderRadius="full"
            bg="gray.400"
          />
        </Box>
      </MotionBox>
    </Box>
  )
}

export default Hero
