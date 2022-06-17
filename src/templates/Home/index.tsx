import React from 'react'
import Head from 'next/head'
import FormServerless from '../../components/Form'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Flex, Box, Image } from '@chakra-ui/react'

const HomeTemplate = () => {
  return (
    <>
      <Head>
        <title>Inscreva-se</title>
      </Head>
      <Header />
      <Flex wrap="wrap">
        <Box
          display={{ base: 'none', lg: 'flex', md: 'none' }}
          minW={{ lg: 'xl', md: 'md' }}
          h="110vh"
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
          h="110vh"
          src="/nature.jpg"
        />

        <Box mx="auto" mt="8rem" p="6">
          <FormServerless />
          <Footer />
        </Box>
      </Flex>
    </>
  )
}

export default HomeTemplate
