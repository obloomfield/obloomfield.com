import { ChevronRightIcon, ExternalLinkIcon, InfoIcon } from '@chakra-ui/icons'
import {
  Badge,
  Box,
  Button,
  Center,
  Container,
  HStack,
  Heading,
  Icon,
  Image,
  Link,
  LinkBox,
  LinkOverlay,
  List,
  ListItem,
  SimpleGrid,
  Text,
  UnorderedList,
  useColorModeValue
} from '@chakra-ui/react'

import { GridItem, WorkGridItem } from '../../components/grid-item'
import { Meta } from '../../components/work'

import thumbProj2 from '../../public/images/links/acap.png'
import thumbProj0 from '../../public/images/links/bph.png'
import thumbProj1 from '../../public/images/links/desktop-world.png'
import thumbProj3 from '../../public/images/links/prot2.png'
import thumbProj4 from '../../public/images/links/scene-viewer.png'

export default function WorkingOn() {
  return <SimpleGrid columns={[1, 2, 2]} gap={6}>
  <WorkGridItem
    id="bph"
    title="Brown Puzzlehunt"
    thumbnail={thumbProj0}
  >
    Brown's annual puzzle competition — reaching a total audience of over 600.
    <br></br>
    <Meta colorScheme="red">PostgreSQL</Meta>
    <Meta colorScheme="purple">Python</Meta>
    <Meta colorScheme="purple">Django</Meta>
    <Meta colorScheme="blue">JavaScript</Meta>
  </WorkGridItem>
  {/* <WorkGridItem
    id="desktop-world"
    title="Desktop World"
    thumbnail={thumbProj1}
  >
    Procedural landscape in a bowl - using custom shaders, boids,
    selective bloom.
    <br></br>
    <Meta colorScheme="purple">Node.js</Meta>
    <Meta colorScheme="blue">JavaScript</Meta>
    <Meta colorScheme="blue">Three.js</Meta>
    <Meta colorScheme="blue">GLSL</Meta>
  </WorkGridItem> */}
  <WorkGridItem
    id="scene-viewer"
    title="Scenes"
    thumbnail={thumbProj4}
  >
    Interactive 3D Scene Editor. 
    <br></br>
    <Meta colorScheme="blue">Typescript</Meta>
    <Meta colorScheme="blue">React</Meta>
    <Meta colorScheme="blue">Three.js</Meta>
    <Meta colorScheme="blue">GLSL</Meta>
  </WorkGridItem>
  <WorkGridItem
    id="acap"
    title="As Convex as Possible"
    thumbnail={thumbProj2}
  >
    Approximate Convex Decomposition generation for manifold trimeshes.
    <br></br>
    <Meta colorScheme="purple">C++</Meta>
    <Meta colorScheme="purple">OpenGL</Meta>
    <Meta colorScheme="blue">Blender</Meta>
  </WorkGridItem>
  <WorkGridItem
    id="proteinarium"
    title="Proteinarium"
    thumbnail={thumbProj3}
  >
    Responsive, modern protein-protein interaction analysis webapp.
    <br></br>
    <Meta colorScheme="red">SQLite</Meta>
    <Meta colorScheme="purple">Java</Meta>
    <Meta colorScheme="blue">TypeScript</Meta>
    <Meta colorScheme="blue">React</Meta>
  </WorkGridItem>
</SimpleGrid>
}