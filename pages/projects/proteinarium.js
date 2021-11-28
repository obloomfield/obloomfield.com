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
  <Layout title="Proteinariumweb">
    <Container>
      <Title>
        Proteinarium <Badge>Aug. 2021 - Present</Badge>
      </Title>
      <WorkImage src="/images/links/prot2.png" alt="proteinarium" />

      <List ml={4} my={4}>
        <ListItem>
        <Meta>Java</Meta><Meta>SQL</Meta><Meta>TypeScript</Meta><Meta>JavaScript</Meta><Meta>React</Meta>
        <br></br>
        </ListItem>
        <ListItem>
        <br></br>
        </ListItem>
        <ListItem>
          <Badge mr={2}>Site: </Badge>
          <Link href="http://proteinarium.brown.edu" target='_blank'>
            proteinarium.brown.edu <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Badge mr={2}>Published In: </Badge>
          <Link href="https://www.sciencedirect.com/science/article/pii/S0888754320303050" target='_blank'>
            Genomics <ExternalLinkIcon mx="2px" />
          </Link> 
        </ListItem>
        <ListItem>
          <Badge mr={2}>Github: </Badge>
          <span>Currently Private!!</span>
          {/* <Link href="https://github.com/alperuzun/Proteinariumweb" target='_blank'>
            Proteinariumweb
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
        Computational Biologists analyze the interaction information between proteins as it can be a model to show the general networking of varius cellular pathways. On top of this, 
        it is inferred that (kind of like how road blocks on major highways ) - to find out which of the paths through the protein-protein interaction (PPI) network are most
        "critical," a heavy suite of graph analysis algorithms are utilized to measure network similarity, clustering, centrality, knockdown analysis, etc. Already built as a command line tool, 
        Proteinarium now sees active use from numerous scientists in the PPI field. 
        <br></br><br></br>
        My largest goal currently, on top of adding more analysis algorithms to the suite, 
        is to build an <Link href='https://proteinarium.brown.edu' target='_blank'>entire visual webapp</Link> for the project, in which users will have a much more intuitive and efficient time handling their analysis requrests, and will be able to utilize the
        a computing cluster at Brown to run the heavier calculations.
      <UnorderedList my={4}>
        <ListItem>
          A collaboration project with the Dr. Uzun and Dr. Schuster labs - completely overhauling a CLI tool for a wider focus; adding many more analysis programs and designing a web interface around it
        </ListItem>
        <ListItem>
        Generates graph networks from protein-protein interaction data based on Dijkstra or <Link href='https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1004120' target='_blank'>DIAMoND</Link>
        </ListItem>
        <ListItem>
        Clusters graphs by network similarity (Options of Jaccard Distance, Simson indices, Laplacian Spatial Distance)
        </ListItem>
        <ListItem>
        Clusters graphs by network similarity (Jaccard Distance, Simson indices, Laplacian Spatial Distance) and arranges into a dendrogram in which control-target-knockdown effects are visible.
        </ListItem>
      </UnorderedList>

      

      
    </Container>
  </Layout>
)

export default Work
