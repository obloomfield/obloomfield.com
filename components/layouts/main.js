import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import TopPuzzleLoader from '../top-puzzle-loader'

const LazyTopPuzzle = dynamic(() => import('../top-puzzle'), {
  ssr: false,
  loading: () => <TopPuzzleLoader />
})

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Orion's Site" />
        <meta name="author" content="Orion Bloomfield" />

        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon-removebg.ico" type="image/x-icon" />
        <meta name="twitter:card" content="summary_large_image" />

        <meta property="og:site_name" content="Orion's Site" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/card.png" />
        <title>Orion's Site - Home</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <LazyTopPuzzle />

        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
