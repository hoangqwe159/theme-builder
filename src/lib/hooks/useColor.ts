import { useTheme } from '@mui/material'
import {
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
  useSelector,
  useStore,
} from '../context/theme'
import { useCallback, useMemo } from 'react'

// const selectLightPrimary = (state: ThemeState) => state.light.primary
// const selectLightSecondary = (state: ThemeState) => state.light.secondary
// const selectLightAccent = (state: ThemeState) => state.light.accent
// const selectLightGradient = (state: ThemeState) => state.light.gradient
// const selectLightBackgroundDefault = (state: ThemeState) => state.light.background.default
// const selectLightBackgroundPaper = (state: ThemeState) => state.light.background.paper
// const selectLightTextPrimary = (state: ThemeState) => state.light.text.primary
// const selectLightTextSecondary = (state: ThemeState) => state.light.text.secondary
// const selectLightTextDisabled = (state: ThemeState) => state.light.text.disabled
// const selectLightInfo = (state: ThemeState) => (state.light.palette?.info as SimplePaletteColorOptions)?.main
// const selectLightSuccess = (state: ThemeState) => (state.light.palette?.success as SimplePaletteColorOptions)?.main
// const selectLightWarning = (state: ThemeState) => (state.light.palette?.warning as SimplePaletteColorOptions)?.main
// const selectLightError = (state: ThemeState) => (state.light.palette?.error as SimplePaletteColorOptions)?.main
// const selectDarkPrimary = (state: ThemeState) => state.dark.primary
// const selectDarkSecondary = (state: ThemeState) => state.dark.secondary
// const selectDarkAccent = (state: ThemeState) => state.dark.accent
// const selectDarkGradient = (state: ThemeState) => state.dark.gradient
// const selectDarkBackgroundDefault = (state: ThemeState) => state.dark.background.default
// const selectDarkBackgroundPaper = (state: ThemeState) => state.dark.background.paper
// const selectDarkTextPrimary = (state: ThemeState) => state.dark.text.primary
// const selectDarkTextSecondary = (state: ThemeState) => state.dark.text.secondary
// const selectDarkTextDisabled = (state: ThemeState) => state.dark.text.disabled
// const selectDarkInfo = (state: ThemeState) => (state.dark.palette?.info as SimplePaletteColorOptions)?.main
// const selectDarkSuccess = (state: ThemeState) => (state.dark.palette?.success as SimplePaletteColorOptions)?.main
// const selectDarkWarning = (state: ThemeState) => (state.dark.palette?.warning as SimplePaletteColorOptions)?.main
// const selectDarkError = (state: ThemeState) => (state.dark.palette?.error as SimplePaletteColorOptions)?.main

const useColor = () => {
  const theme = useTheme()
  const { dispatch } = useStore()

  const isDarkMode = theme.palette.mode === 'dark'

  const lightPrimary = useSelector(selectLightPrimary)
  const darkPrimary = useSelector(selectDarkPrimary)

  const lightSecondary = useSelector(selectLightSecondary)
  const darkSecondary = useSelector(selectDarkSecondary)

  const lightAccent = useSelector(selectLightAccent)
  const darkAccent = useSelector(selectDarkAccent)

  const lightGradient = useSelector(selectLightGradient)
  const darkGradient = useSelector(selectDarkGradient)

  const lightBackgroundDefault = useSelector(selectLightBackgroundDefault)
  const darkBackgroundDefault = useSelector(selectDarkBackgroundDefault)

  const lightBackgroundPaper = useSelector(selectLightBackgroundPaper)
  const darkBackgroundPaper = useSelector(selectDarkBackgroundPaper)

  const lightTextPrimary = useSelector(selectLightTextPrimary)
  const darkTextPrimary = useSelector(selectDarkTextPrimary)

  const lightTextSecondary = useSelector(selectLightTextSecondary)
  const darkTextSecondary = useSelector(selectDarkTextSecondary)

  const lightTextDisabled = useSelector(selectLightTextDisabled)
  const darkTextDisabled = useSelector(selectDarkTextDisabled)

  const lightInfo = useSelector(selectLightInfo)
  const darkInfo = useSelector(selectDarkInfo)

  const lightSuccess = useSelector(selectLightSuccess)
  const darkSuccess = useSelector(selectDarkSuccess)

  const lightWarning = useSelector(selectLightWarning)
  const darkWarning = useSelector(selectDarkWarning)

  const lightError = useSelector(selectLightError)
  const darkError = useSelector(selectDarkError)

  const setPrimary = useCallback(
    (color: string) => {
      dispatch({ type: isDarkMode ? 'SET_DARK_PRIMARY' : 'SET_LIGHT_PRIMARY', color })
    },
    [isDarkMode, dispatch],
  )

  const setSecondary = useCallback(
    (color: string) => {
      dispatch({ type: isDarkMode ? 'SET_DARK_SECONDARY' : 'SET_LIGHT_SECONDARY', color })
    },
    [isDarkMode, dispatch],
  )

  const setAccent = useCallback(
    (color: string) => {
      dispatch({ type: isDarkMode ? 'SET_DARK_ACCENT' : 'SET_LIGHT_ACCENT', color })
    },
    [isDarkMode, dispatch],
  )

  const setGradient = useCallback(
    (gradient: string) => {
      dispatch({ type: isDarkMode ? 'SET_DARK_GRADIENT' : 'SET_LIGHT_GRADIENT', gradient })
    },
    [isDarkMode, dispatch],
  )

  const setBackgroundDefault = useCallback(
    (color: string) => {
      dispatch({ type: isDarkMode ? 'SET_DARK_BACKGROUND_DEFAULT' : 'SET_LIGHT_BACKGROUND_DEFAULT', color })
    },
    [isDarkMode, dispatch],
  )

  const setBackgroundPaper = useCallback(
    (color: string) => {
      dispatch({ type: isDarkMode ? 'SET_DARK_BACKGROUND_PAPER' : 'SET_LIGHT_BACKGROUND_PAPER', color })
    },
    [isDarkMode, dispatch],
  )

  const setTextPrimary = useCallback(
    (color: string) => {
      dispatch({ type: isDarkMode ? 'SET_DARK_TEXT_PRIMARY' : 'SET_LIGHT_TEXT_PRIMARY', color })
    },
    [isDarkMode, dispatch],
  )

  const setTextSecondary = useCallback(
    (color: string) => {
      dispatch({ type: isDarkMode ? 'SET_DARK_TEXT_SECONDARY' : 'SET_LIGHT_TEXT_SECONDARY', color })
    },
    [isDarkMode, dispatch],
  )

  const setTextDisabled = useCallback(
    (color: string) => {
      dispatch({ type: isDarkMode ? 'SET_DARK_TEXT_DISABLED' : 'SET_LIGHT_TEXT_DISABLED', color })
    },
    [isDarkMode, dispatch],
  )

  const setInfo = useCallback(
    (color: string) => {
      dispatch({ type: isDarkMode ? 'SET_DARK_INFO' : 'SET_LIGHT_INFO', color })
    },
    [isDarkMode, dispatch],
  )

  const setSuccess = useCallback(
    (color: string) => {
      dispatch({ type: isDarkMode ? 'SET_DARK_SUCCESS' : 'SET_LIGHT_SUCCESS', color })
    },
    [isDarkMode, dispatch],
  )

  const setWarning = useCallback(
    (color: string) => {
      dispatch({ type: isDarkMode ? 'SET_DARK_WARNING' : 'SET_LIGHT_WARNING', color })
    },
    [isDarkMode, dispatch],
  )

  const setError = useCallback(
    (color: string) => {
      dispatch({ type: isDarkMode ? 'SET_DARK_ERROR' : 'SET_LIGHT_ERROR', color })
    },
    [isDarkMode, dispatch],
  )

  return useMemo(
    () => ({
      primary: isDarkMode ? darkPrimary : lightPrimary,
      secondary: isDarkMode ? darkSecondary : lightSecondary,
      accent: isDarkMode ? darkAccent : lightAccent,
      gradient: isDarkMode ? darkGradient : lightGradient,
      backgroundDefault: isDarkMode ? darkBackgroundDefault : lightBackgroundDefault,
      backgroundPaper: isDarkMode ? darkBackgroundPaper : lightBackgroundPaper,
      textPrimary: isDarkMode ? darkTextPrimary : lightTextPrimary,
      textSecondary: isDarkMode ? darkTextSecondary : lightTextSecondary,
      textDisabled: isDarkMode ? darkTextDisabled : lightTextDisabled,
      info: isDarkMode ? darkInfo : lightInfo,
      success: isDarkMode ? darkSuccess : lightSuccess,
      warning: isDarkMode ? darkWarning : lightWarning,
      error: isDarkMode ? darkError : lightError,
      setPrimary,
      setSecondary,
      setAccent,
      setGradient,
      setBackgroundDefault,
      setBackgroundPaper,
      setTextPrimary,
      setTextSecondary,
      setTextDisabled,
      setInfo,
      setSuccess,
      setWarning,
      setError,
    }),
    [
      isDarkMode,
      lightPrimary,
      darkPrimary,
      lightSecondary,
      darkSecondary,
      lightAccent,
      darkAccent,
      lightGradient,
      darkGradient,
      lightBackgroundDefault,
      darkBackgroundDefault,
      lightBackgroundPaper,
      darkBackgroundPaper,
      lightTextPrimary,
      darkTextPrimary,
      lightTextSecondary,
      darkTextSecondary,
      lightTextDisabled,
      darkTextDisabled,
      lightInfo,
      darkInfo,
      lightSuccess,
      darkSuccess,
      lightWarning,
      darkWarning,
      lightError,
      darkError,
      setPrimary,
      setSecondary,
      setAccent,
      setGradient,
      setBackgroundDefault,
      setBackgroundPaper,
      setTextPrimary,
      setTextSecondary,
      setTextDisabled,
      setInfo,
      setSuccess,
      setWarning,
      setError,
    ],
  )
}

export default useColor
