import { Badge, Card, Heading, Link } from "@chakra-ui/react";

export default function FootballProject() {
	return (
		<Card.Root variant="outline" p={2}>
			<Card.Body>
				<Card.Title>
					<Heading size="md">Football Result Predictor</Heading>
					<Badge colorPalette="green">Machine Learning</Badge>
				</Card.Title>
				<Card.Description>
					A Python-based ML model that predicts football match outcomes using historical match data, team and player stats. 
					Implemented with scikit-learn, pandas, and numpy, it explores features like goals, possession, and form indicators.
					The repository includes a comprehensive analysis pipeline, model training workflows, and evaluation metrics.
				</Card.Description>
			</Card.Body>
			<Card.Footer>
				<Link href="https://github.com/LEPK02/sc1015" color="teal.500">
					View on GitHub →
				</Link>
			</Card.Footer>
		</Card.Root>
	)
}