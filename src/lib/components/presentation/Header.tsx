import {
  CloseOutlined,
  DarkMode,
  DarkModeOutlined,
  Info,
  InfoOutlined,
  LightMode,
  LightModeOutlined,
} from '@mui/icons-material'
import { DialogTitle, Icon, IconButton, Typography, useColorScheme, useMediaQuery, useTheme } from '@mui/material'
import { useCallback } from 'react'
import Logo from './Logo'

interface HeaderProps {
  headerTitle: string
  onClose: () => void
}

const Header = ({ headerTitle }: HeaderProps): React.ReactElement => {
  const { mode, setMode } = useColorScheme()
  const theme = useTheme()
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  console.log(prefersDarkMode)

  const onToggleMode = useCallback(() => {
    setMode(mode === 'system' ? (prefersDarkMode ? 'light' : 'dark') : mode === 'dark' ? 'light' : 'dark')
  }, [mode, setMode])

  return (
    <DialogTitle className="flex flex-row justify-between items-center">
      <div className="items-center flex flex-row gap-4">
        <Logo fill={theme.palette.primary.main} />
        <Typography color="primary" variant="h6">
          {headerTitle}
        </Typography>
      </div>
      <div className="flex flex-row gap-4">
        <IconButton onClick={onToggleMode}>
          {mode === 'system' ? (
            prefersDarkMode ? (
              <LightModeOutlined />
            ) : (
              <DarkModeOutlined />
            )
          ) : mode === 'dark' ? (
            <LightMode />
          ) : (
            <DarkMode />
          )}
        </IconButton>
        <IconButton>
          <InfoOutlined />
        </IconButton>
        <IconButton>
          <CloseOutlined />
        </IconButton>
      </div>
    </DialogTitle>
  )
}

export default Header
