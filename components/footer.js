import { Box, Link } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      With 💗 by Orion Bloomfield. ©{new Date().getFullYear()} | <a href='mailto:obloomfield@brown.edu'>Contact</a>
    </Box>
  )
}

export default Footer
