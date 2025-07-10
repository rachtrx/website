'use client'; // Only if you're using App Router in Next.js 13+

import { Box, Text, HStack, Link, Icon } from '@chakra-ui/react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <Box
      as="footer"
      py={4}
      px={8}
      mt="auto"
      bg="bg.muted"
      color="fg"
      textAlign="center"
    >
      <HStack justify="center" gap={6} mb={2}>
        <Link href="https://github.com/rachtrx" aria-label="GitHub">
          <Icon as={FaGithub} boxSize={5} _hover={{ color: 'gray.800' }} />
        </Link>
        <Link href="www.linkedin.com/in/rachmiel-teo-502a53237" aria-label="LinkedIn">
          <Icon as={FaLinkedin} boxSize={5} _hover={{ color: 'blue.600' }} />
        </Link>
      </HStack>
      <Text fontSize="sm">&copy; {new Date().getFullYear()} Rachmiel Teo. All rights reserved.</Text>
    </Box>
  );
}
