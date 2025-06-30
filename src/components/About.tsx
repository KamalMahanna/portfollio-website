import { 
  Box, 
  Container, 
  Heading, 
  Text, 
  SimpleGrid,
  Icon,
  VStack,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import type { IconType } from 'react-icons'
import { 
  FaBrain, 
  FaChartLine, 
  FaLaptopCode,
  FaCogs 
} from 'react-icons/fa'

const MotionBox = motion(Box)

interface FeatureProps {
  title: string
  icon: IconType
  description: string
}

const features: FeatureProps[] = [
  {
    title: "Machine Learning",
    icon: FaBrain,
    description: "Expertise in developing and implementing advanced machine learning models for real-world applications.",
  },
  {
    title: "Data Analysis",
    icon: FaChartLine,
    description: "Skilled in data preprocessing, statistical analysis, and visualization using Python ecosystem.",
  },
  {
    title: "Deep Learning",
    icon: FaLaptopCode,
    description: "Experience with neural networks and deep learning architectures like CNN, LSTM for complex tasks.",
  },
  {
    title: "AI Solutions",
    icon: FaCogs,
    description: "Building end-to-end AI solutions from data collection to deployment in production environments.",
  },
]

const FeatureCard = ({ title, icon, description }: FeatureProps) => {
  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      height="100%"
    >
      <Box
        bg="whiteAlpha.50"
        p={8}
        borderRadius="lg"
        _hover={{ transform: 'translateY(-5px)', transition: 'all 0.3s ease' }}
        minH="280px"
        display="flex"
        flexDirection="column"
        justifyContent="flex-start"
      >
        <Icon as={icon} w={10} h={10} color="brand.accent" mb={4} />
        <Heading as="h3" size="md" mb={4}>
          {title}
        </Heading>
        <Text color="gray.400">
          {description}
        </Text>
      </Box>
    </MotionBox>
  )
}

const About = () => {
  return (
    <Box py={20} id="about">
      <Container maxW="container.xl">
        <VStack spacing={12}>
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            textAlign="center"
            maxW="800px"
          >
            <Heading as="h2" size="2xl" mb={6}>
              About Me
            </Heading>
            <Text fontSize="xl" color="gray.400">
              IBM-certified Data Scientist with a passion for solving complex problems using
              cutting-edge technologies. Specialized in machine learning, deep learning, and
              AI engineering with a track record of delivering innovative solutions.
            </Text>
          </MotionBox>

          <SimpleGrid 
            columns={{ base: 1, md: 2, lg: 4 }} 
            spacing={8} 
            width="full"
            alignItems="stretch"
          >
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </SimpleGrid>

          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            bg="whiteAlpha.50"
            p={8}
            borderRadius="lg"
            maxW="800px"
          >
            <Text fontSize="lg" color="gray.400" textAlign="center">
              Completed B.Tech from Biju Patnaik University of Technology with a CGPA of 8.65, my focus has been on
              applying machine learning and AI to solve real-world problems. With multiple successful projects
              under my belt, I'm passionate about creating intelligent systems that drive business value.
            </Text>
          </MotionBox>
        </VStack>
      </Container>
    </Box>
  )
}

export default About
