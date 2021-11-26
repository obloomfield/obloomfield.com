import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  LinkBox,
  LinkOverlay,
  Box,
  Text,
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
import { ChevronRightIcon, ExternalLinkIcon, InfoIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear, BioYearItal } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoDiscord,
  IoGitMergeSharp,
  IoTelescope,
  IoExtensionPuzzle,
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
            <Button rightIcon={<IoExtensionPuzzle />} colorScheme="teal">
              Puzzles
            </Button>
          </NextLink>
          <NextLink href="/works">
            <Button rightIcon={<ExternalLinkIcon />} colorScheme="teal">
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
          WORK ON THIS INTRO
          Hi there! I&apos;m Orion, a second-year student at Brown University. Through research opportunities
          and personal work, I am experienced building full-stack platforms and visualizations for 
          computational biology and other fields
          utilizing big data, as well as working on general software engineering webapps for 
          music theory, crypto, and puzzle competitons.
          <br></br><br></br>
          I am excited for a career in biotechnology and software engineering, where I can utilize my
          research and software skills to implement platforms and visualizations that aid further research or clinical work.
          <br></br><br></br>
          In my free time, I sing in choir and acapella, tutor high schoolers in math and science, and write puzzles for competitions 
          and escape rooms.
          <br></br><br></br>
          I hope this site is an effective medium to hold my cs project and puzzle writing content in one cohesive package. 
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
            <Meta colorScheme="red">Java</Meta><Meta colorScheme="red">SQL</Meta><Meta colorScheme="purple">TypeScript</Meta><Meta colorScheme="purple">JavaScript</Meta><Meta colorScheme="blue">React</Meta>
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
            <Meta colorScheme="purple">JavaScript</Meta><Meta colorScheme="blue">React</Meta><Meta colorScheme="blue">Next.js</Meta><Meta colorScheme="blue">Chakra-UI</Meta><Meta colorScheme="blue">Three.js</Meta>
          </GridItem>
          <GridItem
            href="https://obloomfield.github.io/laddtest/"
            title="Brown Puzzle Club"
            thumbnail={thumbProj2}
          >
            Responsive website for team login, leaderboard, and puzzle hunt content.
            <br></br>
            <Meta colorScheme="red">Python</Meta><Meta colorScheme="red">SQL</Meta><Meta>Javascript</Meta><Meta colorScheme="blue">Django</Meta>
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
          <Center><Icon as={IoGitMergeSharp} w={8} h={8}/></Center>
          <Center><Text fontSize={"lg"}>
              <b>Research Assistant</b>
          </Text></Center>
          <Center><Text fontSize={"lg"}>
              <Link href='https://sites.brown.edu/gmilab/'>Dr. Uzun's Genomics and Machine Intelligence Lab</Link>
          </Text></Center>
          <Center><Text fontSize={"md"}>
              <i>Care New England | Aug. 2024 - Present</i>
          </Text></Center>
          <UnorderedList ml="30px"fontSize={"sm"}>
              <ListItem >Actively innovating on a protein-protein interaction analytics framework that is already used by hundreds of researchers.</ListItem>
              <ListItem >Implemented server-side analysis optimizations which save research scientists in the PPI field hours of computation.</ListItem>
              <ListItem >Building an interactive web application that generates multi-layer graph networks from protein-protein interaction data with various analytic frameworks</ListItem>  
        </UnorderedList>
        </Box>
        <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="left"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        >
          <Center><Icon as={IoTelescope} w={8} h={8}/></Center>
          <Center><Text fontSize={"lg"}>
              <b>Observatory Assistant</b>
          </Text></Center>
          <Center><Text fontSize={"lg"}>
              <Link href='https://www.brown.edu/Departments/Physics/Ladd/'>Ladd Observatory</Link>
          </Text></Center>
          <Center><Text fontSize={"md"}>
              <i>Brown U. Dept. of Physics | Aug. 2024 - Present</i>
          </Text></Center>
          <UnorderedList ml="30px"fontSize={"sm"}>
              <ListItem >Lead group observatory viewing sessions, operating multiple sets of telescope equipment.</ListItem>
              <ListItem >Designing new website for the observatory - <i>website coming soon!</i></ListItem>
              {/* <ListItem >Building an interactive web application that generates multi-layer graph networks from protein-protein interaction data with various analytic frameworks</ListItem>   */}
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
          <BioYearItal ></BioYearItal>
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
          Service
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
          <BioYearItal ></BioYearItal>
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
          Skills
        </Heading>
        <Meta colorScheme={"teal"} fontSize={"md"} variant={"outline"}>Test</Meta><Meta colorScheme={"white"} fontSize={"md"}>Test</Meta><Meta colorScheme={"white"} fontSize={"md"}>Test</Meta>
        <Meta colorScheme={"white"} fontSize={"md"}>Test</Meta><Meta colorScheme={"white"} fontSize={"md"}>Test</Meta><Meta colorScheme={"white"} fontSize={"md"}>Test</Meta>
        <Meta colorScheme={"white"} fontSize={"md"}>Test</Meta><Meta colorScheme={"white"} fontSize={"md"}>Test</Meta><Meta colorScheme={"white"} fontSize={"md"}>Test</Meta>
      </Section>

      {/* <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Life Bucket List (One day, I hope to...)
        </Heading>
        <UnorderedList>
            <ListItem>Lorem ipsum dolor sit amet</ListItem>
            <ListItem>Work </ListItem>
            <ListItem>Work on auto-grading/automated-content platforms for CS that are 
              implemented easily into high schools/middle schools, 
              lowering the cost of entry for earlier education to establish CS curricula</ListItem>
            <ListItem>Become a high school teacher</ListItem>
            <ListItem>Join a casually-touring adult choir</ListItem>
            <ListItem>Win the MIT Mystery Hunt</ListItem>
          </UnorderedList>
        
      </Section> */}

      

      

      <Section delay={0.35}>
        <Heading as="h3" variant="section-title">
          Links
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/craftzdog" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
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
                colorScheme="teal"
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
                colorScheme="teal"
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
                colorScheme="teal"
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
                colorScheme="teal"
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
