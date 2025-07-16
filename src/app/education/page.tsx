import { Heading, VStack, Text, SimpleGrid, Stat } from "@chakra-ui/react";

export default function EducationPage() {
  return (
    <VStack as="main" maxW="4xl" mx="auto" gap={6} py={12} px={4}>
      <Heading size="lg">Education</Heading>

      <VStack align="start" gap={4}>
        <Text fontWeight="semibold" fontSize="lg">
          Nanyang Technological University (NTU) — Class of 2027
        </Text>
        <Text fontSize="sm" color="fg.muted">
          School Scholarship recipient
        </Text>

        <SimpleGrid columns={[1, 2]} gap={4} w="full">
          <Stat.Root>
            <Stat.Label>B.Comp. (Hons) Computer Science</Stat.Label>
            <Stat.ValueText>4.70 / 5.00</Stat.ValueText>
            <Stat.HelpText>Current CGPA</Stat.HelpText>
          </Stat.Root>

          <Stat.Root>
            <Stat.Label>B.Sc. (Hons) Economics</Stat.Label>
            <Stat.ValueText>4.74 / 5.00</Stat.ValueText>
            <Stat.HelpText>Current CGPA</Stat.HelpText>
          </Stat.Root>
        </SimpleGrid>
      </VStack>

    </VStack>
  );
}
