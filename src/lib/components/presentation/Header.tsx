import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import LightModeIcon from '@mui/icons-material/LightMode'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'
import { useColorScheme, useTheme } from '@mui/material'
import DialogTitle from '@mui/material/DialogTitle'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useCallback } from 'react'
import Logo from './Logo'

interface HeaderProps {
  headerTitle: string
  onClose?: () => void
}

const Header = ({ headerTitle, onClose }: HeaderProps): React.ReactElement => {
  const { mode, setMode } = useColorScheme()
  const theme = useTheme()
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  const onToggleMode = useCallback(() => {
    setMode(mode === 'system' ? (prefersDarkMode ? 'light' : 'dark') : mode === 'dark' ? 'light' : 'dark')
  }, [mode, setMode])

  return (
    <DialogTitle className="flex flex-row justify-between items-center">
      <div className="items-center flex flex-row gap-4">
        <Logo fill={theme.palette.secondary.main} />
        <Typography color="secondary" variant="h6">
          {headerTitle}
        </Typography>
      </div>
      <div className="flex flex-row gap-4">
        <IconButton onClick={onToggleMode}>
          {mode === 'system' ? (
            prefersDarkMode ? (
              <LightModeOutlinedIcon />
            ) : (
              <DarkModeOutlinedIcon />
            )
          ) : mode === 'dark' ? (
            <LightModeIcon />
          ) : (
            <DarkModeIcon />
          )}
        </IconButton>
        <IconButton>
          <InfoOutlinedIcon />
        </IconButton>
        <IconButton onClick={onClose}>
          <CloseOutlinedIcon />
        </IconButton>
      </div>
    </DialogTitle>
  )
}

export default Header
