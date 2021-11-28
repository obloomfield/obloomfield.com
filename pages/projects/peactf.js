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
  <Layout title="PeaCTF">
    <Container>
      <Title>
        peaCTF <Badge>Jun. 2019 - Aug 2020</Badge>
      </Title>
      <WorkImage src="/images/links/peactf2.png" alt="Ladd pic" />

      <List ml={4} my={4}>
        <ListItem>
        <Meta colorScheme="purple">C++</Meta><Meta colorScheme="purple">SQL</Meta><Meta colorScheme="purple">Javascript</Meta><Meta colorScheme="purple">React</Meta>
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
          <Link href="https://peactf.com" target='_blank'>
          peactf.com <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Badge mr={2}>Github: </Badge>
          <span>Currently Private!!</span>
          {/* <Link href="https://github.com/peaCTF/peaCTF-web-landing" target='_blank'>
            2019, <ExternalLinkIcon mx="2px" /> 
          </Link>
          <Link href="https://github.com/peaCTF/peactf-main-2020" target='_blank'>
            2020 <ExternalLinkIcon mx="2px" /> 
          </Link> */}
        </ListItem>
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
        Founded <Link href='https://ctf101.org/' target='_blank'>capture-the-flag</Link> style web competition for aspiring cybersecurity students
        </ListItem>
        <ListItem>
        Over 2,000 unique high school participants across the globe.
        </ListItem>
        <ListItem>
        Designed the website (full stack) for the 2019 and 2020 websites.
        </ListItem>
        <ListItem>
        Led problem-writing team.
        </ListItem>
      </UnorderedList>

      

      
    </Container>
  </Layout>
)

export default Work
