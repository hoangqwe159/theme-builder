import { getLuminance, lighten, darken } from '@mui/material'

// Function to convert a color from Light Mode to Dark Mode
export function convertColorToDarkMode(color: string, coefficient = 0.3): string {
  const luminance = getLuminance(color)

  // If the color is dark in Light Mode, lighten it for Dark Mode
  if (luminance < 0.5) {
    return lighten(color, coefficient)
  }
  // hslToRgb;
  // If the color is light in Light Mode, darken it for Dark Mode
  return darken(color, coefficient)
}
