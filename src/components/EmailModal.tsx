import React, { useRef, useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  VStack,
  useToast,
  Box,
} from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';

const MotionBox = motion(Box);

interface EmailModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EmailModal = ({ isOpen, onClose }: EmailModalProps) => {
  const form = useRef<HTMLFormElement>(null);
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await emailjs.sendForm(
        'service_0coirj8',
        'template_nkotgrk',
        form.current!,
        'IGNvjN1i5RkLt31Sh'
      );

      toast({
        title: 'Email sent successfully!',
        status: 'success',
        duration: 2000,
        isClosable: true,
      });

      setTimeout(onClose, 2000);
    } catch (error) {
      toast({
        title: 'Failed to send email',
        description: 'Please try again',
        status: 'error',
        duration: 2000,
        isClosable: true,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <Modal isOpen={isOpen} onClose={onClose} isCentered>
          <ModalOverlay />
          <ModalContent
            as={motion.div}
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: { opacity: 1, y: 0 },
              exit: { opacity: 0, y: 20 }
            }}
            initial="hidden"
            animate="visible"
            exit="exit"
            bg="gray.800"
            color="white"
          >
            <ModalHeader color="brand.accent">Send Me a Message</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <form ref={form} onSubmit={handleSubmit}>
                <VStack spacing={4}>
                  <FormControl isRequired>
                    <FormLabel>Name</FormLabel>
                    <Input
                      name="user_name"
                      placeholder="Your name"
                      _placeholder={{ color: 'gray.500' }}
                      borderColor="whiteAlpha.300"
                      _hover={{ borderColor: 'brand.accent' }}
                      _focus={{ borderColor: 'brand.accent' }}
                    />
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Email</FormLabel>
                    <Input
                      name="user_email"
                      type="email"
                      placeholder="Your email"
                      _placeholder={{ color: 'gray.500' }}
                      borderColor="whiteAlpha.300"
                      _hover={{ borderColor: 'brand.accent' }}
                      _focus={{ borderColor: 'brand.accent' }}
                    />
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Subject</FormLabel>
                    <Input
                      name="subject"
                      placeholder="Subject"
                      _placeholder={{ color: 'gray.500' }}
                      borderColor="whiteAlpha.300"
                      _hover={{ borderColor: 'brand.accent' }}
                      _focus={{ borderColor: 'brand.accent' }}
                    />
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Message</FormLabel>
                    <Textarea
                      name="message"
                      placeholder="Your message"
                      _placeholder={{ color: 'gray.500' }}
                      borderColor="whiteAlpha.300"
                      _hover={{ borderColor: 'brand.accent' }}
                      _focus={{ borderColor: 'brand.accent' }}
                      rows={4}
                    />
                  </FormControl>

                  <Button
                    type="submit"
                    width="fit-content"
                    mx="auto"
                    bg="brand.accent"
                    color="white"
                    _hover={{
                      transform: "translateY(-2px)",
                      bg: "transparent",
                      boxShadow: "0 0 10px #6D28D9, 0 0 20px #6D28D9, 0 0 30px #6D28D9, 0 0 40px #6D28D9",
                    }}
                    transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                    isLoading={isLoading}
                  >
                    Send Message
                  </Button>
                </VStack>
              </form>
            </ModalBody>
          </ModalContent>
        </Modal>
      )}
    </AnimatePresence>
  );
};

export default EmailModal;
