import { Container, Heading, SimpleGrid, Divider, Link} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

// import thumbFishWorkflow from '../public/images/contents/youtube-fish-workflow.jpg'
// import thumbMyDeskSetup from '../public/images/contents/youtube-my-desk-setup.jpg'
// import thumb500PaidUsers from '../public/images/contents/blog-500-paid-users.jpg'
// import thumbFinancialGoal from '../public/images/contents/blog-financial-goal.png'
// import thumbHowToPriceYourself from '../public/images/contents/blog-how-to-price-yourself.jpg'
// import thumb50xFaster from '../public/images/contents/youtube-50x-faster.jpg'

const Puzzles = () => (
  <Layout title="Puzzles">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Competiton Puzzles
      </Heading>
      In my free time, I like to write puzzles for these lovely competitions called <Link href='https://blog.vero.site/post/puzzlehunts' target='_blank'>Puzzle Hunts</Link>. 
      These are word or logic puzzles where the underlying premise is that <i>you are not inherently given the instructions on how to solve a given puzzle, and the first (often hardest) step is making the leap towards guessing a mechanism. </i> 
      <br></br>
      Each puzzle has an underlying answer to extract, and they are structured in 'Meta' groups where going onto the next meta requires answering a 'metapuzzle,' which utilizes the answers of all the puzzles in that meta.
      <br></br><br></br>
      The format is very freeing; like escape rooms, any topic under the sun can become a puzzle. (Sudokus, Shakespeare encodings, alien communication attempts etc.) In equal parts, though, it is critical to define and make <i>motivated</i> puzzles, in which the solver feels comfortable teaching themselves the 'mechanics' at play. 
      Deeper questions of motivation, teach-ability, and context, are what I find to be the most exciting aspect of this puzzle format, and are what inspire me to one day become a teacher.
      <br></br><br></br>
      I first found an interest for puzzles competing in my high school's <Link href='https://pea-puzzle-hunt.appspot.com/index.html' target='_blank'>hunt in 2017</Link>. My team did not get far at all, but we were glued to the content, and came back year after year, until my senior year when I volunteered to start writing for the event. 
      Nowadays, I team up with my high school friends to tackle the yearly flagship online puzzle events with general success. 
      <br></br><br></br>
      <i>(My recent favorite hunts: <Link href='https://perpendicular.institute/' target='_blank'>MIT Mystery Hunt 2021</Link>, 
      <Link href='https://www.umdpuzzle.club/puzzles' target='_blank'>UMD Puzzlehunt</Link>, <Link href='https://puzzlehunt.club.cc.cmu.edu/hunt/15/' target='_blank'>CMU Oregon Trail Hunt</Link>)
      </i>
      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          MORE CONTENT HERE COMING SOON
        </Heading>
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
