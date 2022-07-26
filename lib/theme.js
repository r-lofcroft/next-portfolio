import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    body: {
      bg: mode('#fedfd2', '#373544')(props)
    }
  })
}
const components = {
  Heading: {
    variants: {
      'section-title': {
        fontsize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: '#525252',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4
      },
      'sub-title': {
        fontsize: 10,
        textUnderlineOffset: 6,
        textDecorationColor: '#525252',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4
      }
    }
  },
  Link: {
    baseStyle: props => ({
      color: mode('#DD6B20', '#FBD38D')(props),
      textUnderlineOffset: 3
    })
  }
}

const fonts = {
  heading: "'Open Sans'"
}

const colors = {
  glassTeal: 'orange'
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true
}

const theme = extendTheme({ config, styles, components, colors, fonts })

export default theme
