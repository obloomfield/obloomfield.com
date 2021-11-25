import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  LinkBox,
  LinkOverlay,
  Box,
  Image,
  SimpleGrid,
  Button,
  List,
  ListItem,
  Center,
  Icon,
  useColorModeValue,
  UnorderedList,
  HStack
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoDiscord
} from 'react-icons/io5'
import thumbProj1 from '../public/images/links/prot2.png'
import thumbProj2 from '../public/images/links/ladd2.png'
import {Meta} from '../components/work'

const Home = () => (
  <Layout>
    <Container>
      {/* <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        Hello, I&apos;m a full-stack developer based in Japan!
      </Box> */}

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Center>
            <Heading as="h2" variant="page-title">
              Orion Bloomfield
            </Heading>
          </Center>
          <Center>
            <p>Student Researcher, Software Engineer</p>
          </Center>
          <Center>
            <p>CS + APMA-Bio{' '}
            <Link href="https://www.brown.edu/" target="_blank" >
               @Brown U
            </Link>
          </p>
          </Center>
          <Center>~~~</Center>
          <Center>
          <BioSection>
            <BioYear>Focus:</BioYear>
            
            Computational Biology, Deep Learning, Full Stack
          </BioSection>
          </Center>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          
          {/* <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/takuya.jpg"
            alt="Profile image"
          /> */}
        </Box>
      </Box>
      
      <Box align="center" my={4} >
        <HStack spacing="10px" justify="center">
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Projects
            </Button>
          </NextLink>
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Puzzles
            </Button>
          </NextLink>
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Résumé
            </Button>
          </NextLink>
        </HStack>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About
        </Heading>
        <Paragraph>
          Hi there! I&apos;m a second-year student at Brown University. I have experience building
          full-stack platforms and visualizations for computational biology and other fields
          utilizing big data, as well as working on general software engineering webapps for 
          music theory, crypto, and puzzle competitons.
          <br></br><br></br>
          I am excited for a career in biotechnology and software engineering, where I can utilize my
          research and software skills to implement platforms and visualizations that aid further research or clinical work.
        </Paragraph>
        {/* <Box align="center" my={4}>
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box> */}
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Education
        </Heading>
        <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="left"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        >
        <BioSection fontSize={"lg"}>
          <BioYear >2020-2024</BioYear>
          Brown University - <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            // borderStyle="solid"
            maxWidth="20px"
            display="inline-block"
            // borderRadius="full"
            src="/images/seal-brown.png"
            alt="Brown Logo"
            justifyContent={"right"}
            href="https://www.brown.edu/"
          ></Image>
        </BioSection>
        <BioSection fontSize={"sm"}>
          <BioYear></BioYear>
          Bachelor of Science - Computer Science
        </BioSection>
        <BioSection fontSize={"sm"}>
          <BioYear></BioYear>
          Bachelor of Science - Applied Math / Biology

        </BioSection>
        <UnorderedList ml="30px">
            <ListItem fontSize={"sm"}><i><b>Relevant Coursework:</b></i> <br></br>Accelerated Intro to CS, Computational Molecular Biology, Deep Learning, Software
Engineering, Organic Chemistry, Blockchains and Cryptocurrencies, Advanced Statistical Inference</ListItem>
          </UnorderedList>
          
        </Box>
      
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Current Projects
        </Heading>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://proteinarium.brown.edu/"
            title="Proteinarium"
            thumbnail={thumbProj1}
          >
            Responsive, modern protein-protein interaction analysis webapp. Actively used by numerous PPI researchers.
            <br></br>
            <Meta>Java</Meta><Meta>SQL</Meta><Meta>TypeScript</Meta><Meta>JavaScript</Meta><Meta>React</Meta>
          </GridItem>
          <GridItem
            href="https://obloomfield.github.io/laddtest/"
            title="Ladd Observatory"
            thumbnail={thumbProj2}
          >
            Updated website for the Ladd Observatory @ Brown. Holds historical imaging and booking.
            <br></br>
            <Meta>HTML</Meta><Meta>CSS</Meta><Meta>JavaScript</Meta>
          </GridItem>
          <GridItem
            href="https://obloomfield.github.io/laddtest/"
            title="This Site"
            thumbnail={thumbProj2}
          >
            Kind of meta, holds all my portfolio info in one place!
            <br></br>
            <Meta>React</Meta><Meta>Next.js</Meta><Meta>Chakra-UI</Meta>
          </GridItem>
          <GridItem
            href="https://obloomfield.github.io/laddtest/"
            title="Ladd Observatory"
            thumbnail={thumbProj2}
          >
            Updated Website for the Ladd Observatory @ Brown
            <br></br>
            <Meta>React</Meta><Meta>Next.js</Meta><Meta>Chakra-UI</Meta>
          </GridItem>
        </SimpleGrid>
      </Section>

      <Section delay={0.25}>
        <Heading as="h3" variant="section-title">
          Experience
        </Heading>
        <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="left"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        >
        <BioSection fontSize={"sm"}>
          <BioYear >Research Assistant</BioYear>
          Dr. Uzun's Genomics and Machine Intelligence Lab
        </BioSection>
        <BioSection fontSize={"sm"}>
          <BioYear></BioYear>
          <i>Care New England</i>
        </BioSection>
        <UnorderedList ml="30px"fontSize={"sm"}>
            <ListItem >Actively innovating on a protein-protein interaction analytics framework that is already used by hundreds of researchers.</ListItem>
            <ListItem >Actively innovating on a protein-protein interaction analytics framework that is already used by hundreds of researchers.</ListItem>
          </UnorderedList>
          
        </Box>
      </Section>

      <Section delay={0.25}>
        <Heading as="h3" variant="section-title">
          Leadership
        </Heading>
        <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="left"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        >
        <BioSection fontSize={"sm"}>
          <BioYear >Research Assistant</BioYear>
          Dr. Uzun's Genomics and Machine Intelligence Lab
        </BioSection>
        <BioSection fontSize={"sm"}>
          <BioYear></BioYear>
          <i>Care New England</i>
        </BioSection>
        <UnorderedList ml="30px"fontSize={"sm"}>
            <ListItem >Actively innovating on a protein-protein interaction analytics framework that is already used by hundreds of researchers.</ListItem>
            <ListItem >Actively innovating on a protein-protein interaction analytics framework that is already used by hundreds of researchers.</ListItem>
          </UnorderedList>
          
        </Box>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          One day, I dream to...
        </Heading>
        <UnorderedList>
            <ListItem>Lorem ipsum dolor sit amet</ListItem>
            <ListItem>Work </ListItem>
            {/* <ListItem>Work on auto-grading/automated-content platforms for CS that are 
              implemented easily into high schools/middle schools, 
              lowering the cost of entry for earlier education to establish CS curricula</ListItem> */}
            <ListItem>Become a high school teacher</ListItem>
            <ListItem>Join a casually-touring adult choir</ListItem>
            <ListItem>Join a casually-touring adult choir</ListItem>
            <ListItem>Win the MIT Mystery Hunt</ListItem>
          </UnorderedList>
        {/* <Paragraph>
          Puzzles, Choir, Acapella, Teaching, Web-Visualizations, */}
          {/* {' '}
          <Link href="https://illust.odoruinu.net/" target="_blank">
            Drawing
          </Link> */}
          {/* Playing Drums,{' '}
          <Link href="https://500px.com/p/craftzdog" target="_blank">
            Photography
          </Link> */}
        {/* </Paragraph> */}
      </Section>

      

      

      <Section delay={0.35}>
        <Heading as="h3" variant="section-title">
          Links
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/craftzdog" target="_blank">
              <Button
                variant="ghost"
                colorScheme="purple"
                leftIcon={<Icon as={IoLogoGithub} />}
              >
                @obloomfield
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/inkdrop_app" target="_blank">
              <Button
                variant="ghost"
                colorScheme="purple"
                leftIcon={<Icon as={IoLogoTwitter} />}
              >
                @inkdrop_app
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/craftzdog" target="_blank">
              <Button
                variant="ghost"
                colorScheme="purple"
                leftIcon={<Icon as={IoLogoTwitter} />}
              >
                @craftzdog
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://instagram.com/craftzdog" target="_blank">
              <Button
                variant="ghost"
                colorScheme="purple"
                leftIcon={<Icon as={IoLogoInstagram} />}
              >
                @craftzdog
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://discord.gg/QfsG5Kj" target="_blank">
              <Button
                variant="ghost"
                colorScheme="purple"
                leftIcon={<Icon as={IoLogoDiscord} />}
              >
                Discord
              </Button>
            </Link>
          </ListItem>
        </List>

        

        {/* <Box align="center" my={4}>
          <NextLink href="/posts">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Popular posts
            </Button>
          </NextLink>
        </Box> */}
      </Section>
    </Container>
  </Layout>
)

export default Home
