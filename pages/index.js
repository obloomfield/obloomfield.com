import { ChevronRightIcon, ExternalLinkIcon, InfoIcon } from '@chakra-ui/icons'
import {
  Badge,
  Box,
  Button,
  Center,
  Container,
  Heading,
  HStack,
  Icon,
  Image,
  Link,
  LinkBox,
  LinkOverlay,
  List,
  ListItem,
  SimpleGrid,
  Text,
  UnorderedList,
  useColorModeValue
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { FaChalkboardTeacher, FaDoorOpen, FaPuzzlePiece } from 'react-icons/fa'
import { GiFly } from 'react-icons/gi'
import {
  IoBulb,
  IoExtensionPuzzle,
  IoFlask,
  IoGitMergeSharp,
  IoLogoDiscord,
  IoLogoFacebook,
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoMicrosoft,
  IoLogoTwitter,
  IoTelescope
} from 'react-icons/io5'
import { MdLibraryMusic, MdQueueMusic } from 'react-icons/md'
import { BioSection, BioYear, BioYearItal } from '../components/bio'
import { GridItem, WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'
import Paragraph from '../components/paragraph'
import Section from '../components/section'
import { Meta } from '../components/work'
import thumbProj5 from '../public/images/links/bpc.png'
import thumbProj3 from '../public/images/links/counterpointer3.png'
import thumbProj4 from '../public/images/links/meta2.png'
import thumbProj1 from '../public/images/links/pepbird.png'
import thumbProj2 from '../public/images/links/prot2.png'

const Home = () => (
  <Layout>
    <Container>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Center>
            <Heading as="h2" variant="page-title">
              Orion Bloomfield
            </Heading>
          </Center>
          <Center>
            <p>Software Engineer, Student Researcher</p>
          </Center>
          <Center>
            <p>
              Computer Science{' '}
              <Link href="https://www.brown.edu/" target="_blank">
                @Brown University
              </Link>
            </p>
          </Center>
          <Center></Center>
          <Center>
            <BioSection>
              <BioYear>Focus:</BioYear>
              Computational Biology, Full Stack, Backend
            </BioSection>
          </Center>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        ></Box>
      </Box>

      <Box align="center" my={4}>
        <HStack spacing="10px" justify="center">
          <NextLink href="/projects">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Projects
            </Button>
          </NextLink>
          <NextLink href="/puzzles">
            <Button rightIcon={<IoExtensionPuzzle />} colorScheme="teal">
              Puzzles
            </Button>
          </NextLink>
          <Link href="resume_orion_bloomfield.pdf" target="_blank">
            <Button rightIcon={<ExternalLinkIcon />} colorScheme="teal">
              Resume
            </Button>
          </Link>
        </HStack>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About
        </Heading>
        <Paragraph>
          {/* WORK ON THIS INTRO */}
          Hi there! I&apos;m Orion, a third-year student at Brown University.
          Through internships, research opportunities, and personal work, I am
          experienced building full-stack platforms, as well as working on
          general backend services.
          <br></br>
          <br></br>I am excited for a career in biotechnology and software
          engineering, where I can utilize my research and software skills to
          implement platforms and visualizations that aid further research or
          clinical work.
          <br></br>
          <br></br>
          In my free time, I sing in choir and acapella, tutor high schoolers in
          math and science, and write puzzles for competitions and escape rooms.
          <br></br>
          <br></br>I hope this site is an effective medium to hold my cs project
          and puzzle writing content in one cohesive package!
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
          <BioSection fontSize={'lg'}>
            <BioYear>2020-2024</BioYear>
            Brown University -{' '}
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              // borderStyle="solid"
              maxWidth="20px"
              display="inline-block"
              // borderRadius="full"
              src="/images/seal-brown.png"
              alt="Brown Logo"
              justifyContent={'right'}
              href="https://www.brown.edu/"
            ></Image>
          </BioSection>
          <BioSection fontSize={'sm'}>
            <BioYear></BioYear>
            Bachelor of Science - Computer Science
          </BioSection>
          <BioSection fontSize={'sm'}>
            <BioYear></BioYear>
            Concurrent Master of Science - Computer Science
          </BioSection>
          <UnorderedList ml="30px">
            <ListItem fontSize={'sm'}>
              <i>
                <b>Relevant Coursework:</b>
              </i>{' '}
              <br></br>Accelerated Intro to CS, Deep Learning, Software
              Engineering, Computational Molecular Bio., Accelerating Chemical
              Discovery, Recent Applications of Probability and Statistics,
              Honors Linear Algebra
            </ListItem>
          </UnorderedList>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Current Projects
        </Heading>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <WorkGridItem id="pepbird" title="pep-BARD" thumbnail={thumbProj1}>
            Interactive data viewer for a curated set of protein-peptide
            interactions.
            <br></br>
            <Meta colorScheme="red">Node.js</Meta>
            <Meta colorScheme="red">Express.js</Meta>
            <Meta colorScheme="purple">JavaScript</Meta>
            <Meta colorScheme="blue">React</Meta>
          </WorkGridItem>
          <WorkGridItem
            id="proteinarium"
            title="Proteinarium"
            thumbnail={thumbProj2}
          >
            Responsive, modern protein-protein interaction analysis webapp.
            <br></br>
            <Meta colorScheme="red">Java</Meta>
            <Meta colorScheme="red">SQL</Meta>
            <Meta colorScheme="purple">TypeScript</Meta>
            <Meta colorScheme="purple">JavaScript</Meta>
            <Meta colorScheme="blue">React</Meta>
          </WorkGridItem>

          <WorkGridItem
            id="counterpointer"
            title="CounterPointer"
            thumbnail={thumbProj3}
          >
            Interactive teaching tool for music theory students
            <br></br>
            <Meta colorScheme="red">Java</Meta>
            <Meta colorScheme="purple">TypeScript</Meta>
            <Meta colorScheme="purple">JavaScript</Meta>
            <Meta colorScheme="blue">React</Meta>
          </WorkGridItem>
          <WorkGridItem
            id="this-site"
            title="obloomfield.com"
            thumbnail={thumbProj4}
          >
            This site; kind of meta, holds all my portfolio info in one place!
            <br></br>
            <Meta colorScheme="purple">JavaScript</Meta>
            <Meta colorScheme="blue">React</Meta>
            <Meta colorScheme="blue">Next.js</Meta>
            <Meta colorScheme="blue">Chakra-UI</Meta>
            <Meta colorScheme="blue">Three.js</Meta>
          </WorkGridItem>
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
          <Center>
            <Icon as={IoLogoMicrosoft} w={8} h={8} />
          </Center>
          <Center>
            <Text fontSize={'lg'}>
              <b>Software Engineering Intern</b>
            </Text>
          </Center>
          <Center>
            <Text fontSize={'lg'}>
              <Link href="https://azure.microsoft.com/en-us/" target="_blank">
                Microsoft
              </Link>
            </Text>
          </Center>
          <Center>
            <Text fontSize={'md'}>
              <i>Azure Data - Usage Billing | June 2022 - August 2022</i>
            </Text>
          </Center>
          <UnorderedList ml="30px" fontSize={'sm'}>
            <ListItem>
              Created a vscode extension from scratch, utilizing language
              modeling to generate code actions that will elevate customer
              experience for an upcoming Azure SaaS product.
            </ListItem>
            <ListItem>
              Implemented code completion, navigation, and error handling in a
              C# backend service, communicating to the client as well as other
              Azure microservices through a JSON-RPC language server protocol
            </ListItem>
          </UnorderedList>
        </Box>
        <Box
          borderRadius="lg"
          mb={6}
          p={3}
          textAlign="left"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        >
          <Center>
            <Icon as={IoFlask} w={8} h={8} />
          </Center>
          <Center>
            <Text fontSize={'lg'}>
              <b>Research Assistant</b>
            </Text>
          </Center>
          <Center>
            <Text fontSize={'lg'}>
              <Link href="https://sites.brown.edu/gmilab/" target="_blank">
                Rubenstein Theoretical Chemistry Group
              </Link>
            </Text>
          </Center>
          <Center>
            <Text fontSize={'md'}>
              <i>Brown U. Dept. of Chemistry | May 2022 - Present</i>
            </Text>
          </Center>
          <UnorderedList ml="30px" fontSize={'sm'}>
            <ListItem>
              Building a{' '}
              <Link href="https://pep-prot.herokuapp.com/" target="_blank">
                webapp
              </Link>{' '}
              to host and support queries to a curated dataset of
              protein-peptide interaction pairs
            </ListItem>
            –{' '}
            <ListItem>
              {' '}
              Implementing interactive viewers for 3D structure, sequence, and
              markov model dynamics data.
            </ListItem>
            <ListItem>
              {' '}
              Outfitting public RESTful API hooks as well as database filtering
              and downloading to help researchers search, curate, and collect
              data scrutinizing any parameter
            </ListItem>
          </UnorderedList>
        </Box>
        <Box
          borderRadius="lg"
          mb={6}
          p={3}
          textAlign="left"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        >
          <Center>
            <Icon as={IoGitMergeSharp} w={8} h={8} />
          </Center>
          <Center>
            <Text fontSize={'lg'}>
              <b>Research Assistant</b>
            </Text>
          </Center>
          <Center>
            <Text fontSize={'lg'}>
              <Link href="https://sites.brown.edu/gmilab/" target="_blank">
                Dr. Uzun's Genomics and Machine Intelligence Lab
              </Link>
            </Text>
          </Center>
          <Center>
            <Text fontSize={'md'}>
              <i>Care New England | August 2021 - Present</i>
            </Text>
          </Center>
          <UnorderedList ml="30px" fontSize={'sm'}>
            <ListItem>
              Developed an{' '}
              <Link href="https://proteinarium.brown.edu" target="_blank">
                interactive web application
              </Link>{' '}
              that generates multi-layer graph networks from protein
              interactomes.
            </ListItem>
            –{' '}
            <ListItem>
              {' '}
              Implemented caching and multi-threading to optimize Java server
              host, reducing computation time by over 75%
            </ListItem>
            <ListItem>
              Innovated and ported over CLI services actively used by hundreds
              of researchers.
            </ListItem>
          </UnorderedList>
        </Box>
        <Box
          borderRadius="lg"
          mb={6}
          p={3}
          textAlign="left"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        >
          <Center>
            <Icon as={IoTelescope} w={8} h={8} />
          </Center>
          <Center>
            <Text fontSize={'lg'}>
              <b>Observatory Assistant</b>
            </Text>
          </Center>
          <Center>
            <Text fontSize={'lg'}>
              <Link
                href="https://www.brown.edu/Departments/Physics/Ladd/"
                target="_blank"
              >
                Ladd Observatory
              </Link>
            </Text>
          </Center>
          <Center>
            <Text fontSize={'md'}>
              <i>Brown U. Dept. of Physics | August 2021 - Present</i>
            </Text>
          </Center>
          <UnorderedList ml="30px" fontSize={'sm'}>
            <ListItem>
              Lead group observatory viewing sessions for 100+ visitors a night,
              operating historical telescope equipment.
            </ListItem>
            <ListItem>
              Designing layout for monthly observatory magazine.
            </ListItem>
            {/* <ListItem >Building an interactive web application that generates multi-layer graph networks from protein-protein interaction data with various analytic frameworks</ListItem>   */}
          </UnorderedList>
        </Box>
        <Box
          borderRadius="lg"
          mb={6}
          p={3}
          textAlign="left"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        >
          <Center>
            <Icon as={GiFly} w={8} h={8} />
          </Center>
          <Center>
            <Text fontSize={'lg'}>
              <b>Summer Research Intern</b>
            </Text>
          </Center>
          <Center>
            <Text fontSize={'lg'}>
              <Link href="https://seungkimlab.stanford.edu/" target="_blank">
                Dr. Seung Kim's Developmental Biology Lab
              </Link>
            </Text>
          </Center>
          <Center>
            <Text fontSize={'md'}>
              <i>Stanford U. School of Medicine | July 2019 - Aug. 2019</i>
            </Text>
          </Center>
          <UnorderedList ml="30px" fontSize={'sm'}>
            <ListItem>
              Utilized iPCR protocols to determine the location and orientation
              of novel p-element insertions in <i>Drosophila</i>
            </ListItem>
            <ListItem>
              Created a{' '}
              <Link
                href="https://obloomfield.github.io/sgovi-pSeq/index.html"
                target="_blank"
              >
                site
              </Link>{' '}
              to aid in the systematic analysis of PCR reads and expression
              data.
            </ListItem>
            <ListItem>
              Taught 12 rotating high school biology teachers Drosophila
              genetics basics and classroom adoption methods.
            </ListItem>
          </UnorderedList>
        </Box>
      </Section>

      <Section delay={0.25}>
        <Heading as="h3" variant="section-title">
          Teaching
        </Heading>
        <Box
          borderRadius="lg"
          mb={6}
          p={3}
          textAlign="left"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        >
          <Center>
            <Icon as={FaChalkboardTeacher} w={8} h={8} />
          </Center>
          <Center>
            <Text fontSize={'lg'}>
              <b>Online Tutor</b>
            </Text>
          </Center>
          <Center>
            <Text fontSize={'lg'}>
              <Link href="https://www.frutor.us" target="_blank">
                Frutor LLC
              </Link>
            </Text>
          </Center>
          <Center>
            <Text fontSize={'md'}>
              <i>Startup - For-profit | July 2021 - Present</i>
            </Text>
          </Center>
          <UnorderedList ml="30px" fontSize={'sm'}>
            <ListItem>
              Tutoring high school level Mathematics, Chemistry, Biology,
              Computer Science, general test-prep, and college essay writing
            </ListItem>
            {/* <ListItem >Building an interactive web application that generates multi-layer graph networks from protein-protein interaction data with various analytic frameworks</ListItem>   */}
          </UnorderedList>
        </Box>
        <Box
          borderRadius="lg"
          mb={6}
          p={3}
          textAlign="left"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        >
          <Center>
            <Icon as={IoBulb} w={8} h={8} />
          </Center>
          <Center>
            <Text fontSize={'lg'}>
              <b>Technology Lead, Instructor</b>
            </Text>
          </Center>
          <Center>
            <Text fontSize={'lg'}>
              <Link href="https://www.pensos.org" target="_blank">
                Pensos Summer Academy
              </Link>
            </Text>
          </Center>
          <Center>
            <Text fontSize={'md'}>
              <i>Startup - Nonprofit | June 2021 - September 2021</i>
            </Text>
          </Center>
          <UnorderedList ml="30px" fontSize={'sm'}>
            <ListItem>
              Built lesson plans and taught 6 weeks of virtual coursework on{' '}
              <i>Cryptography, Game Theory</i> to students aged 13-15.
            </ListItem>
            <ListItem>
              Provided free summer classes for over 100 students from NYC during
              the pandemic.
            </ListItem>
            <ListItem>
              One of 13 semifinalists in NYU's{' '}
              <Link
                href="https://nyusternberkleycenter.com/accelerate-your-growth-2/entrepreneurs-challenge/"
                target="_blank"
              >
                2021-22 Entrepreneurs Challenge
              </Link>{' '}
              cohort..
            </ListItem>
            {/* <ListItem >Building an interactive web application that generates multi-layer graph networks from protein-protein interaction data with various analytic frameworks</ListItem>   */}
          </UnorderedList>
        </Box>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Activities
        </Heading>
        <Box
          borderRadius="lg"
          mb={6}
          p={3}
          textAlign="left"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        >
          <Center>
            <Icon as={FaPuzzlePiece} w={8} h={8} />
          </Center>
          <Center>
            <Text fontSize={'lg'}>
              <b>Founder, Lead Organizer and Writer</b>
            </Text>
          </Center>
          <Center>
            <Text fontSize={'lg'}>
              <Link href="http://brownpuzzleclub.com/" target="_blank">
                Brown Puzzle Club
              </Link>
            </Text>
          </Center>
          <Center>
            <Text fontSize={'md'}>
              <i>Brown U. Student Activities | August 2021 - Present</i>
            </Text>
          </Center>
          <UnorderedList ml="30px" fontSize={'sm'}>
            <ListItem>
              Organize meetings, lead discussions with ~15 regular members on
              self-made or curated online word and logic puzzles. <br></br>
              <Text fontSize={'xs'}>
                (More information on <Link href="/puzzles">Puzzles</Link> page!)
              </Text>
            </ListItem>
            <ListItem>
              Plan additional sessions for competing in online "Puzzle Hunts."
            </ListItem>
            <ListItem>
              Lead meetings and collaboration of executive team.
            </ListItem>
            <ListItem>
              Coordinate team writing puzzles for upcoming "Brown Puzzle Hunt."
            </ListItem>
            <ListItem>
              Developing the{' '}
              <Link href="http://brownpuzzleclub.com/" target="_blank">
                front-facing website
              </Link>{' '}
              and{' '}
              <Link
                href="http://obloomfield.pythonanywhere.com/"
                target="_blank"
              >
                competition website
              </Link>
              . Both are WIP
            </ListItem>
            {/* <ListItem >Building an interactive web application that generates multi-layer graph networks from protein-protein interaction data with various analytic frameworks</ListItem>   */}
          </UnorderedList>
        </Box>
        <Box
          borderRadius="lg"
          mb={6}
          p={3}
          textAlign="left"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        >
          <Center>
            <Icon as={FaDoorOpen} w={8} h={8} />
          </Center>
          <Center>
            <Text fontSize={'lg'}>
              <b>Co-founder, Organizer</b>
            </Text>
          </Center>
          <Center>
            <Text fontSize={'lg'}>
              <Link
                href="https://www.facebook.com/rabblerooms/"
                target="_blank"
              >
                Rabble Rooms Virtual Escape Rooms
              </Link>
            </Text>
          </Center>
          <Center>
            <Text fontSize={'md'}>
              <i>Startup - For-profit | November 2020 - June 2021</i>
            </Text>
          </Center>
          <UnorderedList ml="30px" fontSize={'sm'}>
            <ListItem>
              Designed and implemented interactive virtual escape room content
              for clubs at numerous major universities. Ran event for a total of
              ~500 students and student organizers
            </ListItem>
            <ListItem>
              Awarded 6,000 dollars in NYU Entrepreneurial Institute Startup
              Sprint, 1 of 13 teams chosen from applicant pool of 160. Only
              undergraduate team admitted.
            </ListItem>
            <ListItem>
              Awarded{' '}
              <Link
                href="https://hgf.org/programs/entrepreneurship-initiative"
                target="_blank"
              >
                Harold Grinspoon
              </Link>{' '}
              entrepreneurial spirit award
            </ListItem>
            {/* <ListItem >Building an interactive web application that generates multi-layer graph networks from protein-protein interaction data with various analytic frameworks</ListItem>   */}
          </UnorderedList>
        </Box>
        <Box
          borderRadius="lg"
          mb={6}
          p={3}
          textAlign="left"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        >
          <Center>
            <Icon as={MdLibraryMusic} w={8} h={8} />
          </Center>
          <Center>
            <Text fontSize={'lg'}>
              <b>Business Manager</b>
            </Text>
          </Center>
          <Center>
            <Text fontSize={'lg'}>
              <Link href="http://thehigherkeys.com/" target="_blank">
                The Higher Keys
              </Link>
            </Text>
          </Center>
          <Center>
            <Text fontSize={'md'}>
              <i>Brown U. A Capella | August 2021 - Present</i>
            </Text>
          </Center>
          <UnorderedList ml="30px" fontSize={'sm'}>
            <ListItem>
              Coordinate local gigs with student activities, other groups, and
              campus safety, as well as touring gigs with the venues associated.
            </ListItem>
            <ListItem>
              Handle funding and reimbursement of group activities.
            </ListItem>
            <ListItem>
              Sing bass, arranging music for tours and recording albums.
            </ListItem>
            <ListItem>
              Maintain the{' '}
              <Link href="http://thehigherkeys.com/" target="_blank">
                website
              </Link>
              .
            </ListItem>
            {/* <ListItem >Building an interactive web application that generates multi-layer graph networks from protein-protein interaction data with various analytic frameworks</ListItem>   */}
          </UnorderedList>
        </Box>
        {/* <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="left"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        >
          <Center><Icon as={MdQueueMusic} w={8} h={8}/></Center>
          <Center><Text fontSize={"lg"}>
              <b>Concert Manager</b>
          </Text></Center>
          <Center><Text fontSize={"lg"}>
              <Link href='https://www.brown.edu/Departments/Music/sites/chorus/' target="_blank">Brown University Chorus</Link>
          </Text></Center>
          <Center><Text fontSize={"md"}>
              <i>Brown U. Music Department | February 2021 - Present</i>
          </Text></Center>
          <UnorderedList ml="30px"fontSize={"sm"}>
              <ListItem >Coordinate the setup and takedown of each concert, as well as equipment moving for each dress rehearsal.</ListItem>
              <ListItem >Sing barritone in the chorus and tour yearly.</ListItem>
              
        </UnorderedList>
        </Box> */}
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Skills
        </Heading>
        <Meta colorScheme={'teal'} fontSize={'md'}>
          Languages and Technology
        </Meta>{' '}
        <br></br>
        <Badge colorScheme={'white'} mr={2}>
          Java
        </Badge>
        <Badge colorScheme={'white'} mr={2}>
          C#
        </Badge>
        <Badge colorScheme={'white'} mr={2}>
          Javascript
        </Badge>
        <Badge colorScheme={'white'} mr={2}>
          Typescript
        </Badge>
        <Badge colorScheme={'white'} mr={2}>
          Python
        </Badge>
        <Badge colorScheme={'white'} mr={2}>
          React
        </Badge>
        <Badge colorScheme={'white'} mr={2}>
          Node.js
        </Badge>
        <Badge colorScheme={'white'} mr={2}>
          Golang
        </Badge>
        <Badge colorScheme={'white'} mr={2}>
          C++
        </Badge>
        <Badge colorScheme={'white'} mr={2}>
          Machine Learning
        </Badge>
        <Badge colorScheme={'white'} mr={2}>
          Tensorflow
        </Badge>
        <Badge colorScheme={'white'} mr={2}>
          Numpy
        </Badge>
        <Badge colorScheme={'white'} mr={2}>
          SQL
        </Badge>
        <Badge colorScheme={'white'} mr={2}>
          Docker
        </Badge>
        <Badge colorScheme={'white'} mr={2}>
          Git
        </Badge>
        <Badge colorScheme={'white'} mr={2}>
          DeFi
        </Badge>
        <Badge colorScheme={'white'} mr={2}>
          Cryptography
        </Badge>
        <Badge colorScheme={'white'} mr={2}>
          Cybersecurity
        </Badge>
        <Badge colorScheme={'white'} mr={2}>
          Unit Testing
        </Badge>
        <br></br>
        <br></br>
        <Meta colorScheme={'teal'} fontSize={'md'}>
          Scientific
        </Meta>{' '}
        <br></br>
        <Badge colorScheme={'white'} mr={2}>
          Proteomics
        </Badge>
        <Badge colorScheme={'white'} mr={2}>
          PCR
        </Badge>
        <Badge colorScheme={'white'} mr={2}>
          iPCR
        </Badge>
        <Badge colorScheme={'white'} mr={2}>
          IHC
        </Badge>
        <Badge colorScheme={'white'} mr={2}>
          Spectroscopy
        </Badge>
        <Badge colorScheme={'white'} mr={2}>
          Drosophila
        </Badge>
        <Badge colorScheme={'white'} mr={2}>
          Dissection
        </Badge>
        <Badge colorScheme={'white'} mr={2}>
          BLAST
        </Badge>
        <Badge colorScheme={'white'} mr={2}>
          Gel Electrophoresis
        </Badge>
        <br></br>
        <br></br>
        <Meta colorScheme={'teal'} fontSize={'md'}>
          Design
        </Meta>{' '}
        <br></br>
        <Badge colorScheme={'white'} mr={2}>
          Canva
        </Badge>
        <Badge colorScheme={'white'} mr={2}>
          Figma
        </Badge>
        <Badge colorScheme={'white'} mr={2}>
          LaTeX
        </Badge>
        <Badge colorScheme={'white'} mr={2}>
          Adobe Premiere
        </Badge>
        <Badge colorScheme={'white'} mr={2}>
          Adobe Photoshop
        </Badge>
        <Badge colorScheme={'white'} mr={2}>
          Adobe InDesign
        </Badge>
        <br></br>
        <br></br>
        <Meta colorScheme={'teal'} fontSize={'md'}>
          Miscellaneous
        </Meta>{' '}
        <br></br>
        <Badge colorScheme={'white'} mr={2}>
          Puzzle Competitons
        </Badge>
        <Badge colorScheme={'white'} mr={2}>
          Teaching and Tutoring
        </Badge>
        <Badge colorScheme={'white'} mr={2}>
          Choral Signing
        </Badge>
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
            <Link href="https://github.com/obloomfield" target="_blank">
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
            <Link
              href="https://www.linkedin.com/in/orion-bloomfield-77a31b179/"
              target="_blank"
            >
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoLinkedin} />}
              >
                @orion-bloomfield
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="https://www.facebook.com/orion.bloomfield"
              target="_blank"
            >
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoFacebook} />}
              >
                @orion.bloomfield
              </Button>
            </Link>
          </ListItem>

          <ListItem>
            <Link
              href="https://www.instagram.com/orion.bloomfield/"
              target="_blank"
            >
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoInstagram} />}
              >
                @orion.bloomfield
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
    </Container>
  </Layout>
)

export default Home
