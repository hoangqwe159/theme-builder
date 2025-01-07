import ButtonBase from '@mui/material/ButtonBase'
import Card from '@mui/material/Card'
import Dialog from '@mui/material/Dialog'
import Typography from '@mui/material/Typography'
import { grey } from '@mui/material/colors'
import { useCallback, useState } from 'react'
import ColorPicker, { type ColorPickerProps } from 'react-best-gradient-color-picker'

interface ColorCardProps {
  title: string
  subtitle?: string
}

const ColorCard = ({ title, subtitle, ...colorPickerProps }: ColorCardProps & ColorPickerProps): React.ReactElement => {
  const [open, setOpen] = useState(false)
  const onClose = useCallback(() => setOpen(false), [])
  const onOpen = useCallback(() => setOpen(true), [])

  return (
    <>
      <Card
        elevation={4}
        variant="outlined"
        sx={{ border: 0, borderRadius: '24px', backgroundColor: 'background.default' }}
        className="w-full p-1.5 flex items-center"
      >
        <ButtonBase
          className="w-[48px] h-[48px]"
          sx={{
            background: colorPickerProps.value,
            borderRadius: '50%',
            border: grey[300],
            borderWidth: 1,
            borderStyle: 'solid',
          }}
          onClick={onOpen}
        ></ButtonBase>
        <div className="ml-4">
          <Typography variant="body2">{title}</Typography>
          <Typography color="text.secondary" variant="caption">
            {subtitle}
          </Typography>
        </div>
      </Card>
      <Dialog open={open} onClose={onClose}>
        <div
          style={{ background: colorPickerProps.disableLightMode ? 'rgb(32,32,32)' : 'rgb(255,255,255)' }}
          className="p-2"
        >
          <ColorPicker {...colorPickerProps} />
        </div>
      </Dialog>
    </>
  )
}

export default ColorCard
