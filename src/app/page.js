/* eslint-disable react/no-unescaped-entities */
import {
  Flex,
  Text,
  Link,
  Image,
  VStack,
  HStack,
  Container,
  Highlight,
  ListItem,
  List,
} from "@chakra-ui/react";
import NextLink from "next/link";

export default function Home() {
  return (
    <Container maxW="container.xl" p={10} width={{ base: "100%", md: "85%" }}>
      <Flex
        direction="column"
        height="100%"
        justify="center"
        alignItems="center"
        className="home"
      >
        <HStack
          spacing={8}
          justify={{ base: "center", md: "flex-end" }}
          width="100%"
          pb={{ base: 10, md: 10 }}
        >
          {/* <Link as={NextLink} href="/images/resume.pdf" passHref>
            <Text as="a">resume</Text>
          </Link> 
          <Link as={NextLink} href="/projects" passHref>
            <Text as="a">projects</Text>
          </Link> */}
        </HStack>

        <Flex direction={{ base: "column", md: "row" }} p={{ base: 4, md: 10 }}>
          {/* Left Side - Text Section */}
          <VStack spacing={4} align="flex-start" flex="1" maxW="650px">
            <Text
              fontStyle="italic"
              fontSize={{ base: "4xl", md: "8xl" }}
              textAlign="left"
            >
              Hey, I'm Philip
            </Text>

            <Text
              fontStyle="italic"
              fontSize={{ base: "xl", md: "2xl" }}
              textAlign="left"
            >
              I'm studying
              <Highlight
                query={["Mechanical Engineering", "University of Toronto"]}
                styles={{
                  px: "2",
                  py: "0",
                  bg: "#A2C6EA",
                  rounded: "full",
                  lineHeight: "0.5",
                }}
              >
                Mechanical Engineering at the University of Toronto
              </Highlight>
            </Text>

            <VStack width="100%" pt={5} spacing={2} align="flex-start">
              <Text>currently, I'm...</Text>
              <List spacing={1} pl={4} styleType="disc">
                <ListItem>
                  interning at 
                  <Link
                    href="https://www.ttc.ca/Jobs/Featured-jobs/Engineering"
                    isExternal
                    textDecoration="none"
                    _hover={{ textDecoration: "none" }}
                  >
                    <Text
                      as="span"
                      mx={1}
                      fontWeight="bold"
                      borderBottom="2px solid #76A2CE"
                      color="#76A2CE"
                    >
                      Toronto Transit Commission
                    </Text>
                  </Link>
                  in Toronto, working on streetcar reliability and subway engineering projects
                </ListItem>
                <ListItem>
                  seeking Winter 2027 internships!
                  <Link
                    href="mailto:phillip.wu@mail.utoronto.ca"
                    isExternal
                    textDecoration="none"
                    _hover={{ textDecoration: "none" }}
                  >
                    <Text
                      as="span"
                      mx={1}
                      fontWeight="bold"
                      borderBottom="2px solid #76A2CE"
                      color="#76A2CE"
                    >
                      Get in touch!
                    </Text>
                  </Link>
                </ListItem>
              </List>

              <Text pt={5}>in the past, I...</Text>
              <List spacing={1} pl={4} styleType="disc">
                <ListItem>
                  designed mechanical systems for an autonomous delivery rover at
                  <Link
                    href="https://danbotrobotics.com/"
                    isExternal
                    textDecoration="none"
                    _hover={{ textDecoration: "none" }}
                  >
                    <Text
                      as="span"
                      mx={1}
                      fontWeight="bold"
                      borderBottom="2px solid #76A2CE"
                      color="#76A2CE"
                    >
                      Danbot Robotics
                    </Text>
                    in Toronto
                  </Link>
                </ListItem>
                <ListItem>
                  manufactured the aerobody of a hydrogen fuel cell eco car with
                  <Link
                    href="https://www.utsm.ca/"
                    isExternal
                    textDecoration="none"
                    _hover={{ textDecoration: "none" }}
                  >
                    <Text
                      as="span"
                      mx={1}
                      fontWeight="bold"
                      borderBottom="2px solid #76A2CE"
                      color="#76A2CE"
                    >
                      UTSM
                    </Text>
                  </Link>
                </ListItem>
                <ListItem>
                  integrated sensor data into a vehicle telemetry system with
                  <Link
                    href="https://www.utra.ca/art.html"
                    isExternal
                    textDecoration="none"
                    _hover={{ textDecoration: "none" }}
                  >
                    <Text
                      as="span"
                      mx={1}
                      fontWeight="bold"
                      borderBottom="2px solid #76A2CE"
                      color="#76A2CE"
                    >
                      UTRA ART
                    </Text>
                  </Link>
                </ListItem>
              </List>

              <Text pt={5}>in other times, I'm...</Text>
              <List spacing={1} pl={4} styleType="disc">
                <ListItem>
                  exploring and eating my way through the Toronto area
                </ListItem>
                <ListItem>
                  tinkering with cars, computers, and anything mechanical
                </ListItem>

              </List>
            </VStack>
          </VStack>

          {/* Right Side - Image Stack */}
          <VStack
            spacing={{ base: 4, md: 4 }}
            justify="center"
            ml={{ md: 10 }}
            mt={{ base: 8, md: 12 }}
            width={{ base: "100%", md: "auto" }}
          >
            <Image
              borderRadius="full"
              src="/images/coit.jpg"
              alt="Bay Bridge"
              boxSize={{ base: "60px", md: "60px" }}
              objectFit="cover"
              transition="transform 0.3s ease"
              _hover={{ transform: "scale(1.1)" }}
            />
            <Image
              borderRadius="full"
              src="/images/IMG_2918.jpg"
              alt="San Francisco"
              boxSize={{ base: "80px", md: "100px" }}
              objectFit="cover"
              display={{ base: "none", md: "block" }}
              transition="transform 0.3s ease"
              _hover={{ transform: "scale(1.1)" }}
            />
            <Image
              borderRadius="full"
              src="/images/IMG_0952.JPEG"
              alt="Philip"
              boxSize={{ base: "100px", md: "150px" }}
              objectFit="cover"
              transition="transform 0.3s ease"
              _hover={{ transform: "scale(1.1)" }}
            />
            <Image
              borderRadius="full"
              src="/images/IMG_0149.JPG"
              alt="Beach"
              boxSize={{ base: "60px", md: "100px" }}
              objectFit="cover"
              transition="transform 0.3s ease"
              _hover={{ transform: "scale(1.1)" }}
            />
            <Image
              borderRadius="full"
              src="/images/toronto.JPG"
              alt="Toronto"
              boxSize={{ base: "60px", md: "60px" }}
              objectFit="cover"
              display={{ base: "none", md: "block" }}
              transition="transform 0.3s ease"
              _hover={{ transform: "scale(1.1)" }}
            />
          </VStack>
        </Flex>

        {/* Footer Section */}
        <Flex
          direction={{ base: "column", md: "row" }}
          justifyContent="space-between"
          alignItems="center"
          width="100%"
          pt={8}
        >
          <HStack spacing={4} mb={{ base: 4, md: 0 }}>
            <Link href="https://www.linkedin.com/in/philipxwu/" isExternal>
              <Image src="/images/linkedin.png" alt="LinkedIn" boxSize="24px" />
            </Link>
            <Link href="mailto:phillip.wu@mail.utoronto.ca" isExternal>
              <Image src="/images/mail.png" alt="Mail" boxSize="24px" />
            </Link>
          </HStack>
          <Text>© Philip Wu, 2026</Text>
        </Flex>
      </Flex>
    </Container>
  );
}
