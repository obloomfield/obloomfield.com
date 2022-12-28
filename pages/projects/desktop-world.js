import { ExternalLinkIcon } from '@chakra-ui/icons'
import {
  Badge,
  Center,
  Container,
  Heading,
  Image,
  Link,
  List,
  ListItem,
  UnorderedList
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import P from '../../components/paragraph'
import { Meta, Title, WorkImage } from '../../components/work'

const Work = () => (
  <Layout title="Desktop World">
    <Container>
      <Title>
        Desktop World <Badge>Nov. 2022 - Dec 2022</Badge>
      </Title>
      <WorkImage src="/images/links/desktop-world.gif" alt="proteinarium" />
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Node.js</Meta>
          <Meta>JavaScript</Meta>
          <Meta>Three.js</Meta>
          <br></br>
        </ListItem>
        <ListItem>
          <br></br>
        </ListItem>
        <ListItem>
          <Badge mr={2}>Site: </Badge>
          <Link href="https://desktop-world.netlify.app/" target="_blank">
            desktop-world.netlify.app <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Badge mr={2}>Github: </Badge>
          <Link
            href="https://github.com/obloomfield/desktop-world"
            target="_blank"
          >
            Link <ExternalLinkIcon mx="2px" />
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
      Final project for CSCI2230 - Computer Graphics. A collaboration project by
      Smriti Vaidyanathan, Krishi Saripalli, Neil Xu, and Orion Bloomfield.
      <br></br>
      <br></br>
      Built using THREE.js ~ involves custom shaders, procedural terrain,
      particle systems, boids, selective bloom, and more!
      <br></br>
      <br></br>
    </Container>
  </Layout>
)

export default Work
