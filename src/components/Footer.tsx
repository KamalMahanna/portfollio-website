import {
  Box,
  Container,
  Text,
  VStack,
  HStack,
  Icon,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FaHeart } from 'react-icons/fa'

const MotionBox = motion(Box)

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <Box
      as="footer"
      py={10}
      bg="whiteAlpha.50"
      borderTop="1px solid"
      borderColor="whiteAlpha.100"
    >
      <Container maxW="container.xl">
        <VStack spacing={6}>
          <HStack spacing={2} color="gray.400" alignItems="center">
            <Text>Thank you for visiting</Text>
            <Text fontSize="xl">🙏</Text>
          </HStack>

          <VStack spacing={2}>

            <HStack spacing={2} color="gray.500" fontSize="sm">
              <Text>Built with</Text>
              <Icon as={FaHeart} color="red.400" w={3} h={3} />
              <Text>using React & Chakra UI</Text>
            </HStack>
          </VStack>

          <MotionBox
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Text color="gray.500" fontSize="sm" textAlign="center">
              Entire website is made with Cline.{" "}
              <Box 
                as="svg" 
                width="7" 
                height="7" 
                ml={1}
                mr={1}
                viewBox="0 0 100 100" 
                display="inline-block"
                verticalAlign="middle"
                transition="transform 0.3s"
                _hover={{ transform: 'scale(1.1)' }}
              >
                <g fill="#5487C8" fillRule="evenodd" transform="translate(.265)">
                  <path fillRule="nonzero" d="M65.45 15.8c10.887 0 19.714 8.865 19.714 19.8v6.6l5.739 11.465a4 4 0 0 1-.007 3.595L85.164 68.6v6.6c0 10.936-8.827 19.8-19.715 19.8H26.021C15.133 95 6.306 86.136 6.306 75.2v-6.6L.45 57.295A4 4 0 0 1 .44 53.63L6.306 42.2v-6.6c0-10.935 8.827-19.8 19.715-19.8zM30.734 38a9 9 0 0 0-9 9v16a9 9 0 0 0 18 0V47a9 9 0 0 0-9-9m29 0a9 9 0 0 0-9 9v16a9 9 0 0 0 18 0V47a9 9 0 0 0-9-9" />
                  <circle cx="45.735" cy="11" r="11" />
                </g>
              </Box>
              {" "}Not a single line of code is written by me.
            </Text>
          </MotionBox>
        </VStack>
      </Container>
    </Box>
  )
}

export default Footer
