import { Badge, Card, Heading, Link } from "@chakra-ui/react";

export default function YieldSpreadProject() {
	return (
		<Card.Root variant="outline" p={2}>
			<Card.Body>
				<Card.Title>
					<Heading size="md">2s–5s Bond Yield Spread Tracker</Heading>
					<Badge colorPalette="blue">Finance</Badge>
				</Card.Title>
				<Card.Description>
					A real-time yield spread tracker for 2-year and 5-year US Treasury bonds.
					Built using Python and web scraping from Investing.com, it calculates the yield spread
					and streams the results via a lightweight backend. Useful for monitoring curve inversions
					and short-term macro sentiment.
				</Card.Description>
			</Card.Body>
			<Card.Footer>
				<Link href="https://github.com/rachtrx/bond_yields" color="teal.500">
					View on GitHub →
				</Link>
			</Card.Footer>
		</Card.Root>
	);
}
