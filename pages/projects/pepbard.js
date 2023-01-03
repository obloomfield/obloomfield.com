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
  <Layout title="Proteinariumweb">
    <Container>
      <Title>
        pep-BARD <Badge>May 2022 - Present</Badge>
      </Title>
      <WorkImage src="/images/links/pepbird.png" alt="pep-BARD screenshot" />
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Node.js</Meta>
          <Meta>Express.js</Meta>
          <Meta>JavaScript</Meta>
          <Meta>React</Meta>
          <br></br>
        </ListItem>
        <ListItem>
          <br></br>
        </ListItem>
        <ListItem>
          <Badge mr={2}>Site: </Badge>
          <Link href="https://pepbard.brown.edu/" target="_blank">
            pepbard.brown.edu <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Badge mr={2}>Github: </Badge>
          <span>Currently Private!!</span>
          {/* <Link href="https://github.com/alperuzun/Proteinariumweb" target='_blank'>
            Proteinariumweb
          </Link> */}
        </ListItem>
        <ListItem>
          <Badge mr={2}>Publication: </Badge>
          <span>Coming Soon!!</span>
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
      This site hosts a curated dataset of proteins with good binding signatures
      for targeted proteins. The webapp is aimed to host the multiple formats of
      data implied for all proteins in the set; showcasing sequence, 3d
      visualization, markov state model, and trajectory data, all with easy
      downloads for each of the components.
      <br></br> <br></br>
      For this dataset, a search query engine has been developed for advanced
      searches and filtration across selected parameters.
      <UnorderedList my={4}>
        <ListItem>
          A collaboration project with the Dr. Rubenstein lab of Brown
          University and the Dr. Ytreberg lab of the University of Idaho.
        </ListItem>
      </UnorderedList>
    </Container>
  </Layout>
)

export default Work
