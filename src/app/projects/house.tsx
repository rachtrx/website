import { Badge, Card, Heading, Link, Stack } from "@chakra-ui/react";

export default function HouseHuntProject() {
	return (
		<Card.Root variant="outline" p={2}>
			<Card.Body>
				<Card.Title>
					<Heading size="md">House Hunt Platform</Heading>
					<Badge colorPalette="cyan">Full Stack</Badge>
				</Card.Title>
				<Card.Description>
					A smart housing search engine built for students to filter, sort, and paginate listings 
					using a custom MongoDB aggregation pipeline. Supports advanced multi-criteria filtering, 
					ranking by user preferences, and nested array handling for housing types. Designed for speed, 
					scalability, and clean user experience.
				</Card.Description>
			</Card.Body>
			<Card.Footer>
				<Stack gap={0}>
					<Link href="https://github.com/rachtrx/sc2006" color="teal.500">View on GitHub →</Link>
					<Link href="https://youtu.be/gsh5461p0EQ" color="teal.500">View on YouTube →</Link>
				</Stack>
			</Card.Footer>
		</Card.Root>
	);
}
