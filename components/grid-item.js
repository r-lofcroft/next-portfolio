import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Text, LinkBox, LinkOverlay } from '@chakra-ui/react'
import { Global } from '@emotion/react'

export const GridItem = ({ children, href, title, thumbnail }) => (
  <Box w="100%" align="center">
    <LinkBox cursor="pointer">
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        placeholder="blur"
        loading="lazy"
        w="80%"
      />
      <LinkOverlay href={href} target="_blank">
        <Text mt={2}>{title}</Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
)
export const WorkGridItem = ({ children, title, thumbnail, href }) => (
  <Box w="100%" align="center">
    <NextLink href={`${href}`}>
      <LinkBox cursor="pointer">
        <Image
          src={thumbnail}
          alt={title}
          className="grid-item-thumbnail"
          placeholder="blur"
        />
        <LinkOverlay href={`${href}`}>
          <Text mt={2} fontSize={20}>
            {title}
          </Text>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
      </LinkBox>
    </NextLink>
  </Box>
)
export const TempGridItem = ({ children, title, thumbnail }) => (
  <Box w="100%" align="center">
    {' '}
    <Image
      src={thumbnail}
      alt={title}
      className="grid-item-thumbnail"
      placeholder="blur"
    />
    <Text mt={2} fontSize={20}>
      {title}
    </Text>
    <Text fontSize={14}>{children}</Text>
  </Box>
)
export const GridItemStyle = () => (
  <Global
    styles={`
  .grid-item-thumbnail{
    border-radius:12px;

  }
  `}
  />
)
