"use client";

import { Box, Heading, Text, Button } from "@chakra-ui/react";
import { toaster } from "@/components/ui/toaster"

export default function HomePage() {
  const handleDownload = () => {
    toaster.create({
      description: "File downloaded successfully",
      type: "info",
      closable: true,
    });

    // Then trigger download manually
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "resume.pdf";
    link.click();
  };

  return (
    <Box as="main" maxW="4xl" mx="auto" py={{ base: 12, md: 20 }} px={4}>
      <Heading as="h1" size="2xl" mb={4}>
        Hi, I&apos;m Rachmiel.
      </Heading>
      <Text fontSize="lg" mb={8}>
        Aspiring Quant Researcher • 
      </Text>
      <Button variant="outline" onClick={handleDownload} p={1}>
        Download Résumé
      </Button>
    </Box>
  );
}
