import {
  Box,
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Paper,
  Typography,
  useColorScheme,
} from '@mui/material'
import { ThemeBuilderProps } from '../pages'
import Footer from '../presentation/Footer'
import Header from '../presentation/Header'
import ColorPanel from './ColorPanel'
const RootView = ({ label }: ThemeBuilderProps): React.ReactElement => {
  const { mode, setMode } = useColorScheme()
  return (
    <Paper elevation={3} className="max-h-full flex flex-col">
      <Header headerTitle={label.title} onClose={() => console.log('Closing')} />
      <DialogContent className="flex flex-col gap-2 md:flex-row overflow-auto" dividers>
        <Box flex={1} className="md:overflow-auto">
          <ColorPanel label={label} />
        </Box>
        <Box flex={2} className="md:overflow-auto">
          {'222 222'.repeat(1000)}
        </Box>
      </DialogContent>
      <Footer buttonLabel={label.export} onExport={() => console.log('Exporting')} />
    </Paper>
  )
}

export default RootView
