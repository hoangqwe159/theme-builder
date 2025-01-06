import { createContext, ReactNode, useContext, useReducer } from 'react'
import { ColorVariants, ThemeBuilderProps } from '../components'
import { SimplePaletteColorOptions } from '@mui/material'

export type ThemeState = ThemeBuilderProps['colorSchemes']

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
