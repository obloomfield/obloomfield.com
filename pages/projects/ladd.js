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
  <Layout title="Ladd Observatory">
    <Container>
      <Title>
        Ladd Observatory Site <Badge>Sep. 2021 - Present</Badge>
      </Title>
      <WorkImage src="/images/links/ladd2.png" alt="Ladd pic" />

      <List ml={4} my={4}>
        <ListItem>
        <Meta colorScheme="purple">HTML</Meta><Meta colorScheme="purple">CSS</Meta><Meta colorScheme="purple">Javascript</Meta>
        <br></br>
        </ListItem>
        <ListItem>
        <br></br>
        </ListItem>
        <ListItem>
        <Meta colorScheme={'red'}>HEAVY WORK IN PROGRESS</Meta>
        </ListItem>
        <ListItem>
          <Badge mr={2}>Site: </Badge>
          <Link href="https://obloomfield.github.io/laddtest/" target='_blank'>
          obloomfield.github.io/laddtest/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Badge mr={2}>Github: </Badge>
          {/* <span>Currently Private!!</span> */}
          <Link href="https://github.com/obloomfield/laddtest" target='_blank'>
            laddetest <ExternalLinkIcon mx="2px" />
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

      <UnorderedList my={4}>
        <ListItem>
          I'm currently working on a complete overhaul of the Ladd Observatory website, hosting event and history information, as well as a photo gallery and blog portal.
        </ListItem>


      </UnorderedList>

      

      
    </Container>
  </Layout>
)

export default Work
