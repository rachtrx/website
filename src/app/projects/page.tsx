"use client";

import {
  Box,
  Heading,
  Stack,
  Text,
  Separator,
	SimpleGrid,
} from "@chakra-ui/react";
import UpcomingProjects from "./upcoming";
import FootballProject from "./football";
import YieldSpreadProject from "./yields";
import HouseHuntProject from "./house";

export default function HomePage() {
  return (
    <Box maxW="6xl" mx="auto" p={6}>
      <Stack gap={10}>
        <Text fontSize="lg">
          This is a collection of the projects I&apos;ve built and the ones I&apos;m planning to work on soon.
        </Text>

        <Separator />

        <Heading size="lg">🚧 Upcoming Projects</Heading>
        <UpcomingProjects />

        <Separator />

        <Heading size="lg">🛠️ Projects</Heading>
				<SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
					<HouseHuntProject/>
					<FootballProject/>
					<YieldSpreadProject/>
				</SimpleGrid>
      </Stack>
    </Box>
  );
}
