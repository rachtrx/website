/* app/competitions/page.tsx */
import Image from "next/image";
import {
  Box,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  List,
	Link,
  Separator,
	DataList,
	Card
} from "@chakra-ui/react";
import { FiAward } from "react-icons/fi";
import React from "react";

const trackData = [
  {
    task: "ASR",
    models: [
      "NeMo parakeet-tdt-0.6b-v2",
      "Whisper Large",
      "Whisper Small"
    ],
    tools: ["CTranslate2-converted"],
    metric: "WER"
  },
  {
    task: "Computer Vision",
    models: ["YOLOv8/10/11", "DETR", "Faster RCNN"],
    tools: ["SAHI", "p2 architecture"],
    metric: "mAP"
  },
  {
    task: "OCR",
    models: ["PaddleOCRv3/4/5", "EasyOCR", "DocTR", "SuryaOCR"],
    tools: ["PaddleOCR2Pytorch"],
    metric: "WER"
  },
  {
    task: "Reinforcement Learning",
    models: ["YOLOv8/10/11", "DETR", "Faster RCNN"],  // same as CV in your original
    tools: ["TorchRL", "Reward Shaping", "Curriculum Training"],
    metric: "Average Reward"
  }
];

export default function CompetitionsPage() {
  return (
    <Box as="main" maxW="5xl" mx="auto" py={{ base: 12, md: 16 }} px={4}>
      <Heading as="h1" size="xl" mb={4}>
        Competitions
      </Heading>

      <Heading as="h2" size="lg" mb={2}>
        TIL-AI 2025 Challenge
      </Heading>
      <Text mb={6}>
        Code Breakers placed <strong>1st overall</strong> out of over 50 teams.
      </Text>
			<Link href="https://www.facebook.com/share/p/1A1t3jZB7q/" variant="underline" colorPalette="teal">
				Link to DSTA Facebook post
			</Link>

      <SimpleGrid columns={{ base: 1, md: 2 }} gap={6} mb={8}>
        <Image
          src="/podium.jpg"
          alt="Receiving the TIL-AI 2025 medals"
          width={800}
          height={600}
          style={{ borderRadius: 8 }}
          priority
        />
        <Image
          src="/demo.gif"
          alt="RL agent visualisation"
          width={800}
          height={600}
          style={{ borderRadius: 8 }}
        />
        <Image
          src="/team.jpg"
          alt="Team Photo"
          width={800}
          height={600}
          style={{ borderRadius: 8 }}
        />
				<Image
          src="/indiv.jpg"
          alt="Speaking after our win"
          width={800}
          height={600}
          style={{ borderRadius: 8 }}
        />
        <Image
          src="/result.png"
          alt="Results from the finals"
          width={800}
          height={600}
          style={{ borderRadius: 8 }}
        />
      </SimpleGrid>

      <Separator mb={6} />

      {/* bullets */}
			<Heading as="h3" size="md">
				My contributions
			</Heading>
			<SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
				{trackData.map((entry, idx) => (
					<Card.Root
						key={idx}
					>
						<Card.Body gap="2" p="2">
							<Card.Title>{entry.task}</Card.Title>
							<Card.Description>
								<DataList.Root gap="2" orientation="horizontal">
									<DataList.Item>
										<DataList.ItemLabel>Models</DataList.ItemLabel>
										<DataList.ItemValue>{entry.models.join(", ")}</DataList.ItemValue>
									</DataList.Item>
									<DataList.Item>
										<DataList.ItemLabel>Tools</DataList.ItemLabel>
										<DataList.ItemValue>{entry.tools.join(", ")}</DataList.ItemValue>
									</DataList.Item>
									<DataList.Item>
										<DataList.ItemLabel>Metric</DataList.ItemLabel>
										<DataList.ItemValue>{entry.metric}</DataList.ItemValue>
									</DataList.Item>
								</DataList.Root>
							</Card.Description>
						</Card.Body>
					</Card.Root>
				))}
			</SimpleGrid>

      <Separator my={6} />

      <VStack align="start" gap={4}>
        <Heading as="h3" size="md">
          Tech stack
        </Heading>
        <List.Root gap="2" variant="plain" align="center">
          <List.Item>Python3.10, PyTorch2.7, CUDA12.8</List.Item>
          <List.Item>FastAPI, Docker, GitHub Actions</List.Item>
        </List.Root>
      </VStack>

      <Separator my={6} />

      <VStack align="start" gap={4}>
        <Heading as="h3" size="md">
          Results
        </Heading>
        <List.Root gap="2" variant="plain" align="center">
          <List.Item>
						<List.Indicator asChild color="yellow.500">
							<FiAward/>
            </List.Indicator>
            1st place overall (grand prize)
          </List.Item>
        </List.Root>
      </VStack>
    </Box>
  );
}
