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
      <WorkImage src="/images/links/bph.png" alt="BPH-logo" />

      <List ml={4} my={4}>
        <ListItem>
        <Meta>Python</Meta><Meta>PostgreSQL</Meta><Meta>Django</Meta><Meta>JavaScript</Meta>
        </ListItem>
        <ListItem>
        <br></br>
        </ListItem>
        <ListItem>
          <Badge mr={2}>Competition Page: </Badge>
          <Link href="http://www.brownpuzzlehunt.com" target='_blank'>
            brownpuzzlehunt.com <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Badge mr={2}>Github: </Badge>
          <span>Private!</span>
        </ListItem>
        {/* <ListItem>
          <Meta>Last update</Meta>
          <span>2009/02/16</span>
        </ListItem> */}
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Overview</Center>
      </Heading>
      Founder and lead organizer of the Brown Puzzle Club, running the yearly Brown Puzzle Hunt for the Brown and greater puzzle community. 
      This event showcases a suite of club-made puzzles, wrapped in an in-person scavenger-hunt event for an object on campus. In its first year of running, attracted 652 unique participants across 123 teams.
      Also the tech lead for the competition site. 
    </Container>
  </Layout>
)

export default Work
