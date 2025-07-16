"use client";

import {
  Box,
  Flex,
  Stack,
  Heading,
  Badge,
} from "@chakra-ui/react";

export default function UrecaProject() {
  return (
    <Flex justify="center" px={4} py={10}>
      <Stack gap={10} maxW="6xl" w="100%" align="center">
        <Heading size="xl" textAlign="center">
          URECA Project: Uncertainty Quantification over Financial Time Series with Conformalized Risk Modelling
        </Heading>

        {/* Final Report */}
        <Box textAlign="center" w="100%">
          <Heading size="md" mb={2}>📄 Final Report</Heading>
          <Box
            width="100%"
            maxW="800px"
            height="600px"
            mx="auto"
            border="1px solid #ccc"
            borderRadius="8px"
            overflow="hidden"
          >
            <iframe
              src="/education/ureca/paper.pdf"
              title="URECA Final Report"
              width="100%"
              height="100%"
              style={{ border: "none" }}
            />
          </Box>
        </Box>

        {/* Poster Presentation */}
        <Box textAlign="center" w="100%">
          <Heading size="md" mb={2}>
            📌 Poster Presentation{" "}
            <Badge colorPalette="yellow">🥇 1st Place - URECA Showcase</Badge>
          </Heading>
          <Box
            width="100%"
            maxW="800px"
            height="600px"
            mx="auto"
            border="1px solid #ccc"
            borderRadius="8px"
            overflow="hidden"
          >
            <iframe
              src="/education/ureca/poster.pdf"
              title="URECA Poster"
              width="100%"
              height="100%"
              style={{ border: "none" }}
            />
          </Box>
        </Box>
      </Stack>
    </Flex>
  );
}
