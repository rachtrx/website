// pages/experience/leave-forwarding.tsx

import { Box, Heading, Text, Stack, Image, Link, Badge, SimpleGrid } from "@chakra-ui/react";

export default function LeaveForwardingExperience() {
  return (
    <Box maxW="5xl" mx="auto" p={6}>
      <Stack gap={6}>
        <Heading size="xl">Leave Forwarding Automation</Heading>
        <Badge colorPalette="green" w="fit-content">Intern Project</Badge>

        <Text>
          I developed an automated WhatsApp bot using Twilio to streamline leave reporting. 
          When a user sends a message such as <strong>&quot;I am on MC from 23/1 to 28/1&quot;</strong>, the system parses the dates, 
          calculates the duration, and prompts the user to confirm or cancel.
        </Text>

        <Text>
          Once confirmed, the bot forwards the MC record to all relevant personnel and updates a SharePoint list via the <strong>Microsoft Graph API</strong>. 
          This system reduced manual logging effort and improved tracking efficiency for HR.
        </Text>

        <SimpleGrid columns={{ base: 1, md: 2 }} gap={1}>
          <Box>
            <Image
              src="/experience/gos/request.png"
              alt="Twilio WhatsApp MC Bot Confirmation"
              borderRadius="md"
              boxShadow="md"
            />
            <Text fontSize="sm" color="gray.500" mt={2}>
              Screenshot: Auto-generated confirmation message with actionable buttons and fallback options.
            </Text>
          </Box>

          <Box>
            <Image
              src="/experience/gos/forward.png"
              alt="Twilio WhatsApp MC Bot Confirmation"
              borderRadius="md"
              boxShadow="md"
            />
            <Text fontSize="sm" color="gray.500" mt={2}>
              Screenshot: Auto-generated forwarded message.
            </Text>
          </Box>
        </SimpleGrid>
        
        <Stack gap={2}>
          <Text><strong>Technologies:</strong> Twilio WhatsApp API, Microsoft Graph API, Python, Postgres</Text>
          <Text><strong>Key Features:</strong></Text>
          <Box pl={4}>
            <ul>
              <li>✔️ Regex to extract leave periods from text</li>
              <li>✔️ Dynamic confirmation messages via Twilio templates</li>
              <li>✔️ Daily updates for important personnel</li>
              <li>✔️ SharePoint integration for HR logging</li>
              <li>✔️ Support for early return and MC correction</li>
            </ul>
          </Box>
        </Stack>

        <Link href="https://github.com/rachtrx/chatbot" color="teal.500">
          GitHub Repository
        </Link>
      </Stack>
    </Box>
  );
}
