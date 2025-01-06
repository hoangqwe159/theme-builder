import { Box, Typography } from '@mui/material'
import { ThemeBuilderProps } from '../pages'

interface ColorPanelProps {
  label: ThemeBuilderProps['label']
}

export default function ColorPanel({ label }: ColorPanelProps): React.ReactElement {
  return (
    <Box className="flex flex-col gap-2 w-full">
      <Typography variant="body1">{label.colorPanelDescription}</Typography>
      <div>
        <Typography variant="h6">{label.coreColors}</Typography>
        <Typography variant="body2" color="text.secondary">
          {label.coreColorsDescription}
        </Typography>
      </div>
      <div>
        <Typography variant="h6">{label.extendedColors}</Typography>
        <Typography variant="body2" color="text.secondary">
          {label.extendedColorsDescription}
        </Typography>
      </div>
      <div>
        <Typography variant="h6">{label.background}</Typography>
        <Typography variant="body2" color="text.secondary">
          {label.backgroundDescription}
        </Typography>
      </div>
      <div>
        <Typography variant="h6">{label.text}</Typography>
        <Typography variant="body2" color="text.secondary">
          {label.textDescription}
        </Typography>
      </div>
    </Box>
  )
}
