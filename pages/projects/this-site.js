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
  <Layout title="obloomfield.com">
    <Container>
      <Title>
        obloomfield.com <Badge>Nov. 2021 - Present</Badge>
      </Title>
      <WorkImage src="/images/links/meta2.png" alt="this site" />

      <List ml={4} my={4}>
        <ListItem>
        <Meta colorScheme="purple">JavaScript</Meta><Meta colorScheme="purple">React</Meta><Meta colorScheme="purple">Next.js</Meta><Meta colorScheme="purple">Chakra-UI</Meta><Meta colorScheme="purple">Three.js</Meta>
        <br></br>
        </ListItem>
        <ListItem>
        <br></br>
        </ListItem>
        <ListItem>
          <Badge mr={2}>Site: </Badge>
          <Link href="http://www.obloomfield.com" target='_blank'>
            obloomfield.com <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Badge mr={2}>Github: </Badge>
          {/* <span>Currently Private!!</span> */}
          <Link href="https://github.com/obloomfield/obloomfield.com" target='_blank'>
            link <ExternalLinkIcon mx="2px" />
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
          Built to host my portfolio/resume and puzzle content, all in one interactive shell
        </ListItem>


      </UnorderedList>

      

      
    </Container>
  </Layout>
)

export default Work
