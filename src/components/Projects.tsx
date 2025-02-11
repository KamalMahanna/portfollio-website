import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'

const MotionBox = motion(Box)
const MotionGrid = motion(SimpleGrid)

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

const Projects = () => {
  return (
    <Box py={20} id="projects" bg="brand.secondary">
      <Container maxW="container.xl">
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          textAlign="center"
          mb={16}
        >
          <Heading 
            as="h2" 
            size="2xl" 
            mb={4}
            color="white"
          >
            Featured Projects
          </Heading>
          <Text fontSize="xl" color="gray.400" maxW="container.md" mx="auto">
            A showcase of my recent work in AI, machine learning, and data science,
            demonstrating practical applications of cutting-edge technologies.
          </Text>
        </MotionBox>

        <MotionGrid 
          columns={{ base: 1, lg: 2 }} 
          spacing={8}
          maxW="container.xl"
          mx="auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </MotionGrid>
      </Container>
    </Box>
  )
}

export default Projects
