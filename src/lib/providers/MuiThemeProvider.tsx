import { PropsWithChildren, useMemo } from 'react'
import { useStore } from '../context/theme'
import {
  createTheme,
  CssBaseline,
  darkScrollbar,
  PaletteColorOptions,
  responsiveFontSizes,
  StyledEngineProvider,
  Theme,
  ThemeProvider,
} from '@mui/material'
import { grey } from '@mui/material/colors'

const MuiThemeProvider = ({ children }: PropsWithChildren) => {
  const { state } = useStore()

  const theme = useMemo(() => {
    const lightVariants = state.light
    const darkVariants = state.dark

    return responsiveFontSizes(
      createTheme({
        spacing: 4,
        typography: {
          fontFamily: [
            'Public Sans',
            'HelveticaNeue',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
          ].join(','),
          button: {
            textTransform: 'none',
          },
        },
        components: {
          MuiDialogTitle: {
            defaultProps: {
              component: 'div',
            },
            styleOverrides: {
              root: ({ theme }) => ({
                padding: theme.spacing(2, 4),
              }),
            },
          },
          MuiDialogContent: {
            styleOverrides: {
              root: ({ theme }) => ({
                padding: theme.spacing(4),
              }),
            },
          },
          MuiCssBaseline: {
            styleOverrides: (theme: Theme) => ({
              div: {
                ...darkScrollbar({
                  track: 'transparent',
                  thumb: grey[400],
                  active: grey[600],
                  ...theme.applyStyles('dark', {
                    thumb: grey[700],
                    active: grey[600],
                  }),
                }),
                scrollbarWidth: 'thin',
                WebkitFontSmoothing: 'auto',
              },
            }),
          },
          MuiDialogActions: {
            styleOverrides: {
              root: ({ theme }) => ({
                padding: theme.spacing(2, 4, 4, 4),
              }),
            },
          },
          MuiPaper: {
            styleOverrides: {
              root: ({ ownerState, theme }) => {
                const elevation = ownerState.elevation ?? 0

                const overlay =
                  elevation <= 0 ? 0 : elevation <= 1 ? 0.03 : elevation <= 2 ? 0.07 : elevation <= 3 ? 0.12 : 0.22

                return {
                  ...(theme.palette.mode === 'dark' && {
                    backgroundColor: theme.palette.background.paper,
                    backgroundImage:
                      theme.palette.mode === 'dark'
                        ? `linear-gradient(rgba(255, 255, 255, ${overlay}), rgba(255, 255, 255, ${overlay}))`
                        : 'none',
                  }),
                }
              },
            },
          },
          MuiCard: {
            styleOverrides: {
              root: ({ ownerState, theme }) => {
                const elevation = ownerState.elevation ?? 0

                const overlay =
                  elevation <= 0 ? 0 : elevation <= 1 ? 0.03 : elevation <= 2 ? 0.07 : elevation <= 3 ? 0.12 : 0.22

                return {
                  ...(theme.palette.mode === 'dark' && {
                    backgroundColor: theme.palette.background.paper,
                    backgroundImage:
                      theme.palette.mode === 'dark'
                        ? `linear-gradient(rgba(255, 255, 255, ${overlay}), rgba(255, 255, 255, ${overlay}))`
                        : 'none',
                  }),
                }
              },
            },
          },
          MuiTextField: {
            defaultProps: {
              autoComplete: 'off',
            },
            styleOverrides: {
              root: ({ theme }) => ({
                '& .MuiInputBase-root': {
                  fontSize: theme.typography.pxToRem(16),
                },
                '& .MuiInputBase-sizeSmall': {
                  fontSize: theme.typography.pxToRem(14),
                },
                '& .MuiInputBase-sizeLarge': {
                  fontSize: theme.typography.pxToRem(18),
                },
              }),
            },
          },
        },
        cssVariables: false,

        colorSchemes: {
          light: {
            palette: {
              ...lightVariants.palette,
              primary: {
                main: lightVariants.primary,
              },
              accent: {
                main: lightVariants.accent || lightVariants.secondary || lightVariants.primary,
              },
              ...(lightVariants.secondary ? { secondary: { main: lightVariants.secondary } } : {}),
              ...(lightVariants.gradient ? { gradient: lightVariants.gradient } : {}),
              ...(lightVariants.background ? { background: lightVariants.background } : {}),
              ...(lightVariants.text ? { text: lightVariants.text } : {}),
              paper: {
                main: '#fff',
              },
            },
          },
          dark: {
            palette: {
              ...darkVariants.palette,
              primary: {
                main: darkVariants.primary,
              },
              accent: {
                main: darkVariants.accent || darkVariants.secondary || darkVariants.primary,
              },
              ...(darkVariants.secondary ? { secondary: { main: darkVariants.secondary } } : {}),
              ...(darkVariants.gradient ? { gradient: darkVariants.gradient } : {}),
              ...(darkVariants.background ? { background: darkVariants.background } : {}),
              ...(darkVariants.text ? { text: darkVariants.text } : {}),
              paper: {
                main: '#fff',
              },
            },
          },
        },
      }),
    )
  }, [state])

  return (
    <StyledEngineProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  )
}

export default MuiThemeProvider

declare module '@mui/material/styles' {
  interface CustomPalette {
    default?: PaletteColorOptions
    paper?: PaletteColorOptions
    accent?: PaletteColorOptions
    gradient?: string
  }
  interface Palette extends CustomPalette {}
  interface PaletteOptions extends CustomPalette {}
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    default: true
    paper: true
    accent: true
  }
}

declare module '@mui/material/IconButton' {
  interface IconButtonPropsColorOverrides {
    default: true
    paper: true
    accent: true
  }
}

declare module '@mui/material/SvgIcon' {
  interface SvgIconPropsColorOverrides {
    default: true
    paper: true
    accent: true
  }
}
