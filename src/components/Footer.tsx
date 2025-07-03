import {
  Box,
  Container,
  Text,
  VStack,
  HStack,
} from '@chakra-ui/react'

const Footer = () => {

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
            <Text>Thank you </Text><Text fontSize="xl">🙏</Text><Text> for visiting</Text>
          </HStack>

          <VStack spacing={2}>

            
          </VStack>

          
        </VStack>
      </Container>
    </Box>
  )
}

export default Footer
