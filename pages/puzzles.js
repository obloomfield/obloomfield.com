import { Container, Heading, SimpleGrid, Divider, Link, Box, HStack, Button, Center, NextLink, Badge} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import thumbPuz1 from '../public/images/links/eitherand3.png'
import thumbPuz2 from '../public/images/links/dozen2.png'
import thumbPuz3 from '../public/images/links/lost2.png'
import thumbPuz4 from '../public/images/links/edible2.png'

import {Meta} from '../components/work'

const Puzzles = () => (
  <Layout title="Puzzles">
    <Container>

    <Section delay={0.2}>
      {/* <Link href='projects/bph'>Brown Puzzle Club</Link>,  */} 
    <Heading as="h3" fontSize={20} mb={4}>
          About
    </Heading>
      In my free time, I like to write puzzles for these competitions called <Link href='https://blog.vero.site/post/puzzlehunts' target='_blank'>Puzzle Hunts</Link>. 
      These are word or logic puzzles where the underlying premise is that <i>you are not inherently given the instructions on how to solve a puzzle, and the first (often hardest) step is making the leap towards guessing a "mechanism". </i> 
      <br></br><br></br>
      To build a community of likeminded puzzlers on my campus, I founded 
      <i> Brown Puzzle Club</i>, 
      where we meet weekly to tackle beginner to intermediate puzzles and prepare an upcoming puzzle hunt of our own. 
      Before college, I directed my high school puzzle hunt, <i>PEA Puzzle Hunt,</i> for three iterations, 
      (Spring 2020, Summer 2020, Spring 2021) leading the design, logistics, testing, and writing teams involved.

      <Box align="center" my={4} >
          <HStack spacing="10px" justify="center">
            <Link href="http://www.peaph-archive.com/search.html?q=Orion" target='_blank'>
              <Button colorScheme="teal">
                All My Puzzles
              </Button>
            </Link>
            <Link href="https://www.peapuzzlehunt.com/rabble-meta-1" target='_blank'>
              <Button colorScheme="teal">
                PEA Puzzle Hunt Sample
              </Button>
            </Link>

          </HStack>
        </Box>
    </Section>
      <Divider my={6} />
      <Section delay={0.1}>

        <Heading as="h3" fontSize={20} mb={4}>
          Highlighted Puzzles:
        </Heading>


        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="http://www.peaph-archive.com/puzzles-by-year/2020/Summer%20Rabble%20Hunt/Meta%202/2-3.html?highlight=either"
            title="Either And"
            thumbnail={thumbPuz1}
          >
            <Badge mr={2} fontSize={10}>Summer 2020</Badge>
            <br></br>
            This puzzle is about pairing clue phrases together to describe an implied step between the two....
            <br></br>
            <Meta>Clue Phrases</Meta><Meta>Word Association</Meta>
            
            
          </GridItem>
          <GridItem
            href="http://www.peaph-archive.com/puzzles-by-year/2021/Meta%204/4-5.html?highlight=dozen"
            title="A Puzzle With the Answer of DOZEN"
            thumbnail={thumbPuz2}
          >
            <Badge mr={2} fontSize={10}>Spring 2021</Badge>
            <br></br>
            This puzzle attempts to flip the normal solution paradigm on its head; giving you the answer 
            immediately... unless?
            <br></br>
            <Meta>Logic</Meta><Meta>Word Association</Meta>
          </GridItem>
          <GridItem
            href="http://www.peaph-archive.com/puzzles-by-year/2020/Spring%20Hunt/Meta%202/2-3.html"
            title="Löst im Tranzläschon"
            thumbnail={thumbPuz3}
          >
            <Badge mr={2} fontSize={10}>Spring 2020</Badge>
            <br></br>
            One of my first puzzles; this involves figuring out subsequent 'translations' of songs as an encoding scheme...
            <br></br>
            <Meta>Encoding</Meta><Meta>Logic</Meta><Meta>Song Trivia</Meta>
          </GridItem>
          <GridItem
            href="http://www.peaph-archive.com/puzzles-by-year/2021/Meta%202/2-5.html?highlight=edible"
            title="Edible Arrangements"
            thumbnail={thumbPuz4}
          >
            <Badge mr={2} fontSize={10}>Spring 2021</Badge>
            <br></br>
            This puzzle is very similar to 'Either And,' but has a more flavorful twist...
            <br></br>
            <Meta>Clue Phrases</Meta><Meta>Word Association</Meta>
          </GridItem>
        </SimpleGrid>

        
        

      </Section>
      
      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Why I Love Puzzle Hunts
        </Heading>
        
      Like escape rooms, any topic under the sun can become a puzzle hunt puzzle. (Sudokus, Shakespeare encodings, alien communication attempts, etc.) In equal parts, though, it is critical, more than any other puzzle medium I know of, to define and make <i>motivated</i> puzzles, in which the solver feels comfortable teaching themselves the <i>mechanics</i> at play. 
      Deeper questions of motivation, teach-ability, and context are what I find to be the most exciting aspect of puzzle writing. Harnessing these concepts has also excited me to one day become a teacher. :)
      <br></br><br></br>
      I first found an interest for puzzles competing in my high school's <Link href='https://pea-puzzle-hunt.appspot.com/index.html' target='_blank'>hunt in 2017</Link>. My team did not get far at all, but we were glued to the content. We participated year after year, until my senior year when I volunteered to start writing for the event. 
      Nowadays, I team up with the local Providence team and my club to tackle the yearly flagship online puzzle events with general success. 
      <br></br><br></br>
      <i>(My recent favorite hunts: <Link href='https://perpendicular.institute/' target='_blank'>MIT Mystery Hunt 2021</Link>, 
      <Link href='https://www.umdpuzzle.club/puzzles' target='_blank'>UMD Puzzlehunt</Link>, <Link href='https://puzzlehunt.club.cc.cmu.edu/hunt/15/' target='_blank'>CMU Oregon Trail Hunt</Link>)</i>
      </Section>

      {/* <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          part3
        </Heading>
      </Section> */}

    </Container>
  </Layout>
)

export default Puzzles
