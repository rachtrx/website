// pages/experience/inventory-system.tsx

import {
  Box,
  Heading,
  Text,
  Stack,
//   Image,
  Badge,
  Code,
  Link,
} from "@chakra-ui/react";

export default function InventorySystemExperience() {
  return (
    <Box maxW="5xl" mx="auto" p={6}>
      <Stack gap={6}>
        <Heading size="xl">Inventory Management System</Heading>
        <Badge colorPalette="blue" w="fit-content">Workplace Project</Badge>

        <Text>
          I built a full-featured inventory management system using <strong>Node.js</strong>,
          <strong> Express.js</strong>, <strong>Sequelize ORM</strong>, and <strong>PostgreSQL</strong> to help manage IT assets
          in a structured and secure way. The system handles both hardware and users,
          offering robust CRUD operations and validations.
        </Text>

        {/* <Image
          src="/images/inventory-dashboard.png"
          alt="Inventory System Dashboard"
          borderRadius="md"
          boxShadow="md"
        /> */}

        <Text fontSize="sm" color="gray.500">
          Screenshot: Main dashboard showing device status and quick action buttons.
        </Text>

        <Heading size="md">Key Functionalities</Heading>

        <Stack gap={2} pl={4}>
          <ul>
            <li>🖥️ <strong>Device Management</strong>: Add, edit, and remove laptops, tablets, phones, etc.</li>
            <li>👤 <strong>User Management</strong>: Manage user profiles, roles, and device ownership</li>
            <li>🔌 <strong>Accessory Tracking</strong>: Assign/remove chargers, styluses, keyboards</li>
            <li>🔍 <strong>Advanced Search</strong>: Filter by serial number, device type, user, or status</li>
            <li>📝 <strong>Audit Trail</strong>: Logs every assignment, return, or edit</li>
            <li>📦 <strong>Stock Overview</strong>: Real-time device availability and health status</li>
          </ul>
        </Stack>

        <Heading size="md">Technology Stack</Heading>
        <Text>
          <Code>Node.js</Code>, <Code>Express.js</Code>, <Code>Sequelize</Code>, <Code>PostgreSQL</Code>, 
          <Code>React</Code> with <Code>Chakra UI</Code> components.
        </Text>

        <Text>
          The system ensures data integrity and supports future scaling to handle hundreds of devices
          with flexible querying.
        </Text>

        <Link href="https://github.com/gos-dev/inventory_react" color="teal.500">
          Github Repository
        </Link>
      </Stack>
    </Box>
  );
}
