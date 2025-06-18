import {
  Box,
  Container,
  Heading,
  Text,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

const MotionBox = motion(Box);

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
          <Heading as="h2" size="2xl" mb={4} color="white">
            Featured Projects
          </Heading>
          <Text fontSize="xl" color="gray.400" maxW="container.md" mx="auto">
            A showcase of my recent work in AI, machine learning, and data science,
            demonstrating practical applications of cutting-edge technologies.
          </Text>
        </MotionBox>

        <Box
          display="flex"
          gap={8}
          overflowX="auto"
          overflowY="hidden"
          css={{
            '&::-webkit-scrollbar': {
              height: '8px',
            },
            '&::-webkit-scrollbar-track': {
              background: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '8px',
            },
            '&::-webkit-scrollbar-thumb': {
              background: 'brand.primary',
              borderRadius: '8px',
            },
            '&::-webkit-scrollbar-thumb:hover': {
              background: 'brand.primary',
              filter: 'brightness(1.2)',
            },
          }}
        >
          {projects.map((project) => (
            <Box key={project.id} flexShrink={0} minW="450px">
              <ProjectCard project={project} />
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Projects;
