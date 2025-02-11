import {
  Box,
  Container,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Link,
  Button,
  VStack,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { HamburgerIcon } from '@chakra-ui/icons'

const MotionBox = motion(Box)

const NAV_ITEMS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
]

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { scrollY } = useScroll()
  
  const navBgOpacity = useTransform(scrollY, [0, 100], [0, 0.9])
  const navBlur = useTransform(scrollY, [0, 100], [0, 8])

  return (
    <MotionBox
      as="nav"
      position="fixed"
      w="100%"
      zIndex="sticky"
      style={{
        backdropFilter: `blur(${navBlur}px)`,
      }}
    >
      <MotionBox
        position="absolute"
        inset={0}
        bg="brand.primary"
        style={{ opacity: navBgOpacity }}
      />
      
      <Container maxW="container.xl" position="relative">
        <Flex h={16} alignItems="center" justify="space-between">
          <Link
            href="#home"
            fontSize="xl"
            fontWeight="bold"
            bgGradient="linear(to-r, brand.accent, brand.highlight)"
            bgClip="text"
            _hover={{ textDecoration: 'none' }}
          >
            KM
          </Link>

          <HStack spacing={6} display={{ base: 'none', md: 'flex' }}>
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                px={2}
                py={1}
                rounded="md"
                _hover={{
                  textDecoration: 'none',
                  color: 'brand.accent',
                  transform: 'translateY(-2px)',
                }}
                transition="all 0.2s"
              >
                {item.name}
              </Link>
            ))}
            <Button
              as="a"
              href="kamal-resume.pdf"
              download
              variant="outline"
              size="sm"
              borderColor="brand.accent"
              _hover={{
                bg: 'whiteAlpha.100',
                transform: 'translateY(-2px)',
              }}
            >
              Resume
            </Button>
          </HStack>

          <IconButton
            display={{ base: 'flex', md: 'none' }}
            onClick={onOpen}
            variant="ghost"
            aria-label="Open menu"
            icon={<HamburgerIcon />}
            _hover={{ bg: 'whiteAlpha.200' }}
          />
        </Flex>
      </Container>

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        size="xs"
      >
        <DrawerOverlay />
        <DrawerContent bg="brand.primary">
          <DrawerCloseButton />
          <DrawerHeader
            bgGradient="linear(to-r, brand.accent, brand.highlight)"
            bgClip="text"
          >
            Navigation
          </DrawerHeader>

          <DrawerBody>
            <VStack spacing={4} align="stretch" mt={4}>
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  px={2}
                  py={1}
                  rounded="md"
                  onClick={onClose}
                  _hover={{
                    textDecoration: 'none',
                    color: 'brand.accent',
                    bg: 'whiteAlpha.100',
                  }}
                >
                  {item.name}
                </Link>
              ))}
              <Button
                as="a"
                href="kamal-resume.pdf"
                download
                variant="outline"
                size="sm"
                mt={4}
                borderColor="brand.accent"
                w="full"
                _hover={{
                  bg: 'whiteAlpha.100',
                }}
              >
                Resume
              </Button>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </MotionBox>
  )
}

export default Navbar
