import React from 'react'
import Head from 'next/head'
import Form from '../../components/Form'
import { Flex, Box, Image } from '@chakra-ui/react'

const HomeTemplate = () => {
  return (
    <>
      <Head>
        <title>Inscreva-se</title>
      </Head>
      <Flex wrap="wrap">
        <Box
          minW={{ lg: 'xl', md: 'md' }}
          h="100vh"
          bgGradient="linear(to-r, transparent, #000)"
          position="absolute"
          zIndex="999"
        ></Box>
        <Image
          display={{ base: 'none', lg: 'flex', md: 'none' }}
          zIndex="888"
          position="relative"
          w={{ xl: 'xl', lg: 'xl', md: 'md' }}
          objectFit="cover"
          h="100vh"
          src="/nature.jpg"
        />

        <Box mx="auto" mt="10rem">
          <Form />
        </Box>
      </Flex>
    </>
  )
}

export default HomeTemplate
