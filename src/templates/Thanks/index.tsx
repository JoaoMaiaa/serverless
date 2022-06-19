import React from 'react'
import {
  Container,
  Box,
  Image,
  Text,
  Heading,
  Link,
  Button
} from '@chakra-ui/react'
import Head from 'next/head'
import Footer from '../../components/Footer'

const ThanksTemplate = () => {
  return (
    <>
      <Head>
        <title>Obrigado</title>
      </Head>

      <Box>
        <Box
          position="absolute"
          w="100%"
          h="100vh"
          bgGradient="linear(to-b, transparent, #000)"
        ></Box>
        <Image h="100vh" w="100%" objectFit="cover" src="/nature.jpg" />
      </Box>
      <Container maxW="container.lg" mt="5rem">
        <Box>
          <Heading as="h1" textAlign="justify" mx="auto" color="green.600">
            Obrigado pela sua inscrição
          </Heading>
          <Text mt="1rem" textAlign="justify" color="teal.900">
            Este site tem por objetivo a produção de um pequeno projeto que
            envolve o que conceito de serverless functions
          </Text>
          <Heading textAlign="justify" mt="2rem" as="h2" color="green.600">
            O que são serverless functions?
          </Heading>
          <Text mt="1rem" textAlign="justify" color="teal.900">
            Serverless functions ou &quot;funções sem servidores&quot; permitem
            a execução de código sob demanda sem a necessidade de gerenciar sua
            própria infraestrutura, provisionar servidores ou atualizar hadware.
            Funções (Lambda) permitem que os desenvolvedores escrevam funções em
            JavaScript e outras linguagens para lidar com autenticação de
            usuários, envios de formlários, consultas de banco de dados,
            comandos personalizados do Slack e muito mais.
          </Text>
          <Text textAlign="justify" color="teal.900">
            Em outras palavras, as funções serverless geram menos custos na
            medida em que essas funções só são executadas no momento da operação
            propriamente da aplicação, ajudando assim a evitar o tempo de
            inatividade e pagando pela computação sempre ativa.
          </Text>
        </Box>
        <Box display="flex" justifyContent="center" mt="2rem">
          <Link href="/">
            <Button
              borderRadius="sm"
              _hover={{ bg: 'green.400' }}
              color="white"
              bg="green.500"
            >
              Voltar
            </Button>
          </Link>
        </Box>
        <Box my="2rem">
          <Footer />
        </Box>
      </Container>
    </>
  )
}

export default ThanksTemplate
