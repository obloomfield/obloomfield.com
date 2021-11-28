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
  <Layout title="peaph-archive">
    <Container>
      <Title>
        PEA Puzzle Hunt Archive <Badge>Summer 2020</Badge>
      </Title>
      <WorkImage src="/images/links/peaph-archive2.png" alt="PEA Puzzle Hunt Archive" />

      <List ml={4} my={4}>
        <ListItem>
        <Meta colorScheme="purple">Jekyll</Meta>
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
          <Link href="http://www.peaph-archive.com/" target='_blank'>
          peaph-archive.com <ExternalLinkIcon mx="2px" />
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
        Automatic SSG archive site for the yearly puzzle content from the <Link href='https://www.peapuzzlehunt.com/previous-hunt'>PEA Puzzle Hunt</Link>.
        </ListItem>
        <ListItem>
        Allows for successive competitions to have the puzzle PDF and solution documentation all held in one place
        </ListItem>
        <ListItem>
        Allows for searching/sorting by puzzle type, puzzle author, date, name, etc.
        </ListItem>

      </UnorderedList>

      

      
    </Container>
  </Layout>
)

export default Work
