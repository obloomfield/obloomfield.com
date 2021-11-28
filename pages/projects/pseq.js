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
  <Layout title="pseq">
    <Container>
      <Title>
        pSeq <Badge>July 2019</Badge>
      </Title>
      <WorkImage src="/images/links/pseq2.png" alt="pseq" />

      <List ml={4} my={4}>
        <ListItem>
        <Meta colorScheme="purple">HTML</Meta><Meta colorScheme="purple">Javascript</Meta>
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
          <Link href="https://obloomfield.github.io/sgovi-pSeq/" target='_blank'>
          obloomfield.github.io/sgov-pSeq <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Badge mr={2}>Github: </Badge>
          {/* <span>Currently Private!!</span> */}
          <Link href="https://github.com/obloomfield/sgovi-pSeq" target='_blank'>
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
          Rough HTML prototype of an automatic p-element insertion finder tool.
        </ListItem>
        <ListItem>
          With a drosophila sequence inputted, given a restriction enzyme used in digest, queries the BLAST site and automatically finds the p-element insertion site location within the genome of the fly.
        </ListItem>
        


      </UnorderedList>

      

      
    </Container>
  </Layout>
)

export default Work
