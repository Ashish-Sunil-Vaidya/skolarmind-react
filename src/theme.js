import { extendTheme, withDefaultColorScheme } from '@chakra-ui/react'
import '@fontsource/open-sans'
import '@fontsource/raleway'

const theme = extendTheme({
  fonts: {
    heading: `'Open Sans', sans-serif`,
    body: `'Raleway', sans-serif`,
  },
},
  withDefaultColorScheme({
    colorScheme: 'teal',
    components: ['Button', 'Input', 'Select', 'Checkbox']
  }))


export default theme