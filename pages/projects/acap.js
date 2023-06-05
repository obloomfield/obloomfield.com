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
        As Convex as Possible <Badge>Nov. 2022 - Dec 2022</Badge>
      </Title>
      <WorkImage src="/images/links/teapot_ritchie.gif" alt="acap" />
      <List ml={4} my={4}>
        <ListItem>
          <Meta>C++</Meta>
          <Meta>OpenGL</Meta>
          <Meta>Blender</Meta>
          <br></br>
        </ListItem>
        <ListItem>
          <br></br>
        </ListItem>
        <ListItem>
          <Badge mr={2}>Github: </Badge>
          <Link
            href="https://github.com/obloomfield/as-convex-as-possible"
            target="_blank"
          >
            Link <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Badge mr={2}>Implementation of : </Badge>
          <Link
            href="https://github.com/obloomfield/as-convex-as-possible"
            target="_blank"
          >
            Approximate Convex Decomposition for 3D Meshes with Collision-Aware Concavity and Tree Search - Wei, Liu, et. al. 2023 <ExternalLinkIcon mx="2px" />
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
      Final project for CSCI2240 - Advanced Computer Graphics. A collaboration project by
      Richard Tang, Krishi Saripalli, Will Chen, and Orion Bloomfield.
      <br></br>
      <br></br>
      Implements a state-of-the-art method to divide trimesh models into convex pieces. Personal contributions include model loading, cutting, and blender rigging / animation.
      <br></br>
      <br></br>
    </Container>
  </Layout>
)

export default Work
