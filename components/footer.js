import { Box } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">Made on earth by Humans... Trust me! 👽 <br/> 
    &copy; {new Date().getFullYear()} Carlos Chin. All Rights Reserved.<br/> Website built based on the <a href='https://www.craftz.dog/' target='_blank' rel='noreferrer'>Takuya Matsuyama&apos;s website</a>.
    </Box>
  )
}

export default Footer
