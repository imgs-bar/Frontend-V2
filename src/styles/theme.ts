import { extendTheme } from "@chakra-ui/react"
import { createBreakpoints } from "@chakra-ui/theme-tools"

const breakpoints = createBreakpoints({
    sm: '40em',
    md: '52em',
    lg: '64em',
    xl: '80em',
})

const fontWeights = {
    normal: 300,
    medium: 600,
    bold: 700
}

const theme = extendTheme({ fontWeights,
    config: {
        initialColorMode: "dark",
        useSystemColorMode: false,
      }, })

export default theme