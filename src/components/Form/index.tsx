import React from 'react'
import { Input, Stack, Button, Heading } from '@chakra-ui/react'

const Form = () => {
  return (
    <>
      <Stack bg="gray.800" borderRadius="md" padding="6">
        <Heading mb="1rem" as="h1" size="md" color="white">
          Insira um email
        </Heading>
        <Input
          bg="gray.900"
          placeholder="Seu email"
          borderColor="transparent"
          _hover={{ borderColor: 'transparent' }}
          focusBorderColor="green.500"
          color="gray.500"
          borderRadius="sm"
        />
        <Button
          borderRadius="sm"
          bg="green.500"
          _hover={{ bg: 'green.400' }}
          color="white"
        >
          Enviar
        </Button>
      </Stack>
    </>
  )
}

export default Form
