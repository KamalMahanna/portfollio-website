/// <reference types="vite/client" />
import { HTMLChakraProps, ThemingProps } from '@chakra-ui/react'
import { HTMLMotionProps } from 'framer-motion'

type Merge<P, T> = Omit<P, keyof T> & T;

type MotionBoxProps = Merge<HTMLChakraProps<"div">, HTMLMotionProps<"div">>;

declare module 'framer-motion' {
  export interface AnimateProps {
    initial?: any;
    animate?: any;
    exit?: any;
    transition?: any;
  }
}

declare global {
  interface Window {
    __chakra_runtime: any;
  }
}
