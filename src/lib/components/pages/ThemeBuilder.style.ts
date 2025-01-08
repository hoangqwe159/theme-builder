import { z } from 'zod'

export interface ThemeBuilderProps {
  onClose?: () => void
  onExport?: (colorSchemes: { light: ColorVariants; dark: ColorVariants }) => void
  renderPreview?: () => React.ReactElement
  label?: ThemeBuilderLabel
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
  import: string
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

const ColorVariantsSchema = z.object({
  primary: z.string(),
  secondary: z.string(),
  accent: z.string(),
  gradient: z.string(),
  background: z.object({
    default: z.string(),
    paper: z.string(),
  }),
  text: z.object({
    primary: z.string(),
    secondary: z.string(),
    disabled: z.string(),
  }),
  palette: z.object({
    error: z.object({
      main: z.string(),
    }),
    warning: z.object({
      main: z.string(),
    }),
    info: z.object({
      main: z.string(),
    }),
    success: z.object({
      main: z.string(),
    }),
  }),
})

export const ThemeStateSchema = z.object({
  light: ColorVariantsSchema,
  dark: ColorVariantsSchema,
})

export type ColorVariants = z.infer<typeof ColorVariantsSchema>
export type ThemeState = z.infer<typeof ThemeStateSchema>
