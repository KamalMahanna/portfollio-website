import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const theme = extendTheme({
  config,
  colors: {
    brand: {
      primary: '#0A0F1C',
      secondary: '#151B2B',
      accent: '#6D28D9',
      highlight: '#A78BFA',
    },
  },
  fonts: {
    heading: 'Inter, -apple-system, system-ui, sans-serif',
    body: 'Inter, -apple-system, system-ui, sans-serif',
  },
  styles: {
    global: {
      'html, body': {
        background: 'brand.primary',
        color: 'white',
        minHeight: '100vh',
        scrollBehavior: 'smooth',
      },
      '@keyframes rainbow': {
        '0%': {
          boxShadow: '0 0 15px #ff0000, 0 0 25px #ff0000',
        },
        '20%': {
          boxShadow: '0 0 15px #00ff00, 0 0 25px #00ff00',
        },
        '40%': {
          boxShadow: '0 0 15px #0000ff, 0 0 25px #0000ff',
        },
        '60%': {
          boxShadow: '0 0 15px #ff00ff, 0 0 25px #ff00ff',
        },
        '80%': {
          boxShadow: '0 0 15px #ffff00, 0 0 25px #ffff00',
        },
        '100%': {
          boxShadow: '0 0 15px #ff0000, 0 0 25px #ff0000',
        },
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'medium',
        borderRadius: 'full',
      },
      variants: {
        solid: {
          bg: 'brand.accent',
          color: 'white',
        },
        outline: {
          borderColor: 'brand.accent',
          color: 'brand.accent',
        },
        ghost: {
          color: 'gray.400',
        },
      },
    },
    Link: {
      baseStyle: {
        _hover: {
          textDecoration: 'none',
          color: 'brand.accent',
        },
        transition: 'all 0.2s ease-in-out',
      },
    },
    Heading: {
      baseStyle: {
        color: 'white',
      },
    },
    Container: {
      baseStyle: {
        maxW: 'container.xl',
      },
    },
    Tag: {
      variants: {
        subtle: {
          container: {
            bg: 'whiteAlpha.200',
            color: 'white',
          },
        },
      },
    },
    Card: {
      baseStyle: {
        container: {
          bg: 'whiteAlpha.100',
          borderRadius: 'xl',
          overflow: 'hidden',
          transition: 'all 0.2s ease-in-out',
          _hover: {
            transform: 'translateY(-4px)',
            boxShadow: 'xl',
          },
        },
      },
    },
  },
  layerStyles: {
    gradientBg: {
      bgGradient: 'linear(to-b, brand.primary, brand.secondary, brand.primary)',
      position: 'relative',
      _before: {
        content: '""',
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        bgGradient: 'radial(circle at 50% 50%, brand.accent 0%, transparent 70%)',
        opacity: 0.05,
        pointerEvents: 'none',
      },
    },
  },
  textStyles: {
    gradient: {
      bgGradient: 'linear(to-r, brand.accent, brand.highlight)',
      bgClip: 'text',
      fontWeight: 'bold',
    },
  },
})

export default theme
