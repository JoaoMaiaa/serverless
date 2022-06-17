import React, { FormEvent } from 'react'
import { Input, Stack, Button, Heading } from '@chakra-ui/react'

const FormServerless = () => {
  function submitHandler(e: FormEvent) {
    e.preventDefault()
    console.log('ok')
  }

  return (
    <>
      <Stack gap="1rem" bg="gray.800" borderRadius="md" padding="6">
        <Heading mb="1rem" as="h1" size="md" color="white">
          Insira um email
        </Heading>

        <form onSubmit={(e) => submitHandler(e)}>
          <Input
            size="lg"
            bg="gray.900"
            placeholder="Seu email"
            borderColor="transparent"
            _hover={{ borderColor: 'transparent' }}
            focusBorderColor="green.500"
            color="gray.500"
            borderRadius="sm"
            type="email"
          />
          <Button
            size="lg"
            mt="1.5rem"
            w="100%"
            type="submit"
            id="button"
            borderRadius="sm"
            bg="green.500"
            _hover={{ bg: 'green.400' }}
            color="white"
          >
            Enviar
          </Button>
        </form>
      </Stack>
    </>
  )
}

export default FormServerless
