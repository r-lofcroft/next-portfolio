import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  img {
    transition: 300ms ease;
    padding-right: 0.75rem !important;
  }

  &:hover img {
    transform: rotate(20deg);
  }
`

const Logo = () => {
  const moustacheImg = `/images/moustache${useColorModeValue('', '-dark')}.webp`

  return (
    <Link href="/" scroll={false}>
      <a>
        <LogoBox>
          <Image src={moustacheImg} width={20} height={20} alt="logo" />
          <Text
            color={useColorModeValue('gray.800', 'whiteAlpha.900')}
            fontFamily='Open Sans", sans-serif'
            fontWeight="bold"
          >
            Robin Williscroft{' '}
          </Text>
        </LogoBox>
      </a>
    </Link>
  )
}

export default Logo
