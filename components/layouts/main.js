import Head from 'next/head'
//import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
//import VoxelDogLoader from '../voxel-dog-loader'

{/*const LazyVoxelDog = dynamic(() => import('../voxel-dog'), {
  ssr: false,
  loading: () => <VoxelDogLoader />
})*/}

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8} alignItems='center'>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="CharlyCodes' homepage" />
        <meta name="author" content="Carlos Chin" />
        <meta name="author" content="CharlyCodes" />
        <link rel="apple-touch-icon" href="alien.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:title" content="Carlos Chin" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@CharlyCodes" />
        <meta name="twitter:creator" content="@CharlyCodes" />
        
        <meta property="og:site_name" content="Carlos Chin" />
        <meta name="og:title" content="Carlos Chin" />
        <meta property="og:type" content="website" />
        
        <title>Carlos Chin - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW='container.xl' pt={20} centerContent>
        {/*<LazyVoxelDog />*/}

        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
