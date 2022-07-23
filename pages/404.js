import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Heading, Divider, Button, Text } from '@chakra-ui/react'
import obiOne from '../public/images/obiOne.webp'
import styled from '@emotion/styled'

const NotFoundContainer = styled.span`
  font-size: 18px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 20px;
  padding: 10px;
  gap: 30px;

  img:hover {
    animation: shake 0.5s;
    animation-iteration-count: infinite;
  }

  @keyframes shake {
    0% {
      transform: translate(1px, 1px) rotate(0deg);
    }
    10% {
      transform: translate(-1px, -2px) rotate(-1deg);
    }
    20% {
      transform: translate(-3px, 0px) rotate(1deg);
    }
    30% {
      transform: translate(3px, 2px) rotate(0deg);
    }
    40% {
      transform: translate(1px, -1px) rotate(1deg);
    }
    50% {
      transform: translate(-1px, 2px) rotate(-1deg);
    }
    60% {
      transform: translate(-3px, 1px) rotate(0deg);
    }
    70% {
      transform: translate(3px, 1px) rotate(-1deg);
    }
    80% {
      transform: translate(-1px, -1px) rotate(1deg);
    }
    90% {
      transform: translate(1px, 2px) rotate(0deg);
    }
    100% {
      transform: translate(1px, -2px) rotate(-1deg);
    }
  }
`

const NotFound = () => {
  return (
    <NotFoundContainer>
      <Heading mt={20} as="h1">
        404
      </Heading>
      <Image
        src={obiOne}
        className="not-found"
        alt="404"
        height="100%"
        width="100%"
        loading="lazy"
      />
      <Text>This is not the page you are looking for.</Text>
      <Divider my={6} />
      <Box align="center">
        <NextLink href="/">
          <Button colorScheme="orange">Return to home</Button>
        </NextLink>
      </Box>
    </NotFoundContainer>
  )
}

export default NotFound
