import Box from '@mui/material/Box'
import DialogContent from '@mui/material/DialogContent'
import Paper from '@mui/material/Paper'
import Footer from '../presentation/Footer'
import Header from '../presentation/Header'
import ColorPanel from './ColorPanel'
import { ThemeStateSchema, type ThemeBuilderProps } from '../pages'
import PreviewPanel from './PreviewPanel'
import { useCallback } from 'react'
import { getNextScheme, useStore } from '../../context/theme'
import { DEFAULT_LOCALE } from '../../utils/locale'

const RootView = ({
  label = DEFAULT_LOCALE,
  onClose,
  onExport,
  renderPreview,
}: ThemeBuilderProps): React.ReactElement => {
  const { state, dispatch } = useStore()
  const handleExport = useCallback(() => {
    onExport?.(state)
  }, [state])

  const handleShuffle = useCallback(() => {
    const newState = getNextScheme()
    dispatch({ type: 'SET_COLOR_SCHEMES', colorSchemes: newState })
  }, [])

  const handleImport = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        try {
          const json = JSON.parse(e.target?.result as string)
          const themeState = ThemeStateSchema.parse(json) // Validate JSON using Zod

          dispatch({ type: 'SET_COLOR_SCHEMES', colorSchemes: themeState })
        } catch (err) {
          alert('Invalid theme file')
        }
      }
      reader.readAsText(file)
    }
  }, [])

  const handleDownload = useCallback(() => {
    const json = JSON.stringify(state, null, 2) // Pretty-print with space = 2
    const blob = new Blob([json], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'theme.json'
    a.click()
    URL.revokeObjectURL(url)
  }, [state])

  return (
    <Paper elevation={3} className="max-h-full flex flex-col">
      <Header headerTitle={label.title} onClose={onClose} onDownload={handleDownload} />
      <DialogContent className="flex flex-col gap-8 md:gap-4 md:flex-row overflow-auto" dividers>
        <Box className="md:overflow-auto md:flex-grow-1 md:flex-1">
          <ColorPanel label={label} />
        </Box>
        <Box className="md:overflow-auto md:flex-2">{renderPreview ? renderPreview() : <PreviewPanel />}</Box>
      </DialogContent>
      <Footer
        shuffleLabel={label.shuffle}
        exportLabel={label.export}
        importLabel={label.import}
        onExport={handleExport}
        onShuffle={handleShuffle}
        onImport={handleImport}
      />
    </Paper>
  )
}

export default RootView
