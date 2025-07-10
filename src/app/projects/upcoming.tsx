"use client";

import {
  Heading,
  Badge,
  SimpleGrid,
  Card
} from "@chakra-ui/react";

export default function UpcomingProjects() {
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
			<Card.Root variant="outline" p={2}>
				<Card.Body>
					<Card.Title>
						<Heading size="md">Bitcoin Trading Bot</Heading>
						<Badge colorPalette="orange">Finance</Badge>
					</Card.Title>
					<Card.Description>
						A real-time trading bot for Bitcoin using market data APIs,
						backtesting strategies, and automated execution via exchange
						integration. Will incorporate statistical signals and risk
						controls.
					</Card.Description>
				</Card.Body>
			</Card.Root>

			<Card.Root variant="outline" p={2}>
				<Card.Body>
					<Card.Title>
						<Heading size="md">Mahjong AI Bot</Heading>
						<Badge colorPalette="purple">AI / Game</Badge>
					</Card.Title>
					<Card.Description>
						An AI-powered Mahjong bot that simulates 4-player games,
						encodes tiles and states, and learns optimal decisions like
						Chi, Pung, or throw via reinforcement learning.
					</Card.Description>
				</Card.Body>
			</Card.Root>
		</SimpleGrid>
  );
}
