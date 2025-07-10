import { Box, Heading, Separator, Stack } from "@chakra-ui/react";
import LeaveForwardingExperience from "./gos/leave";
import InventorySystemExperience from "./gos/inventory";

export default function ExperiencePage() {
  return (
    <Box as="main" maxW="5xl" mx="auto" py={{ base: 12, md: 16 }} px={4}>
			<Heading as="h1" size="xl" mb={4}>
				Experiences
			</Heading>

			<Separator/>

			<Stack>
			<Heading as="h2" size="lg" mb={4}>
				Grace Orchard School
			</Heading>
			<InventorySystemExperience/>
			<LeaveForwardingExperience/>
			</Stack>
		</Box>
  )
}