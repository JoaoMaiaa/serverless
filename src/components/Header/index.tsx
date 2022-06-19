import React from 'react'

import { Box } from '@chakra-ui/react'

const Header = () => {
  return (
    <>
      <Box
        fontWeight="thin"
        fontSize="xl"
        zIndex="1000"
        position="absolute"
        right="10"
        top="10"
        color="teal.600"
        textAlign="end"
      >
        Serverless{' '}
        <Box color="green.500" fontWeight="bold" display="inline-block">
          functions
        </Box>
      </Box>
    </>
  )
}

export default Header
