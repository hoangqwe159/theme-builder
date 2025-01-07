import { createContext, ReactNode, useContext, useReducer } from 'react'
import { ColorVariants, ThemeBuilderProps } from '../components'
import { SimplePaletteColorOptions } from '@mui/material'

export interface ThemeState {
  light: ColorVariants
  dark: ColorVariants
}

type Action =
  | { type: 'SET_LIGHT_PRIMARY'; color: string }
  | { type: 'SET_LIGHT_SECONDARY'; color: string }
  | { type: 'SET_LIGHT_ACCENT'; color: string }
  | { type: 'SET_LIGHT_GRADIENT'; gradient: string }
  | { type: 'SET_LIGHT_BACKGROUND_DEFAULT'; color: string }
  | { type: 'SET_LIGHT_BACKGROUND_PAPER'; color: string }
  | { type: 'SET_LIGHT_TEXT_PRIMARY'; color: string }
  | { type: 'SET_LIGHT_TEXT_SECONDARY'; color: string }
  | { type: 'SET_LIGHT_TEXT_DISABLED'; color: string }
  | { type: 'SET_LIGHT_INFO'; color: string }
  | { type: 'SET_LIGHT_SUCCESS'; color: string }
  | { type: 'SET_LIGHT_WARNING'; color: string }
  | { type: 'SET_LIGHT_ERROR'; color: string }
  | { type: 'SET_DARK_PRIMARY'; color: string }
  | { type: 'SET_DARK_SECONDARY'; color: string }
  | { type: 'SET_DARK_ACCENT'; color: string }
  | { type: 'SET_DARK_GRADIENT'; gradient: string }
  | { type: 'SET_DARK_BACKGROUND_DEFAULT'; color: string }
  | { type: 'SET_DARK_BACKGROUND_PAPER'; color: string }
  | { type: 'SET_DARK_TEXT_PRIMARY'; color: string }
  | { type: 'SET_DARK_TEXT_SECONDARY'; color: string }
  | { type: 'SET_DARK_TEXT_DISABLED'; color: string }
  | { type: 'SET_DARK_INFO'; color: string }
  | { type: 'SET_DARK_SUCCESS'; color: string }
  | { type: 'SET_DARK_WARNING'; color: string }
  | { type: 'SET_DARK_ERROR'; color: string }
  | { type: 'SET_COLOR_SCHEMES'; colorSchemes: { light: ColorVariants; dark: ColorVariants } }

const ThemeContext = createContext<
  | {
      state: ThemeState
      dispatch: React.Dispatch<Action>
      useSelector: <T>(selector: (state: ThemeState) => T) => T
    }
  | undefined
>(undefined)

const themeReducer = (state: ThemeState, action: Action): ThemeState => {
  switch (action.type) {
    case 'SET_LIGHT_PRIMARY':
      return { ...state, light: { ...state.light, primary: action.color } }
    case 'SET_LIGHT_SECONDARY':
      return { ...state, light: { ...state.light, secondary: action.color } }
    case 'SET_LIGHT_ACCENT':
      return { ...state, light: { ...state.light, accent: action.color } }
    case 'SET_LIGHT_GRADIENT':
      return { ...state, light: { ...state.light, gradient: action.gradient } }
    case 'SET_LIGHT_BACKGROUND_DEFAULT':
      return { ...state, light: { ...state.light, background: { ...state.light.background, default: action.color } } }
    case 'SET_LIGHT_BACKGROUND_PAPER':
      return { ...state, light: { ...state.light, background: { ...state.light.background, paper: action.color } } }
    case 'SET_LIGHT_TEXT_PRIMARY':
      return { ...state, light: { ...state.light, text: { ...state.light.text, primary: action.color } } }
    case 'SET_LIGHT_TEXT_SECONDARY':
      return { ...state, light: { ...state.light, text: { ...state.light.text, secondary: action.color } } }
    case 'SET_LIGHT_TEXT_DISABLED':
      return { ...state, light: { ...state.light, text: { ...state.light.text, disabled: action.color } } }
    case 'SET_LIGHT_INFO':
      return { ...state, light: { ...state.light, palette: { ...state.light.palette, info: { main: action.color } } } }
    case 'SET_LIGHT_SUCCESS':
      return {
        ...state,
        light: { ...state.light, palette: { ...state.light.palette, success: { main: action.color } } },
      }
    case 'SET_LIGHT_WARNING':
      return {
        ...state,
        light: { ...state.light, palette: { ...state.light.palette, warning: { main: action.color } } },
      }
    case 'SET_LIGHT_ERROR':
      return { ...state, light: { ...state.light, palette: { ...state.light.palette, error: { main: action.color } } } }
    case 'SET_DARK_PRIMARY':
      return { ...state, dark: { ...state.dark, primary: action.color } }
    case 'SET_DARK_SECONDARY':
      return { ...state, dark: { ...state.dark, secondary: action.color } }
    case 'SET_DARK_ACCENT':
      return { ...state, dark: { ...state.dark, accent: action.color } }
    case 'SET_DARK_GRADIENT':
      return { ...state, dark: { ...state.dark, gradient: action.gradient } }
    case 'SET_DARK_BACKGROUND_DEFAULT':
      return { ...state, dark: { ...state.dark, background: { ...state.dark.background, default: action.color } } }
    case 'SET_DARK_BACKGROUND_PAPER':
      return { ...state, dark: { ...state.dark, background: { ...state.dark.background, paper: action.color } } }
    case 'SET_DARK_TEXT_PRIMARY':
      return { ...state, dark: { ...state.dark, text: { ...state.dark.text, primary: action.color } } }
    case 'SET_DARK_TEXT_SECONDARY':
      return { ...state, dark: { ...state.dark, text: { ...state.dark.text, secondary: action.color } } }
    case 'SET_DARK_TEXT_DISABLED':
      return { ...state, dark: { ...state.dark, text: { ...state.dark.text, disabled: action.color } } }
    case 'SET_DARK_INFO':
      return { ...state, dark: { ...state.dark, palette: { ...state.dark.palette, info: { main: action.color } } } }
    case 'SET_DARK_SUCCESS':
      return { ...state, dark: { ...state.dark, palette: { ...state.dark.palette, success: { main: action.color } } } }
    case 'SET_DARK_WARNING':
      return { ...state, dark: { ...state.dark, palette: { ...state.dark.palette, warning: { main: action.color } } } }
    case 'SET_DARK_ERROR':
      return { ...state, dark: { ...state.dark, palette: { ...state.dark.palette, error: { main: action.color } } } }
    case 'SET_COLOR_SCHEMES':
      return { ...state, ...action.colorSchemes }
    default:
      return state
  }
}

// selectors
const selectLightPrimary = (state: ThemeState) => state.light.primary
const selectLightSecondary = (state: ThemeState) => state.light.secondary
const selectLightAccent = (state: ThemeState) => state.light.accent
const selectLightGradient = (state: ThemeState) => state.light.gradient
const selectLightBackgroundDefault = (state: ThemeState) => state.light.background.default
const selectLightBackgroundPaper = (state: ThemeState) => state.light.background.paper
const selectLightTextPrimary = (state: ThemeState) => state.light.text.primary
const selectLightTextSecondary = (state: ThemeState) => state.light.text.secondary
const selectLightTextDisabled = (state: ThemeState) => state.light.text.disabled
const selectLightInfo = (state: ThemeState) => (state.light.palette?.info as SimplePaletteColorOptions)?.main
const selectLightSuccess = (state: ThemeState) => (state.light.palette?.success as SimplePaletteColorOptions)?.main
const selectLightWarning = (state: ThemeState) => (state.light.palette?.warning as SimplePaletteColorOptions)?.main
const selectLightError = (state: ThemeState) => (state.light.palette?.error as SimplePaletteColorOptions)?.main
const selectDarkPrimary = (state: ThemeState) => state.dark.primary
const selectDarkSecondary = (state: ThemeState) => state.dark.secondary
const selectDarkAccent = (state: ThemeState) => state.dark.accent
const selectDarkGradient = (state: ThemeState) => state.dark.gradient
const selectDarkBackgroundDefault = (state: ThemeState) => state.dark.background.default
const selectDarkBackgroundPaper = (state: ThemeState) => state.dark.background.paper
const selectDarkTextPrimary = (state: ThemeState) => state.dark.text.primary
const selectDarkTextSecondary = (state: ThemeState) => state.dark.text.secondary
const selectDarkTextDisabled = (state: ThemeState) => state.dark.text.disabled
const selectDarkInfo = (state: ThemeState) => (state.dark.palette?.info as SimplePaletteColorOptions)?.main
const selectDarkSuccess = (state: ThemeState) => (state.dark.palette?.success as SimplePaletteColorOptions)?.main
const selectDarkWarning = (state: ThemeState) => (state.dark.palette?.warning as SimplePaletteColorOptions)?.main
const selectDarkError = (state: ThemeState) => (state.dark.palette?.error as SimplePaletteColorOptions)?.main

const useStore = () => {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

const useSelector = <T>(selector: (state: ThemeState) => T): T => {
  const { state } = useStore()
  return selector(state)
}

export {
  useStore,
  useSelector,
  themeReducer,
  ThemeContext,
  selectLightPrimary,
  selectLightSecondary,
  selectLightAccent,
  selectLightGradient,
  selectLightBackgroundDefault,
  selectLightBackgroundPaper,
  selectLightTextPrimary,
  selectLightTextSecondary,
  selectLightTextDisabled,
  selectLightInfo,
  selectLightSuccess,
  selectLightWarning,
  selectLightError,
  selectDarkPrimary,
  selectDarkSecondary,
  selectDarkAccent,
  selectDarkGradient,
  selectDarkBackgroundDefault,
  selectDarkBackgroundPaper,
  selectDarkTextPrimary,
  selectDarkTextSecondary,
  selectDarkTextDisabled,
  selectDarkInfo,
  selectDarkSuccess,
  selectDarkWarning,
  selectDarkError,
}

const LIGHT_PALETTE = {
  error: {
    main: '#E51D0D',
  },
  warning: {
    main: '#F49604',
  },
  info: {
    main: '#4B9EFF',
  },
  success: {
    main: '#A2E262',
  },
}

const DARK_PALETTE = {
  error: {
    main: '#F9958D',
  },
  warning: {
    main: '#FDD08B',
  },
  info: {
    main: '#AED3FF',
  },
  success: {
    main: '#D5F2B8',
  },
}

const LIGHT_TEXT = {
  primary: '#374253',
  secondary: 'rgba(0, 0, 0, 0.6)',
  disabled: '#999FAC',
}

const DARK_TEXT = {
  primary: '#FFFFFF',
  secondary: 'rgba(255, 255, 255, 0.7)',
  disabled: 'rgba(255, 255, 255, 0.5)',
}

export const DEFAULT_SCHEME = {
  light: {
    primary: '#2962FF',
    secondary: '#245A9E',
    accent: '#48B6FF',
    gradient:
      'linear-gradient(180deg, #0d2ffc 0%, #1749fd 20%, #2162fd 40%, #2a79fe 60%, #348ffe 80%, #3ea3ff 90%, #48b6ff 100%)',
    background: {
      default: '#F4F7FF',
      paper: '#FFFFFF',
    },
    text: LIGHT_TEXT,
    palette: LIGHT_PALETTE,
  },
  dark: {
    primary: '#5C87FF',
    secondary: '#3584E6',
    accent: '#48B6FF',
    gradient:
      'linear-gradient(180deg, #0d2ffc 0%, #1749fd 20%, #2162fd 40%, #2a79fe 60%, #348ffe 80%, #3ea3ff 90%, #48b6ff 100%)',
    background: {
      default: '#05070D',
      paper: '#05070D',
    },
    text: DARK_TEXT,
    palette: DARK_PALETTE,
  },
}

export const EMERALD_SCHEME = {
  light: {
    primary: '#245A4B',
    secondary: '#3A9339',
    accent: '#93BF1F',
    gradient:
      'linear-gradient(180deg, #245a4b 0%, #28644c 16.67%, #2b6d4b 33.33%, #2f7748 50%, #328044 66.67%, #368a3f 83.33%, #3a9339 100%)',
    background: {
      default: '#F5F5F5',
      paper: '#FFFFFF',
    },
    text: LIGHT_TEXT,
    palette: LIGHT_PALETTE,
  },
  dark: {
    primary: '#588E7F',
    secondary: '#549353',
    accent: '#A2BF58',
    gradient:
      'linear-gradient(180deg, #245a4b 0%, #28644c 16.67%, #2b6d4b 33.33%, #2f7748 50%, #328044 66.67%, #368a3f 83.33%, #3a9339 100%)',
    background: {
      default: '#10140f',
      paper: '#10140f',
    },
    text: DARK_TEXT,
    palette: DARK_PALETTE,
  },
}

export const FIRE_SCHEME = {
  light: {
    primary: '#F1571F',
    secondary: '#FF9021',
    accent: '#6F7580',
    gradient:
      'linear-gradient(180deg, #f1571f 0%, #f35e1e 10%, #f5651e 20%, #f66b1e 30%, #f8721e 40%, #f9781e 50%, #fb7e1e 60%, #fc841f 70%, #fe8a20 80%, #ff9021 90%)',
    background: {
      default: '#F5F5F6',
      paper: '#FFFFFF',
    },
    text: LIGHT_TEXT,
    palette: LIGHT_PALETTE,
  },
  dark: {
    primary: '#FD7847',
    secondary: '#FF9021',
    accent: '#858C99',
    gradient:
      'linear-gradient(180deg, #f1571f 0%, #f35e1e 10%, #f5651e 20%, #f66b1e 30%, #f8721e 40%, #f9781e 50%, #fb7e1e 60%, #fc841f 70%, #fe8a20 80%, #ff9021 90%)',
    background: {
      default: '#1A110F',
      paper: '#1A110F',
    },
    text: DARK_TEXT,
    palette: DARK_PALETTE,
  },
}

export const FUCHSIA_SCHEME = {
  light: {
    primary: '#712AF5',
    secondary: '#FF1A58',
    accent: '#D400F2',
    gradient: 'linear-gradient(180deg, #712af5 0%, #ff1a58 100%)',
    background: {
      default: '#F5F5F5',
      paper: '#FFFFFF',
    },
    text: LIGHT_TEXT,
    palette: LIGHT_PALETTE,
  },
  dark: {
    primary: '#9054FF',
    secondary: '#F0547D',
    accent: '#DE48F4',
    gradient: 'linear-gradient(180deg, #712af5 0%, #ff1a58 100%)',
    background: {
      default: '#1A1112',
      paper: '#1A1112',
    },
    text: DARK_TEXT,
    palette: DARK_PALETTE,
  },
}

export const INDIGO_SCHEME = {
  light: {
    primary: '#9A00F8',
    secondary: '#0C0066',
    accent: '#4A00A6',
    gradient: 'linear-gradient(180deg, #0c0066 0%, #280283 20%, #4305a0 40%, #5e06bd 60%, #7b06db 80%, #9a00f8 100%)',
    background: {
      default: '#F5F5F5',
      paper: '#FFFFFF',
    },
    text: LIGHT_TEXT,
    palette: LIGHT_PALETTE,
  },
  dark: {
    primary: '#B54AF7',
    secondary: '#6C58FC',
    accent: '#9549F2',
    gradient: 'linear-gradient(180deg, #0c0066 0%, #280283 20%, #4305a0 40%, #5e06bd 60%, #7b06db 80%, #9a00f8 100%)',
    background: {
      default: '#151217',
      paper: '#151217',
    },
    text: DARK_TEXT,
    palette: DARK_PALETTE,
  },
}

export const LIME_SCHEME = {
  light: {
    primary: '#55AF04',
    secondary: '#88E03B',
    accent: '#1EC65F',
    gradient:
      'linear-gradient(180deg, #55af04 0%, #5eb712 16.67%, #66bf1c 33.33%, #6fc725 50%, #77cf2c 66.67%, #7fd834 83.33%, #88e03b 100%)',
    background: {
      default: '#F5F5F5',
      paper: '#FFFFFF',
    },
    text: LIGHT_TEXT,
    palette: LIGHT_PALETTE,
  },
  dark: {
    primary: '#75B13F',
    secondary: '#97E058',
    accent: '#37C76F',
    gradient:
      'linear-gradient(180deg, #55af04 0%, #5eb712 16.67%, #66bf1c 33.33%, #6fc725 50%, #77cf2c 66.67%, #7fd834 83.33%, #88e03b 100%)',
    background: {
      default: '#11140E',
      paper: '#11140E',
    },
    text: DARK_TEXT,
    palette: DARK_PALETTE,
  },
}

export const OCEAN_SCHEME = {
  light: {
    primary: '#3380FC',
    secondary: '#59E07C',
    accent: '#50CAEA',
    gradient:
      'linear-gradient(180deg, #3380fc 0%, #0090ff 10%, #009eff 20%, #00aaff 30%, #00b5f3 40%, #00bfe3 50%, #00c8d0 60%, #00cfbb 70%, #00d6a5 80%, #00dc8f 90%, #59e07c 100%)',
    background: {
      default: '#F4F7FF',
      paper: '#FFFFFF',
    },
    text: LIGHT_TEXT,
    palette: LIGHT_PALETTE,
  },
  dark: {
    primary: '#5190F7',
    secondary: '#77E292',
    accent: '#50CAEA',
    gradient:
      'linear-gradient(180deg, #3380fc 0%, #0090ff 10%, #009eff 20%, #00aaff 30%, #00b5f3 40%, #00bfe3 50%, #00c8d0 60%, #00cfbb 70%, #00d6a5 80%, #00dc8f 90%, #59e07c 100%)',
    background: {
      default: '#121318',
      paper: '#121318',
    },
    text: DARK_TEXT,
    palette: DARK_PALETTE,
  },
}

export const RED_MERLOT_SCHEME = {
  light: {
    primary: '#F03337',
    secondary: '#BF171D',
    accent: '#374253',
    gradient:
      'linear-gradient(0deg, #f03337 0%, #ea3034 12.5%, #e42c30 25%, #dd292d 37.5%, #d7262a 50%, #d12227 62.5%, #cb1f23 75%, #c51b20 87.5%, #bf171d 100%)',
    background: {
      default: '#F5F5F6',
      paper: '#FFFFFF',
    },
    text: LIGHT_TEXT,
    palette: LIGHT_PALETTE,
  },
  dark: {
    primary: '#F03337',
    secondary: '#D91A20',
    accent: '#596C87',
    gradient:
      'linear-gradient(0deg, #f03337 0%, #ea3034 12.5%, #e42c30 25%, #dd292d 37.5%, #d7262a 50%, #d12227 62.5%, #cb1f23 75%, #c51b20 87.5%, #bf171d 100%)',
    background: {
      default: '#1A1110',
      paper: '#1A1110',
    },
    text: DARK_TEXT,
    palette: DARK_PALETTE,
  },
}

export const ROYAL_SCHEME = {
  light: {
    primary: '#2052BA',
    secondary: '#12356D',
    accent: '#F1471C',
    gradient:
      'linear-gradient(0deg, #2052ba 0%, #1d4fb3 10%, #1b4dac 20%, #194aa5 30%, #17489d 40%, #164596 50%, #14428f 60%, #144088 70%, #133d81 80%, #123a7b 90%, #123874 95%, #12356d 100%)',
    background: {
      default: '#EDEFF2',
      paper: '#FFFFFF',
    },
    text: LIGHT_TEXT,
    palette: LIGHT_PALETTE,
  },
  dark: {
    primary: '#5980D4',
    secondary: '#3F78F0',
    accent: '#F06D4B',
    gradient:
      'linear-gradient(0deg, #2052ba 0%, #1d4fb3 10%, #1b4dac 20%, #194aa5 30%, #17489d 40%, #164596 50%, #14428f 60%, #144088 70%, #133d81 80%, #123a7b 90%, #123874 95%, #12356d 100%)',
    background: {
      default: '#111318',
      paper: '#111318',
    },
    text: DARK_TEXT,
    palette: DARK_PALETTE,
  },
}

export const SAPPHIRE_SCHEME = {
  light: {
    primary: '#155799',
    secondary: '#3C9957',
    accent: '#173D77',
    gradient:
      'linear-gradient(180deg, #155799 0%, #005f9d 10%, #00679f 20%, #006f9d 30%, #00769a 40%, #007c94 50%, #00828c 60%, #008882 70%, #008d78 80%, #00916d 90%, #119662 95%, #3c9957 100%)',
    background: {
      default: '#F5F5F5',
      paper: '#FFFFFF',
    },
    text: LIGHT_TEXT,
    palette: LIGHT_PALETTE,
  },
  dark: {
    primary: '#5D83B3',
    secondary: '#3C9957',
    accent: '#2769CC',
    gradient:
      'linear-gradient(180deg, #155799 0%, #005f9d 10%, #00679f 20%, #006f9d 30%, #00769a 40%, #007c94 50%, #00828c 60%, #008882 70%, #008d78 80%, #00916d 90%, #119662 95%, #3c9957 100%)',
    background: {
      default: '#121318',
      paper: '#121318',
    },
    text: DARK_TEXT,
    palette: DARK_PALETTE,
  },
}

export const SLATE_SCHEME = {
  light: {
    primary: '#29323C',
    secondary: '#5B6C7D',
    accent: '#7D94AD',
    gradient:
      'linear-gradient(180deg, #29323c 0%, #303a45 14%, #37424e 28%, #3e4a57 42%, #455260 57%, #4c5b6a 71%, #546373 85%, #5b6c7d 100%)',
    background: {
      default: '#F5F5F5',
      paper: '#FFFFFF',
    },
    text: LIGHT_TEXT,
    palette: LIGHT_PALETTE,
  },
  dark: {
    primary: '#8FA0B3',
    secondary: '#93AEC9',
    accent: '#7D94AD',
    gradient:
      'linear-gradient(180deg, #29323c 0%, #303a45 14%, #37424e 28%, #3e4a57 42%, #455260 57%, #4c5b6a 71%, #546373 85%, #5b6c7d 100%)',
    background: {
      default: '#101418',
      paper: '#101418',
    },
    text: DARK_TEXT,
    palette: DARK_PALETTE,
  },
}

export const TEAL_SCHEME = {
  light: {
    primary: '#04668B',
    secondary: '#53D0C8',
    accent: '#48B6D7',
    gradient:
      'linear-gradient(180deg, #04668b 0%, #097091 10%, #0f7a98 20%, #14859e 30%, #1b8fa4 40%, #229aaa 50%, #29a4b1 60%, #30afb7 70%, #38b9bd 80%, #41c3c3 90%, #4acac5 95%, #53d0c8 100%)',
    background: {
      default: '#F5F5F5',
      paper: '#FFFFFF',
    },
    text: LIGHT_TEXT,
    palette: LIGHT_PALETTE,
  },
  dark: {
    primary: '#0699CF',
    secondary: '#49B8B0',
    accent: '#48B6D7',
    gradient:
      'linear-gradient(180deg, #04668b 0%, #097091 10%, #0f7a98 20%, #14859e 30%, #1b8fa4 40%, #229aaa 50%, #29a4b1 60%, #30afb7 70%, #38b9bd 80%, #41c3c3 90%, #4acac5 95%, #53d0c8 100%)',
    background: {
      default: '#0e1514',
      paper: '#0e1514',
    },
    text: DARK_TEXT,
    palette: DARK_PALETTE,
  },
}

const SCHEMES = [
  DEFAULT_SCHEME,
  EMERALD_SCHEME,
  FIRE_SCHEME,
  FUCHSIA_SCHEME,
  INDIGO_SCHEME,
  LIME_SCHEME,
  OCEAN_SCHEME,
  RED_MERLOT_SCHEME,
  ROYAL_SCHEME,
  SAPPHIRE_SCHEME,
  SLATE_SCHEME,
  TEAL_SCHEME,
]

let index = 0
export const getNextScheme = (): {
  light: ColorVariants
  dark: ColorVariants
} => {
  const scheme = SCHEMES[index]
  index = (index + 1) % SCHEMES.length
  return scheme
}
