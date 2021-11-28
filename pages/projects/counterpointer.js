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
  <Layout title="CounterPointer">
    <Container>
      <Title>
        CounterPointer <Badge>June 2021</Badge>
      </Title>
      <WorkImage src="/images/links/counterpointer3.png" alt="counterpointer" />

      <List ml={4} my={4}>
        <ListItem>
        <Meta colorScheme="purple">Java</Meta><Meta colorScheme="purple">Typescript</Meta><Meta colorScheme="purple">Javascript</Meta><Meta colorScheme="purple">React</Meta>
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
          <Link href="https://www.counterpointer.app" target='_blank'>
          counterpointer.app <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Badge mr={2}>Github: </Badge>
          {/* <span>Currently Private!!</span> */}
          <Link href="https://github.com/counter-pointer/counterpointer" target='_blank'>
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
      CounterPointer is a teaching tool to help music theory students learn more about species counterpoint. You can use the web editor to input your melody, 
      see generated example countermelodies, or write your own countermelody and check it against the set of counterpoint rules, all while being able to listen 
      to your score played back on a piano in real time. Instead of manually checking for rule violations, you can immediately get feedback 
      on your countermelody and quickly correct any mistakes.
      <UnorderedList my={4}>
        <ListItem>
          Made in partnership with Alex Ding, En-Hua Holtz, and John Chung as a final project for Brown's CSCI 0320 'Software Engineering' course.
        </ListItem>


      </UnorderedList>

      

      
    </Container>
  </Layout>
)

export default Work
