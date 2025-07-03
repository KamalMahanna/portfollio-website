import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  IconButton,
} from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

const MotionBox = motion(Box);

const Projects = () => {
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  const scroll = (scrollOffset: number) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += scrollOffset;
    }
  };

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

        <Box position="relative">
          <IconButton
            aria-label="Scroll left"
            icon={<ChevronLeftIcon />}
            onClick={() => scroll(-450)}
            position="absolute"
            left="-20px"
            top="50%"
            transform="translateY(-50%)"
            zIndex="2"
            isRound
            variant="solid"
            colorScheme="gray"
            bg="whiteAlpha.400"
            _hover={{ bg: 'whiteAlpha.600' }}
          />
          <Box
            ref={scrollContainerRef}
            id="projects-container"
            display="flex"
            gap={8}
            overflowX="auto"
            overflowY="hidden"
            css={{
              'scroll-behavior': 'smooth',
              '&::-webkit-scrollbar': {
                display: 'none',
              },
            }}
          >
            {projects.map((project) => (
              <Box key={project.id} flexShrink={0} minW="450px">
                <ProjectCard project={project} />
              </Box>
            ))}
          </Box>
          <IconButton
            aria-label="Scroll right"
            icon={<ChevronRightIcon />}
            onClick={() => scroll(450)}
            position="absolute"
            right="-20px"
            top="50%"
            transform="translateY(-50%)"
            zIndex="2"
            isRound
            variant="solid"
            colorScheme="gray"
            bg="whiteAlpha.400"
            _hover={{ bg: 'whiteAlpha.600' }}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default Projects;
