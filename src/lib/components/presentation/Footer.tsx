import Button from '@mui/material/Button'
import DialogActions from '@mui/material/DialogActions'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import ShuffleIcon from '@mui/icons-material/Shuffle'
import { useMemo } from 'react'
interface FooterProps {
  onExport: () => void
  onShuffle: () => void
  exportLabel?: string
  shuffleLabel?: string
}

const Footer = ({ exportLabel, onExport, shuffleLabel, onShuffle }: FooterProps): React.ReactElement => {
  const EndIcon = useMemo(() => <ArrowForwardIcon />, [])
  const Shuffle = useMemo(() => <ShuffleIcon />, [])

  return (
    <DialogActions>
      <Button className="w-36" endIcon={Shuffle} variant="outlined" color="secondary" onClick={onShuffle}>
        {shuffleLabel}
      </Button>
      <Button className="w-36" endIcon={EndIcon} variant="contained" color="primary" onClick={onExport}>
        {exportLabel}
      </Button>
    </DialogActions>
  )
}

export default Footer
