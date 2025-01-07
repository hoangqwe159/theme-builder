import type { PaletteOptions } from '@mui/material'

export interface ThemeBuilderProps {
  onClose: () => void
  onExport: (colorSchemes: { light: ColorVariants; dark: ColorVariants }) => void
  renderPreview?: () => React.ReactElement
  label: ThemeBuilderLabel
  colorSchemes?: {
    light: ColorVariants
    dark: ColorVariants
  }
}

export interface ThemeBuilderLabel {
  title: string
  close: string
  export: string
  shuffle: string
  colorPanelDescription: string
  coreColors: string
  coreColorsDescription: string
  primary: string
  primaryDescription: string
  secondary: string
  accent: string
  gradient: string
  extendedColors: string
  extendedColorsDescription: string
  error: string
  warning: string
  info: string
  success: string
  background: string
  backgroundDescription: string
  default: string
  paper: string
  text: string
  textDescription: string
  disabled: string
}

export interface ColorVariants {
  primary: string
  secondary: string
  accent: string
  gradient: string
  background: {
    default: string
    paper: string
  }
  text: {
    primary: string
    secondary: string
    disabled: string
  }
  palette: PaletteOptions
}
