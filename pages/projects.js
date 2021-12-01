import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import {Meta} from '../components/work'

import projIcon1 from '../public/images/links/prot2.png'
import projIcon2 from '../public/images/links/meta2.png'
import projIcon3 from '../public/images/links/bpc.png'
import projIcon4 from '../public/images/links/ladd2.png'
import projIcon5 from '../public/images/links/counterpointer3.png'
import projIcon6 from '../public/images/links/ladd2.png'
import projIcon7 from '../public/images/links/peactf2.png'
import projIcon8 from '../public/images/links/peaph2.png'
import projIcon9 from '../public/images/links/peaph-archive2.png'
import projIcon10 from '../public/images/links/pseq2.png'

const Projects = () => (
  <Layout title="Projects">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        What I'm Working On
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem 
            id="proteinarium" 
            title="Proteinarium" 
            thumbnail={projIcon1}
          >
          Responsive, modern protein-protein interaction analysis webapp. Actively used by numerous PPI researchers.
          <br></br>
            <Meta colorScheme="red">Java</Meta><Meta colorScheme="red">SQL</Meta><Meta colorScheme="purple">TypeScript</Meta><Meta colorScheme="purple">JavaScript</Meta><Meta colorScheme="blue">React</Meta>
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="this-site"
            title="obloomfield.com"
            thumbnail={projIcon2}
          >
            This site; kind of meta, holds all my portfolio info in one place!
            <br></br>
            <Meta colorScheme="purple">JavaScript</Meta><Meta colorScheme="blue">React</Meta><Meta colorScheme="blue">Next.js</Meta><Meta colorScheme="blue">Chakra-UI</Meta><Meta colorScheme="blue">Three.js</Meta>
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="bph"
            title="Brown Puzzle Hunt"
            thumbnail={projIcon3}
          >
            Responsive website for team login, leaderboard, and puzzle hunt content.
            <br></br>
            <Meta colorScheme="red">Python</Meta><Meta colorScheme="red">SQL</Meta><Meta>Javascript</Meta><Meta colorScheme="blue">Django</Meta>
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem 
            id="ladd" 
            thumbnail={projIcon4} 
            title="Ladd Observatory"
          >
            Updated website for the Ladd Observatory @ Brown. Holds historical imaging and booking.
            <br></br>
            <Meta>HTML</Meta><Meta>CSS</Meta><Meta>JavaScript</Meta>
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Collaborations
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem
            id="counterpointer"
            thumbnail={projIcon5}
            title="CounterPointer"
          >
            Interactive teaching tool for music theory students generating and resolving species counterpoint. Frontend Lead
            <br></br>
            <Meta colorScheme="red">Java</Meta><Meta colorScheme="purple">TypeScript</Meta><Meta colorScheme="purple">JavaScript</Meta><Meta colorScheme="blue">React</Meta>
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem
            id="brunocoin"
            thumbnail={projIcon6}
            title="BrunoCoin"
          >
            Stencil code for fully-functional Bitcoin-like token, BrunoCoin.
            <br></br>
            <Meta colorScheme="red">Golang</Meta>
          </WorkGridItem>
        </Section>
        

      </SimpleGrid>

      <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Past Projects
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.5}>
          <WorkGridItem 
            id="peactf" 
            thumbnail={projIcon7} 
            title="peaCTF">
            Founded capture-the-flag style web competition for aspiring cybersecurity students. Over 2,000 unique
            high school participants across the globe. Designed the website. Led problem-writing team.
            <br></br>
            <Meta colorScheme="red">C++</Meta><Meta colorScheme="red">SQL</Meta><Meta colorScheme="purple">JavaScript</Meta><Meta colorScheme="blue">React</Meta>
          </WorkGridItem>
        </Section>
        <Section delay={0.5}>
          <WorkGridItem 
            id="peaph" 
            thumbnail={projIcon8} 
            title="PEA Puzzle Hunt">
            Directed the design, preparation, for my high school’s annual puzzle
            competition. Over the first COVID summer, Attracted over 4,000 unique visitors to the site.
            <br></br>
            <Meta colorScheme="blue">Wix</Meta>
          </WorkGridItem>
        </Section>
        <Section delay={0.6}>
          <WorkGridItem
            id="peaph-archive"
            thumbnail={projIcon9}
            title="peaph-archive"
          >
            Automatic SSG archive site for the yearly puzzle content from the PEA Puzzle Hunt.
            <br></br>
            <Meta colorScheme="blue">Jekyll</Meta>
          </WorkGridItem>
        </Section>
        <Section delay={0.6}>
          <WorkGridItem 
            id="pseq" 
            thumbnail={projIcon10} 
            title="pSeq">
            Rough HTML prototype of an automatic p-element insertion finder tool.
            <br></br>
            <Meta colorScheme="purple">HTML</Meta><Meta colorScheme="purple">Javascript</Meta>
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Projects
