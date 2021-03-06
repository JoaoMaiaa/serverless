import React, { FormEvent, useState } from 'react'
import {
  Input,
  Stack,
  Button,
  Heading,
  Alert,
  AlertIcon
} from '@chakra-ui/react'
import axios from 'axios'

import { useRouter } from 'next/router'

const FormServerless = () => {
  const router = useRouter()
  const [error, setError] = useState(false)
  const [email, setEmail] = useState('')
  const [send, setSend] = useState(false)

  function submitHandler(e: FormEvent) {
    e.preventDefault()
    if (email == '') {
      setError(true)
      setEmail('')
    } else {
      setError(false)
      axios.post('/api/serverless', { email })
      setEmail('')
      setSend(true)
      router.push('/thanks')
    }
  }

  return (
    <>
      {!error ? null : (
        <Alert mb="0.5rem" borderRadius="md" status="error" variant="solid">
          <AlertIcon />
          Você precisa colocar o seu email
        </Alert>
      )}
      {!send ? null : (
        <Alert mb="0.5rem" borderRadius="md" status="success" variant="solid">
          <AlertIcon />
          Seu email foi enviado com sucesso
        </Alert>
      )}
      <Stack
        gap="1rem"
        bg="rgba(255, 255, 255, 0.08)"
        borderRadius="md"
        padding="6"
      >
        <Heading mb="1rem" as="h1" size="md" color="white">
          Insira um email
        </Heading>

        <form onSubmit={(e) => submitHandler(e)}>
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            size="lg"
            bg="teal.900"
            placeholder="Seu email"
            borderColor="transparent"
            _hover={{ borderColor: 'transparent' }}
            focusBorderColor="green.500"
            color="teal.500"
            borderRadius="sm"
            type="email"
          />
          <Button
            isDisabled={send}
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
            {send ? 'Enviado' : 'Enviar'}
          </Button>
        </form>
      </Stack>
    </>
  )
}

export default FormServerless
