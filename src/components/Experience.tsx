import {
  Box,
  VStack,
  HStack,
  Text,
  Heading,
  Container,
  Tag,
  List,
  ListItem,
  Link,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { experiences } from '../data/projects'
import AnimationWrapper from './AnimationWrapper'

const MotionBox = motion(Box)

const Experience = () => {
  return (
    <Box py={20} id="experience">
      <Container maxW="container.xl">
        <VStack spacing={12} align="stretch">
          <AnimationWrapper>
            <Box textAlign="center">
              <Heading
                as="h2"
                size="2xl"
                mb={4}
                color="white"
              >
                Experience
              </Heading>
              <Text fontSize="xl" color="gray.400" maxW="container.md" mx="auto">
                My professional journey and contributions in the field of Data Science and AI.
              </Text>
            </Box>
          </AnimationWrapper>

          <VStack spacing={8} align="stretch">
            {experiences.map((exp, index) => (
              <AnimationWrapper key={index} delay={index * 0.2}>
                <MotionBox
                  whileHover={{ scale: 1.02 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20
                  }}
                >
                  <Box
                    bg="whiteAlpha.50"
                    p={6}
                    borderRadius="xl"
                    position="relative"
                    transition="all 0.5s cubic-bezier(0.4, 0, 0.2, 1)"
                    _hover={{ boxShadow: "2xl" }}
                  >
                    <VStack align="stretch" spacing={4}>
                      <HStack justify="space-between" wrap="wrap">
                        <VStack align="start" spacing={1}>
                          <MotionBox
                            initial={{ opacity: 0.8 }}
                            whileHover={{ opacity: 1 }}
                            transition={{ duration: 0.2 }}
                          >
                            <Heading size="md" color="brand.accent">
                              {exp.title}
                            </Heading>
                          </MotionBox>
                          <Text fontSize="lg" fontWeight="medium">
                            {exp.company}
                          </Text>
                        </VStack>
                        <Text color="gray.400">{exp.period}</Text>
                      </HStack>

                      <List spacing={3}>
                        {exp.description.map((desc, i) => (
                          <ListItem 
                            key={i} 
                            display="flex" 
                            alignItems="flex-start"
                            opacity={0.8}
                            _hover={{ opacity: 1 }}
                            transition="opacity 0.3s ease"
                          >
                            <Box 
                              as="span" 
                              w="6px" 
                              h="6px" 
                              borderRadius="full" 
                              bg="brand.accent" 
                              display="inline-block"
                              mt={2.5}
                              mr={3}
                              flexShrink={0}
                            />
                            <Text color="gray.400">
                              {typeof desc === 'string' ? (
                                desc
                              ) : (
                                <>
                                  {desc.text}{' '}
                                  <Link 
                                    href={desc.link} 
                                    color="brand.accent" 
                                    isExternal
                                    _hover={{ textDecoration: 'underline' }}
                                  >
                                    {desc.linkText}
                                  </Link>
                                </>
                              )}
                            </Text>
                          </ListItem>
                        ))}
                      </List>

                      <HStack spacing={2} flexWrap="wrap">
                        {exp.technologies.map((tech) => (
                          <Tag
                            key={tech}
                            size="sm"
                            variant="subtle"
                            bg="whiteAlpha.200"
                            color="white"
                          >
                            {tech}
                          </Tag>
                        ))}
                      </HStack>
                    </VStack>
                  </Box>
                </MotionBox>
              </AnimationWrapper>
            ))}
          </VStack>
        </VStack>
      </Container>
    </Box>
  )
}

export default Experience
