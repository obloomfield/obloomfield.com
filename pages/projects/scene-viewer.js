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
  <Layout title="Scenes">
    <Container>
      <Title>
        Scene Viewer <Badge>July 2023 - Oct 2023</Badge>
      </Title>
      <WorkImage src="/images/links/scene-viewer-demo.gif" alt="Scenes demo" />
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Typescript</Meta>
          <Meta>React</Meta>
          <Meta>Three.js</Meta>
          <Meta>GLSL</Meta>
          <br></br>
        </ListItem>
        <ListItem>
          <br></br>
        </ListItem>
        <ListItem>
          <Badge mr={2}>Site: </Badge>
          <Link href="https://scenes.cs1230.graphics/" target="_blank">
            scenes.cs1230.graphics <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Badge mr={2}>Github: </Badge>
          <Link
            href="https://github.com/BrownCSCI1230/scenes.cs1230.graphics"
            target="_blank"
          >
            Link <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Badge mr={2}>Tutorial: </Badge>
          <Link
            href="https://cs1230.graphics/docs/scenes-tutorial"
            target="_blank"
          >
            Link <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>
      <Heading as="h4" fontSize={16} my={6}>
        <Center>Overview</Center>
      </Heading>
      A course development project for CSCI1230 by
      Dylan Hu, Nick Vadasz, and Orion Bloomfield.
      <br></br>
      <br></br>
      Built using THREE.js and React, involves custom modeling, state management, and hooking of Three scene state to course-specified scenefiles. Uses Zod to handle type schemas.
      <br></br>
      <br></br>
      Worked primarily on the movement controls, editor panel, and camera.
    </Container>
  </Layout>
)

export default Work
