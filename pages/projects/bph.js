import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  UnorderedList,
  Heading,
  Center,
  Image
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Brown Puzzle Hunt">
    <Container>
      <Title>
        Brown Puzzle Club <Badge>Aug. 2021 - Present</Badge>
      </Title>
      <WorkImage src="/images/links/bpc.png" alt="BPH-logo" />

      <List ml={4} my={4}>
        <ListItem>
        <Meta>Python</Meta><Meta>SQL</Meta><Meta>Javascript</Meta><Meta>Django</Meta>
        <br></br>
        </ListItem>
        <ListItem>
        <br></br>
        </ListItem>
        <ListItem>
        <Meta colorScheme={'red'}>HEAVY WORK IN PROGRESS</Meta>
        </ListItem>
        <ListItem>
          <Badge mr={2}>Landing Page: </Badge>
          <Link href="http://www.brownpuzzleclub.com" target='_blank'>
            brownpuzzleclub.com <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Badge mr={2}>Competiton Page: </Badge>
          <Link href="http://obloomfield.pythonanywhere.com" target='_blank'>
            obloomfield.pythonanywhere.com <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Badge mr={2}>Github: </Badge>
          {/* <span>Currently Private!!</span> */}
          <Link href="https://github.com/obloomfield/bph-landing" target='_blank'>
            Landing <ExternalLinkIcon mx="2px" />
          </Link>, 
          <Link href="https://github.com/obloomfield/peaph-modern" target='_blank'>
             Competiton <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        {/* <ListItem>
          <Meta>Last update</Meta>
          <span>2009/02/16</span>
        </ListItem> */}
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Overview</Center>
      </Heading>

      Founder and lead organizer of the Brown Puzzle Club, which is gearing up to 
      host a yearly 'Brown Puzzle Hunt' competition for the school, showcasing
      a suite of club-made puzzles. I am also the tech lead for the two website 
      components; the landing page for club activities, as well as the competition page.
      <UnorderedList my={4}>
        <ListItem>
          <b>Landing: </b>hosts the general club information and LISTSERV signup for Brown Puzzle Club
        </ListItem>
        <ListItem>
          <b>Competiton: </b>Django site to host the login, setup, and administration of future <Link href='https://blog.vero.site/post/puzzlehunts' target='_blank'>Puzzle Hunts</Link> run by the club.
        </ListItem>


      </UnorderedList>

      

      
    </Container>
  </Layout>
)

export default Work
