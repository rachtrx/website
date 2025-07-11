"use client";

import NextLink from "next/link";
import {
  Badge,
  Box,
  Flex,
  HStack,
  IconButton,
  Link,
  useDisclosure,
} from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import { ColorModeButton } from "@/components/ui/color-mode"
// import { toaster } from "@/components/ui/toaster"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/education", label: "Education" },
  { href: "/experience", label: "Work" },
  { href: "/competitions", label: "Competitions" },
//   { href: "/blog", label: "Blog" },
];

export default function NavBar() {
  const { open, onToggle } = useDisclosure();

  return (
    <Box as="header" w="full" px={4} py={3} boxShadow="sm">
      <Flex maxW="6xl" mx="auto" align="center" justify="space-between">
        {/* logo / name */}
        <Link
          as={NextLink}
          href="/"
          fontWeight="bold"
          fontSize="lg"
          _hover={{ textDecoration: "none" }}
        >
            Rachmiel Teo
        </Link>

        <Badge colorPalette="orange" variant="subtle">
          🚧 Under Construction
        </Badge>

        <HStack
          as="nav"
          gap={6}
          display={{ base: "none", md: "flex" }}
          fontWeight="medium"
        >
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              as={NextLink}
              href={href}
              _hover={{ color: "blue.500" }}
            >
              {label}
            </Link>
          ))}
        </HStack>

        <ColorModeButton/>

        <IconButton
          aria-label="Menu"
          
          variant="ghost"
          display={{ base: "flex", md: "none" }}
          onClick={onToggle}
        >
          <FiMenu />
        </IconButton>
      </Flex>

      {open && (
        <Box
          as="nav"
          display={{ md: "none" }}
          px={4}
          pb={4}
          fontWeight="medium"
        >
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              as={NextLink}
              href={href}
              display="block"
              py={2}
              _hover={{ color: "blue.500" }}
            >
              {label}
            </Link>
          ))}
        </Box>
      )}
    </Box>
  );
}
