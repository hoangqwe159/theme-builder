import { Button, DialogActions } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { useMemo } from 'react'

interface FooterProps {
  buttonLabel: string
  onExport: () => void
}

const Footer = ({ buttonLabel, onExport }: FooterProps): React.ReactElement => {
  const EndIcon = useMemo(() => <ArrowForwardIcon />, [])

  return (
    <DialogActions>
      <Button endIcon={EndIcon} variant="contained" onClick={onExport}>
        {buttonLabel}
      </Button>
    </DialogActions>
  )
}

export default Footer
