import Button from '@mui/material/Button'
import DialogActions from '@mui/material/DialogActions'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { useMemo } from 'react'
import { Shuffle } from '@mui/icons-material'

interface FooterProps {
  onExport: () => void
  onShuffle: () => void
  exportLabel?: string
  shuffleLabel?: string
}

const Footer = ({ exportLabel, onExport, shuffleLabel, onShuffle }: FooterProps): React.ReactElement => {
  const EndIcon = useMemo(() => <ArrowForwardIcon />, [])
  const ShuffleIcon = useMemo(() => <Shuffle />, [])

  return (
    <DialogActions>
      <Button className="w-36" endIcon={ShuffleIcon} variant="outlined" color="secondary" onClick={onShuffle}>
        {shuffleLabel}
      </Button>
      <Button className="w-36" endIcon={EndIcon} variant="contained" color="primary" onClick={onExport}>
        {exportLabel}
      </Button>
    </DialogActions>
  )
}

export default Footer
