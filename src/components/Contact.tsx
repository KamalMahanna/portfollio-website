import React, { useState } from 'react'
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Icon,
  Link,
  Button,
  Grid,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import type { IconType } from 'react-icons'
import { 
  FaGithub, 
  FaEnvelope, 
  FaLinkedin, 
  FaPhoneAlt, 
} from 'react-icons/fa'
import AnimationWrapper from './AnimationWrapper'
import EmailModal from './EmailModal'

const MotionBox = motion(Box)
const MotionContainer = motion(Container)

interface ContactInfo {
  icon: IconType
  label: string
  value: string
  href: string
}

const contactInfo: ContactInfo[] = [
  {
    icon: FaEnvelope,
    label: "Email",
    value: "kamalkiranmahanna@gmail.com",
    href: "mailto:kamalkiranmahanna@gmail.com",
  },
  {
    icon: FaPhoneAlt,
    label: "Phone",
    value: "+91 7894690700",
    href: "tel:+917894690700",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    value: "github.com/KamalMahanna",
    href: "https://github.com/KamalMahanna",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/kamalmahanna/",
    href: "https://www.linkedin.com/in/kamalmahanna",
  },
]

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

const ContactCard = ({ 
  info, 
  index, 
  onHover, 
  hoveredIndex 
}: { 
  info: ContactInfo; 
  index: number; 
  onHover: (isHovered: boolean, index: number) => void;
  hoveredIndex: number | null;
}) => {
  const calculateRepulsion = (index: number) => {
    if (hoveredIndex === null) return {};
    
    const distanceFromHovered = Math.abs(index - hoveredIndex);
    if (distanceFromHovered === 0) return {};

    const direction = index > hoveredIndex ? 1 : -1;
    const strength = 40 / distanceFromHovered;

    return {
      x: direction * strength,
      transition: { type: "spring", stiffness: 200, damping: 25 }
    };
  };

  const isHovered = hoveredIndex === index;

  return (
    <Box height="100%" py={6}>
      <AnimationWrapper delay={index * 0.1}>
        <MotionBox
          whileHover={{ 
            scale: 1.15,
            transition: {
              type: "spring",
              stiffness: 300,
              damping: 15,
              duration: 0.4
            }
          }}
          onHoverStart={() => onHover(true, index)}
          onHoverEnd={() => onHover(false, index)}
          height="100%"
          style={{ position: 'relative', zIndex: isHovered ? 2 : 1 }}
        >
          <Link
            href={info.href}
            isExternal
            _hover={{ textDecoration: 'none' }}
            height="100%"
            display="block"
          >
            <MotionBox
              bg="whiteAlpha.50"
              p={6}
              borderRadius="lg"
              minH="120px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              animate={{
                ...calculateRepulsion(index),
                minHeight: isHovered ? "180px" : "120px"
              }}
              initial={{ x: 0, minHeight: "120px" }}
              transition={{
                minHeight: { duration: 0.4, ease: "easeInOut" }
              }}
              whileHover={{
                bg: 'whiteAlpha.100',
                boxShadow: "2xl",
              }}
            >
              <VStack spacing={4} width="100%" position="relative">
                <MotionBox
                  whileHover={{ 
                    rotate: [0, -10, 10, -5, 5, 0],
                    transition: { duration: 0.5 }
                  }}
                >
                  <Icon
                    as={info.icon}
                    w={isHovered ? 8 : 10}
                    h={isHovered ? 8 : 10}
                    color="brand.accent"
                  />
                </MotionBox>
                <Text 
                  fontWeight="medium" 
                  fontSize="lg"
                  opacity={isHovered ? 0 : 1}
                  transition="opacity 0.3s"
                >
                  {info.label}
                </Text>
                {isHovered && (
                  <MotionBox
                    initial={{ opacity: 0, scale: 0.8, y: -20 }}
                    animate={{ 
                      opacity: 1,
                      scale: 1,
                      y: 0
                    }}
                    transition={{ 
                      duration: 0.4,
                      ease: "easeOut"
                    }}
                    style={{
                      position: 'absolute',
                      top: '50%',
                      width: '100%',
                      textAlign: 'center'
                    }}
                  >
                    <Text fontWeight="medium" fontSize="lg">
                      {info.label}
                    </Text>
                    <Text color="gray.400">
                      {info.value}
                    </Text>
                  </MotionBox>
                )}
              </VStack>
            </MotionBox>
          </Link>
        </MotionBox>
      </AnimationWrapper>
    </Box>
  )
}

const Contact = () => {
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);

  const handleHover = (isHovered: boolean, index: number) => {
    setHoveredIndex(isHovered ? index : null);
  };

  return (
    <Box py={20} id="contact">
      <Container maxW="container.xl">
        <AnimationWrapper>
          <Box textAlign="center" mb={12}>
            <Heading as="h2" size="2xl" mb={4}>
              Get in Touch
            </Heading>
            <Text fontSize="xl" color="gray.400" maxW="container.md" mx="auto">
              I'm always open to new opportunities and collaborations.
              Feel free to reach out through any of the following channels.
            </Text>
          </Box>
        </AnimationWrapper>

        <MotionContainer
          maxW="container.lg"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          <Grid
            templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }}
            gap={6}
            alignItems="stretch"
          >
            {contactInfo.map((info, index) => (
              <motion.div 
                key={info.label}
                variants={itemVariants}
                style={{ height: '100%' }}
              >
                <ContactCard 
                  info={info} 
                  index={index} 
                  onHover={handleHover}
                  hoveredIndex={hoveredIndex}
                />
              </motion.div>
            ))}
          </Grid>
        </MotionContainer>

        <AnimationWrapper delay={0.8}>
          <Box textAlign="center" mt={16}>
            <MotionBox
              whileHover={{ scale: 1.05 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20
              }}
            >
              <Button
                size="lg"
                bg="brand.accent"
                color="white"
                leftIcon={<FaEnvelope />}
                boxShadow="none"
                onClick={() => setIsEmailModalOpen(true)}
                _hover={{
                  transform: "translateY(-2px)",
                  bg: "transparent",
                  boxShadow: "0 0 10px #6D28D9, 0 0 20px #6D28D9, 0 0 30px #6D28D9, 0 0 40px #6D28D9",
                }}
                transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
              >
                Send Me an Email
              </Button>
              <EmailModal 
                isOpen={isEmailModalOpen}
                onClose={() => setIsEmailModalOpen(false)}
              />
            </MotionBox>
          </Box>
        </AnimationWrapper>
      </Container>
    </Box>
  )
}

export default Contact
