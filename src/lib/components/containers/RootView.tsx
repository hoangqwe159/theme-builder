import Box from '@mui/material/Box'
import DialogContent from '@mui/material/DialogContent'
import Paper from '@mui/material/Paper'
import Footer from '../presentation/Footer'
import Header from '../presentation/Header'
import ColorPanel from './ColorPanel'
import type { ThemeBuilderProps } from '../pages'

const RootView = ({ label, onClose, onExport }: ThemeBuilderProps): React.ReactElement => {
  return (
    <Paper elevation={3} className="max-h-full flex flex-col">
      <Header headerTitle={label.title} onClose={onClose} />
      <DialogContent className="flex flex-col gap-2 md:flex-row overflow-auto" dividers>
        <Box flex={1} className="md:overflow-auto">
          <ColorPanel label={label} />
        </Box>
        <Box flex={2} className="md:overflow-auto">
          {'222 222'.repeat(1000)}
        </Box>
      </DialogContent>
      <Footer buttonLabel={label.export} onExport={onExport} />
    </Paper>
  )
}

export default RootView
