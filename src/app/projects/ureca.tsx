import { Badge, Card, Heading, Link } from "@chakra-ui/react";
import NextLink from "next/link";

export default function UrecaProject() {
    return (
        <Card.Root variant="outline" p={2}>
            <Card.Body>
                <Card.Title>
                    <Heading size="md">Uncertainty Quantification over Financial Time Series with Conformalized Risk Modelling</Heading>
                    <Badge colorPalette="blue">Finance Research</Badge>
                </Card.Title>
                <Card.Description>
                    Developed a novel conformal prediction method using volatility, outperforming adaptive conformal inference in interval sharpness and coverage. Awarded 🥇 1st Place in the 2025 URECA Poster Showcase.
                </Card.Description>
            </Card.Body>
            <Card.Footer>
                <Link as={NextLink} href="/projects/ureca" color="teal.500">
                    View Project →
                </Link>
            </Card.Footer>
        </Card.Root>
    );
}