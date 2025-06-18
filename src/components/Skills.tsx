import {
  Box,
  Container,
  Heading,
  Text,
  Grid,
  VStack,
  HStack,
  Icon,
  Link,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import {
  FaPython,
  FaDatabase,
  FaGitAlt,
  FaChartBar,
  FaBrain,
  FaChartLine,
  FaChartPie,
  FaLinux,
  FaLink,
} from 'react-icons/fa'
import { BiBarChartAlt2 } from 'react-icons/bi'
import { SiPytorch, SiMongodb } from 'react-icons/si'
import { AiOutlineApartment } from 'react-icons/ai'
import AnimationWrapper from './AnimationWrapper'

const MotionBox = motion(Box)

interface Skill {
  name: string
  level: number
  icon: any
}

interface Certification {
  name: string
  path: string
}

interface SkillCategory {
  title: string
  skills: Skill[]
}

const skillCategories: SkillCategory[] = [
  {
    title: "Programming & Tools",
    skills: [
      { name: "Python", level: 90, icon: FaPython },
      { name: "Linux", level: 85, icon: FaLinux },
      { name: "Power BI", level: 85, icon: BiBarChartAlt2 },
      { name: "SQL", level: 80, icon: FaDatabase },
      { name: "Git & GitHub", level: 85, icon: FaGitAlt },
      { name: "Lang Chain", level: 80, icon: FaLink },
      { name: "Lang Graph", level: 75, icon: AiOutlineApartment },
      { name: "MongoDB", level: 70, icon: SiMongodb },
    ],
  },
  {
    title: "Data Science",
    skills: [
      { name: "Machine Learning", level: 90, icon: FaBrain },
      { name: "Deep Learning", level: 85, icon: SiPytorch },
      { name: "Data Analysis", level: 85, icon: FaChartBar },
      { name: "Statistical Analysis", level: 80, icon: FaChartLine },
      { name: "Data Visualization", level: 85, icon: FaChartPie },
      { name: "Generative AI", level: 85, icon: FaBrain },
    ],
  },
]

const certifications: Certification[] = [
  {
    name: "Masters in Data Science from NASSCOM",
    path: "https://drive.google.com/file/d/14yg6ajz5vkD-e30ph9Qllzf8WmmawMsO/view?usp=sharing"
  },
  {
    name: "Data Science from ExcelR",
    path: "https://drive.google.com/file/d/1UxRgC0cva897oauWmE7Zl2NyseffrXPx/view?usp=sharing"
  }
]

const SkillCard = ({ skill, delay }: { skill: Skill; delay: number }) => {
  return (
    <AnimationWrapper delay={delay}>
      <MotionBox 
        whileHover={{ scale: 1.02 }} 
        transition={{ duration: 0.2 }}
        p={3}
        borderRadius="md"
        bg="whiteAlpha.100"
        w="100%"
      >
        <HStack spacing={4}>
          <Icon as={skill.icon} w={6} h={6} color="brand.accent" />
          <Text flex="1">{skill.name}</Text>
        </HStack>
      </MotionBox>
    </AnimationWrapper>
  )
}

const SkillCategoryCard = ({ category, index }: { category: SkillCategory; index: number }) => {
  return (
    <Box height="100%">
      <AnimationWrapper delay={index * 0.2}>
        <MotionBox
          whileHover={{ scale: 1.02 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20
          }}
          height="100%"
        >
          <Box
            bg="whiteAlpha.50"
            p={6}
            borderRadius="lg"
            transition="all 0.5s cubic-bezier(0.4, 0, 0.2, 1)"
            _hover={{ boxShadow: "2xl" }}
            minH="300px"
            display="flex"
            flexDirection="column"
          >
            <Heading size="md" mb={6} color="brand.accent">
              {category.title}
            </Heading>
            <VStack spacing={4} align="stretch" flex="1">
              {category.skills.map((skill, skillIndex) => (
                <SkillCard 
                  key={skill.name} 
                  skill={skill} 
                  delay={(index * 5 + skillIndex) * 0.1} 
                />
              ))}
            </VStack>
          </Box>
        </MotionBox>
      </AnimationWrapper>
    </Box>
  )
}

const Skills = () => {
  return (
    <Box pb={20} pt={16} id="skills">
      <Container maxW="container.xl">
        <AnimationWrapper>
          <Box textAlign="center" mb={12}>
            <Heading as="h2" size="2xl" mb={4}>
              Skills & Expertise
            </Heading>
            <Text fontSize="xl" color="gray.400" maxW="container.md" mx="auto">
              A comprehensive overview of my technical skills and proficiency levels
              in various technologies and tools.
            </Text>
          </Box>
        </AnimationWrapper>

        <Grid
          templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
          gap={8}
          alignItems="stretch"
          h="100%"
        >
          {skillCategories.map((category, index) => (
            <Box key={category.title} height="100%">
              <SkillCategoryCard 
                category={category} 
                index={index} 
              />
            </Box>
          ))}
        </Grid>

        <AnimationWrapper delay={0.6}>
          <Box
            mt={12}
            p={8}
            bg="whiteAlpha.50"
            borderRadius="lg"
            textAlign="center"
            transition="all 0.5s cubic-bezier(0.4, 0, 0.2, 1)"
            _hover={{ boxShadow: "2xl" }}
          >
            <Text fontSize="lg" color="gray.400">
              Additionally, I have experience with Docker, REST APIs, and deploying
              machine learning models in production environments. I'm always eager to
              learn and adapt to new technologies and frameworks.
            </Text>
          </Box>
        </AnimationWrapper>

        <AnimationWrapper>
          <Box 
            textAlign="center" 
            mt={28} 
            mb={12} 
            id="certifications"
            scrollMarginTop="6rem"
          >
            <Heading as="h2" size="2xl" mb={4}>
              Certifications
            </Heading>
            <Text fontSize="xl" color="gray.400" maxW="container.md" mx="auto">
              Professional certifications and achievements in data science
            </Text>
          </Box>
        </AnimationWrapper>

        <Grid 
          templateColumns={{ base: "1fr", md: "1fr 1fr" }}
          gap={8}
          mb={0}
          maxW="container.md"
          mx="auto"
          justifyItems="center"
        >
          {certifications.map((cert, index) => (
            <AnimationWrapper key={cert.name} delay={index * 0.2}>
              <Link href={cert.path} isExternal _hover={{ textDecoration: 'none' }}>
                <Box
                  p={5}
                  bg="whiteAlpha.50"
                  borderRadius="lg"
                  transition="all 0.3s"
                  w="300px"
                  h="200px"
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                  _hover={{ 
                    transform: 'translateY(-4px)',
                    boxShadow: '2xl',
                    bg: 'whiteAlpha.100'
                  }}
                >
                  <Heading size="md" color="brand.accent" mb={4}>
                    {cert.name}
                  </Heading>
                  <Text color="gray.400">
                    Click to view certificate
                  </Text>
                </Box>
              </Link>
            </AnimationWrapper>
          ))}
        </Grid>

      </Container>
    </Box>
  )
}

export default Skills
