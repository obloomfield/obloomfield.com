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
  <Layout title="PEA Puzzle Hunt">
    <Container>
      <Title>
        PEA Puzzle Hunt <Badge>Spring 2020, Summer 2020, Spring 2021</Badge>
      </Title>
      <WorkImage src="/images/links/peaph2.png" alt="PEA Puzzle Hunt" />

      <List ml={4} my={4}>
        <ListItem>
        <Meta colorScheme="purple">Wix</Meta>
        <br></br>
        </ListItem>
        <ListItem>
        <br></br>
        </ListItem>
        {/* <ListItem>
        <Meta colorScheme={'red'}>HEAVY WORK IN PROGRESS</Meta>
        </ListItem> */}
        <ListItem>
          <Badge mr={2}>Site: </Badge>
          <Link href="https://www.peapuzzlehunt.com/previous-hunt" target='_blank'>
          peapuzzlehunt.com <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        {/* <ListItem>
          <Badge mr={2}>Github: </Badge>
          <span>Currently Private!!</span>
          <Link href="https://github.com/obloomfield/laddtest" target='_blank'>
            laddetest <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem> */}
        {/* <ListItem>
          <Meta>Last update</Meta>
          <span>2009/02/16</span>
        </ListItem> */}
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Overview</Center>
      </Heading>

      <UnorderedList my={4}>
        <ListItem>
        Directed the design, preparation, and puzzle content for my high school’s annual puzzle
competition. 
        </ListItem>
        <ListItem>
        Over the first COVID summer, Attracted over 4,000 unique visitors to the site - a tenfold increase to the event's regular publicity.
        </ListItem>
        <ListItem>
        Designed and maintained the Wix site for the 2020, 2020 Summer, 2021 iterations of the competition. 
        </ListItem>


      </UnorderedList>

      

      
    </Container>
  </Layout>
)

export default Work
