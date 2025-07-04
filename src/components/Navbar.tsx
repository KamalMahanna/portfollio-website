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
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Spacer,
} from '@chakra-ui/react'
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion'
import { useState } from 'react'
import { DownloadIcon, HamburgerIcon } from '@chakra-ui/icons'

const MotionBox = motion(Box)

const NAV_ITEMS = [
  { name: "About", href: "#about" },
  { name: "Internship", href: "#internship" },
  { name: "Open Source", href: "#opensource" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
]

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { scrollY } = useScroll()
  const [isScrolled, setIsScrolled] = useState(false)

  const scrollThreshold = 50

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > scrollThreshold && !isScrolled) {
      setIsScrolled(true)
    } else if (latest <= scrollThreshold && isScrolled) {
      setIsScrolled(false)
    }
  })
  
  const navBgOpacity = useTransform(scrollY, [0, scrollThreshold], [0, 0.9])
  const navBlur = useTransform(scrollY, [0, scrollThreshold], [0, 8])
  const navBoxShadow = useTransform(scrollY, [0, scrollThreshold], ["0 0 0px rgba(0,0,0,0)", "0 0 15px rgba(144, 205, 244, 0.6)"])

  return (
    <MotionBox
      as="nav"
      position="fixed"
      zIndex="sticky"
      layout
      top={isScrolled ? 4 : 0}
      left={isScrolled ? 0 : 0}
      right={isScrolled ? 0 : 0}
      marginX={isScrolled ? "auto" : undefined}
      maxW={isScrolled ? "container.lg" : "100%"}
      w={isScrolled ? "90%" : "100%"}
      borderRadius={isScrolled ? "full" : "0px"}
      style={{
        backdropFilter: `blur(${navBlur}px)`,
        boxShadow: navBoxShadow,
      }}
    >
      <MotionBox
        position="absolute"
        inset={0}
        bg="brand.primary"
        borderRadius="inherit"
        style={{ opacity: navBgOpacity }}
      />
      
      <Container maxW="container.xl" position="relative">
        <Flex h={16} alignItems="center" justify="space-between" gap={4}>
          <Link
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            fontSize="xl"
            fontWeight="bold"
            bgGradient="linear(to-r, brand.accent, brand.highlight)"
            bgClip="text"
            _hover={{ textDecoration: 'none' }}
          >
            KM
          </Link>

          <Spacer />

          <HStack spacing={4} display={{ base: 'none', md: 'flex' }}>
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
          </HStack>

          <Spacer />

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
            leftIcon={<DownloadIcon />}
          >
            Resume
          </Button>

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

          <DrawerBody p={0}>
            <VStack spacing={4} align="stretch" mt={2}>
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
                leftIcon={<DownloadIcon />}
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