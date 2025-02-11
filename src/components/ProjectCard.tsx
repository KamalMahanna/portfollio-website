import {
  Box,
  Heading,
  Text,
  Image,
  Tag,
  HStack,
  VStack,
  Link,
  Button,
  AspectRatio,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import type { Project } from '../data/projects'
import AnimationWrapper from './AnimationWrapper'

const MotionBox = motion(Box)

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <AnimationWrapper>
      <MotionBox
        role="group"
        whileHover={{ scale: 1.02 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20
        }}
      >
        <Box
          bg="brand.secondary"
          borderRadius="xl"
          overflow="hidden"
          position="relative"
          transition="all 0.3s ease"
          _hover={{
            boxShadow: "2xl",
          }}
        >
          <AspectRatio ratio={16/9}>
            <Box overflow="hidden" position="relative">
              <Image
                src={project.image}
                alt={project.title}
                w="full"
                h="full"
                objectFit="cover"
                transition="all 0.5s cubic-bezier(0.4, 0, 0.2, 1)"
                _groupHover={{
                  transform: "scale(1.1)",
                }}
              />
              <Box
                position="absolute"
                inset={0}
                bg="rgba(0,0,0,0.4)"
                opacity={0}
                transition="all 0.5s cubic-bezier(0.4, 0, 0.2, 1)"
                _groupHover={{ opacity: 1 }}
              />
            </Box>
          </AspectRatio>

          <VStack 
            p={6} 
            align="stretch" 
            spacing={4}
            transform="translateY(0)"
            transition="all 0.5s cubic-bezier(0.4, 0, 0.2, 1)"
            _groupHover={{
              transform: "translateY(-4px)"
            }}
          >
            <MotionBox
              initial={{ opacity: 0.8 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              <Heading 
                size="lg"
                _groupHover={{ color: "brand.accent" }}
                transition="color 0.3s ease"
              >
                {project.title}
              </Heading>
            </MotionBox>
            
            <Text color="gray.400" fontSize="md">
              {project.description}
            </Text>

            <HStack spacing={2} flexWrap="wrap" mb={2}>
              {project.technologies.map((tech) => (
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

            <HStack spacing={4}>
              <Button
                as={Link}
                href={project.liveUrl}
                isExternal
                leftIcon={<FaExternalLinkAlt />}
                variant="solid"
                size="sm"
                w="full"
                bg="brand.accent"
                boxShadow="none"
                _hover={{
                  transform: "translateY(-2px)",
                  bg: "transparent",
                  boxShadow: "0 0 10px #6D28D9, 0 0 20px #6D28D9, 0 0 30px #6D28D9, 0 0 40px #6D28D9",
                }}
                transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
              >
                Live Demo
              </Button>
              <Button
                as={Link}
                href={project.githubUrl}
                isExternal
                leftIcon={<FaGithub />}
                variant="outline"
                size="sm"
                w="full"
                borderColor="brand.accent"
                _hover={{
                  transform: "translateY(-2px)",
                  bg: "transparent",
                  borderColor: "transparent",
                  boxShadow: "0 0 10px #6D28D9, 0 0 20px #6D28D9, 0 0 30px #6D28D9, 0 0 40px #6D28D9",
                }}
                transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
              >
                GitHub
              </Button>
            </HStack>
          </VStack>
        </Box>
      </MotionBox>
    </AnimationWrapper>
  )
}

export default ProjectCard
