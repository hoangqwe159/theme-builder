import Box from '@mui/material/Box'
import DialogContent from '@mui/material/DialogContent'
import Paper from '@mui/material/Paper'
import Footer from '../presentation/Footer'
import Header from '../presentation/Header'
import ColorPanel from './ColorPanel'
import type { ThemeBuilderProps } from '../pages'
import PreviewPanel from './PreviewPanel'
import { useCallback } from 'react'
import { getNextScheme, useStore } from '../../context/theme'

const RootView = ({ label, onClose, onExport, renderPreview }: ThemeBuilderProps): React.ReactElement => {
  const { state, dispatch } = useStore()
  const handleExport = useCallback(() => {
    onExport(state)
  }, [state])

  const handleShuffle = useCallback(() => {
    const newState = getNextScheme()
    dispatch({ type: 'SET_COLOR_SCHEMES', colorSchemes: newState })
  }, [])

  return (
    <Paper elevation={3} className="max-h-full flex flex-col">
      <Header headerTitle={label.title} onClose={onClose} />
      <DialogContent className="flex flex-col gap-8 md:gap-4 md:flex-row overflow-auto" dividers>
        <Box className="md:overflow-auto md:flex-grow-1 md:flex-1">
          <ColorPanel label={label} />
        </Box>
        <Box className="md:overflow-auto md:flex-2">{renderPreview ? renderPreview() : <PreviewPanel />}</Box>
      </DialogContent>
      <Footer
        shuffleLabel={label.shuffle}
        exportLabel={label.export}
        onExport={handleExport}
        onShuffle={handleShuffle}
      />
    </Paper>
  )
}

export default RootView
