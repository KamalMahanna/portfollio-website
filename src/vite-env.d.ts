/// <reference types="vite/client" />
import { HTMLChakraProps } from '@chakra-ui/react'
import { HTMLMotionProps, TargetAndTransition, VariantLabels } from 'framer-motion'

type Merge<P, T> = Omit<P, keyof T> & T;

type MotionBoxProps = Merge<HTMLChakraProps<"div">, HTMLMotionProps<"div">>;

declare module 'framer-motion' {
  export interface AnimateProps {
    initial?: boolean | VariantLabels | TargetAndTransition;
    animate?: boolean | VariantLabels | TargetAndTransition;
    exit?: VariantLabels | TargetAndTransition;
    transition?: Record<string, unknown>;
  }
}

declare global {
  interface Window {
    __chakra_runtime: unknown;
  }
}
