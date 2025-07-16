import {
  Box,
  Heading,
  Text,
  Stack,
  Image,
  Badge,
  Code,
  Link,
} from "@chakra-ui/react";

const screenshots = [
  {
    src: "/dashboard.png",
    alt: "Dashboard",
    caption: "Main dashboard using chartJS",
  },
  {
    src: "/asset_cards.png",
    alt: "Asset Cards",
    caption: "Assets in card view",
  },
  {
    src: "/asset_filters.png",
    alt: "Asset Filters",
    caption: "All pages have advanced filtering options and can toggle between card and table view",
  },
  {
    src: "/users.png",
    alt: "Users",
    caption: "Manage user roles, devices, and active loans",
  },
  {
    src: "/accessories.png",
    alt: "Accessories",
    caption: "Track accessories",
  },
  {
    src: "/loan_form.png",
    alt: "Loan Form",
    caption: "Loan forms with signature features",
  },
  {
    src: "/logs.png",
    alt: "Logs",
    caption: "Detailed audit trail of all transactions",
  },
  {
    src: "/reminders.png",
    alt: "Reminders",
    caption: "Warnings and reminders for overdue returns",
  },
];

export default function InventorySystemExperience() {
  return (
    <Box maxW="5xl" mx="auto" p={6}>
      <Stack gap={6}>
        <Heading size="xl">Inventory Management System</Heading>
        <Badge colorScheme="blue" w="fit-content">Workplace Project</Badge>

        <Text>
          I built a full-featured inventory management system using <strong>Node.js</strong>,
          <strong> Express.js</strong>, <strong>Sequelize ORM</strong>, and <strong>PostgreSQL</strong> to help manage IT assets
          in a structured and secure way. The system handles both hardware and users,
          offering robust CRUD operations and validations.
        </Text>

        <Text fontSize="sm" color="gray.500">
          Screenshots: Below are views from different parts of the system — dashboard, filters, logs, forms, and accessories.
        </Text>

        <Stack>
          {screenshots.map((shot) => (
            <Box
              key={shot.src}
              borderRadius="md"
              overflow="hidden"
              boxShadow="md"
              bg="white"
            >
              <Image
                src={`/experience/gos/inventory${shot.src}`}
                alt={shot.alt}
                objectFit="cover"
                transition="transform 0.3s"
                _hover={{ transform: "scale(1.03)" }}
                width="100%"
              />
              <Box px={3} py={2}>
                <Text fontWeight="semibold" fontSize="sm" textAlign="center" color="gray.700">
                  {shot.caption}
                </Text>
              </Box>
            </Box>
          ))}
        </Stack>

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

        <Link href="https://github.com/gos-dev/inventory_react" color="teal.500" isExternal>
          GitHub Repository
        </Link>
      </Stack>
    </Box>
  );
}
