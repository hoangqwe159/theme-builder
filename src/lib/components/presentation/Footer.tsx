import Button from '@mui/material/Button'
import DialogActions from '@mui/material/DialogActions'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import ShuffleIcon from '@mui/icons-material/Shuffle'
import { useMemo } from 'react'
import FileUploadIcon from '@mui/icons-material/FileUpload'
interface FooterProps {
  onExport: () => void
  onShuffle: () => void
  onImport: (event: React.ChangeEvent<HTMLInputElement>) => void
  exportLabel?: string
  shuffleLabel?: string
  importLabel?: string
}

const Footer = ({
  exportLabel,
  onExport,
  shuffleLabel,
  onShuffle,
  onImport,
  importLabel,
}: FooterProps): React.ReactElement => {
  const EndIcon = useMemo(() => <ArrowForwardIcon />, [])
  const Shuffle = useMemo(() => <ShuffleIcon />, [])
  const Import = useMemo(() => <FileUploadIcon />, [])

  return (
    <DialogActions>
      <Button variant="outlined" color="secondary" component="label" endIcon={Import}>
        {importLabel}
        <input type="file" accept="application/json" hidden onChange={onImport} />
      </Button>
      <Button className="w-36" endIcon={Shuffle} variant="contained" color="secondary" onClick={onShuffle}>
        {shuffleLabel}
      </Button>
      <Button className="w-36" endIcon={EndIcon} variant="contained" color="primary" onClick={onExport}>
        {exportLabel}
      </Button>
    </DialogActions>
  )
}

export default Footer
