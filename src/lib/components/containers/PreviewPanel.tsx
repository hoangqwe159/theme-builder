import { darken, useTheme } from '@mui/material'
import Box from '@mui/material/Box'
import ButtonBase from '@mui/material/ButtonBase'
import Card from '@mui/material/Card'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import Paper from '@mui/material/Paper'
import Alert from '@mui/material/Alert'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { ThemeBuilderProps } from '../pages'
import { grey } from '@mui/material/colors'
import AppsIcon from '@mui/icons-material/Apps'
import BookmarkIcon from '@mui/icons-material/Bookmark'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import FolderSharedIcon from '@mui/icons-material/FolderShared'
import HomeIcon from '@mui/icons-material/Home'
import MenuIcon from '@mui/icons-material/Menu'
import NotificationsIcon from '@mui/icons-material/Notifications'
import OpenInFullIcon from '@mui/icons-material/OpenInFull'
import RepeatIcon from '@mui/icons-material/Repeat'
import SearchIcon from '@mui/icons-material/Search'
import TextSnippetIcon from '@mui/icons-material/TextSnippet'
import Logo from '../presentation/Logo'
import { useMemo } from 'react'
import ModuleCard, { ModuleCardProps } from '../presentation/ModuleCard'

interface PreviewPanelProps {
  renderPreview?: ThemeBuilderProps['renderPreview']
}

const PreviewPanel = (): React.ReactElement => {
  const theme = useTheme()

  const modules: ModuleCardProps[] = useMemo(() => {
    return [
      {
        name: 'Tests',
        renderIcon: <TextSnippetIcon color="inherit" sx={{ fontSize: 70 }} />,
        isFolder: true,
      },
      {
        name: 'Home',
        renderIcon: <HomeIcon color="inherit" sx={{ fontSize: 70 }} />,
        isFolder: false,
      },
      {
        name: 'Settings',
        renderIcon: <AppsIcon color="inherit" sx={{ fontSize: 70 }} />,
        isFolder: true,
      },
      {
        name: 'Bookmarks',
        renderIcon: <BookmarkIcon color="inherit" sx={{ fontSize: 70 }} />,
        isFolder: false,
      },
      {
        name: 'Notifications',
        renderIcon: <NotificationsIcon color="inherit" sx={{ fontSize: 70 }} />,
        isFolder: true,
      },
      {
        name: 'Repeat',
        renderIcon: <RepeatIcon color="inherit" sx={{ fontSize: 70 }} />,
        isFolder: false,
      },
      {
        name: 'Folder shared',
        renderIcon: <FolderSharedIcon color="inherit" sx={{ fontSize: 70 }} />,
        isFolder: true,
      },
      {
        name: 'Settings',
        renderIcon: <AppsIcon color="inherit" sx={{ fontSize: 70 }} />,
        isFolder: true,
      },
      {
        name: 'Bookmarks',
        renderIcon: <BookmarkIcon color="inherit" sx={{ fontSize: 70 }} />,
        isFolder: false,
      },
      {
        name: 'Notifications',
        renderIcon: <NotificationsIcon color="inherit" sx={{ fontSize: 70 }} />,
        isFolder: true,
      },
      {
        name: 'Repeat',
        renderIcon: <RepeatIcon color="inherit" sx={{ fontSize: 70 }} />,
        isFolder: false,
      },
      {
        name: 'Folder shared',
        renderIcon: <FolderSharedIcon color="inherit" sx={{ fontSize: 70 }} />,
        isFolder: true,
      },
      {
        name: 'Tests',
        renderIcon: <TextSnippetIcon color="inherit" sx={{ fontSize: 70 }} />,
        isFolder: true,
      },
      {
        name: 'Home',
        renderIcon: <HomeIcon color="inherit" sx={{ fontSize: 70 }} />,
        isFolder: false,
      },
      {
        name: 'Settings',
        renderIcon: <AppsIcon color="inherit" sx={{ fontSize: 70 }} />,
        isFolder: true,
      },
      {
        name: 'Bookmarks',
        renderIcon: <BookmarkIcon color="inherit" sx={{ fontSize: 70 }} />,
        isFolder: false,
      },
    ]
  }, [])

  return (
    <Card
      elevation={4}
      variant="outlined"
      sx={{ backgroundColor: grey[theme.palette.mode === 'dark' ? 900 : 100], borderRadius: 4, borderWidth: 0 }}
      className="h-full w-full min-h-[420px] p-2 relative"
    >
      <div className="absolute bottom-0 right-0 p-2 z-50">
        <div className="flex flex-col gap-2 my-2 mx-4">
          <Alert severity="error" variant="filled">
            This is an error alert! Please do not ignore
          </Alert>
          <Alert severity="success" variant="filled">
            This is a success alert!
          </Alert>
          <Alert severity="warning" variant="filled">
            This is a warning alert!
          </Alert>
          <Alert severity="info" variant="filled">
            This is an info alert!
          </Alert>
        </div>
      </div>
      <Card
        elevation={0}
        variant="outlined"
        sx={{ backgroundColor: 'background.paper', borderRadius: 2, borderWidth: 0 }}
        className="w-full h-full flex flex-row"
      >
        <Box sx={(sx) => ({ background: sx.palette.gradient })} className="sidebar h-full w-18 hidden lg:flex">
          <div className="h-full flex flex-col items-center w-20">
            <div className="p-2">
              <Logo fill="white" />
            </div>
            <Divider variant="middle" flexItem={true} sx={{ background: theme.palette.primary.light }} />
            <ButtonBase
              color="paper"
              className="w-full flex flex-col items-center gap-2"
              sx={{
                padding: 2,
              }}
            >
              <OpenInFullIcon color="paper" />
              <Typography variant="caption" color="paper">
                {'Expand'}
              </Typography>
            </ButtonBase>
            <ButtonBase
              className="w-full flex flex-col items-center gap-2"
              sx={(theme) => ({
                backgroundColor: darken(theme.palette.primary.dark, theme.palette.action.activatedOpacity),
                padding: 2,
              })}
            >
              <AppsIcon color="paper" />
              <Typography variant="caption" color="white">
                {'Apps'}
              </Typography>
            </ButtonBase>

            <ButtonBase
              className="w-full flex flex-col items-center gap-2"
              sx={{
                padding: 2,
              }}
            >
              <RepeatIcon color="paper" />
              <Typography variant="caption" color="white">
                {'Offline'}
              </Typography>
            </ButtonBase>

            <ButtonBase
              className="w-full flex flex-col items-center gap-2"
              sx={{
                padding: 2,
              }}
            >
              <NotificationsIcon color="paper" />
              <Typography variant="caption" color="white">
                {'Notifications'}
              </Typography>
            </ButtonBase>

            <ButtonBase
              className="w-full flex flex-col items-center gap-2"
              sx={{
                padding: 2,
              }}
            >
              <FolderSharedIcon color="paper" />
              <Typography variant="caption" color="white">
                {'Workspaces'}
              </Typography>
            </ButtonBase>
          </div>
        </Box>
        <Box className="h-full flex-1 flex flex-col">
          <Card elevation={2} sx={{ borderRadius: 0 }} className="h-16">
            <Toolbar variant="regular" className="flex flex-row justify-between relative">
              <div className="toolbar-left flex flex-grow items-center">
                <div className={`flex-grow flex-row p-2 flex`}>
                  <Typography
                    className="hidden lg:block"
                    variant="subtitle1"
                    color="text.secondary"
                    noWrap
                    textOverflow="ellipsis"
                  >
                    {'Centaurus v2.4'}
                  </Typography>

                  <Typography className="block lg:hidden" variant="subtitle1" color="text.secondary">
                    {'v2.4'}
                  </Typography>
                </div>
              </div>

              <div className="toolbar-middle max-w-[40vw] absolute inset-0 m-auto flex items-center justify-center">
                <Typography variant="h5" noWrap textOverflow="ellipsis" color="text.primary">
                  {'Modules'}
                </Typography>
              </div>

              <div className="toolbar-right flex flex-grow basis-0 items-center">
                <div className="flex-grow flex flex-row-reverse gap-1">
                  <IconButton color="default" className="flex items-center">
                    <MenuIcon />
                  </IconButton>
                  <Typography
                    variant="body1"
                    color="primary"
                    className="hidden items-center xl:flex mx-2"
                    align="center"
                    noWrap
                  >
                    {'AITEST'}
                  </Typography>
                  <div className="hidden xl:flex">
                    <IconButton color="default" className="items-center">
                      <BookmarkBorderIcon />
                    </IconButton>
                  </div>
                  <IconButton color="default" className="flex items-center">
                    <SearchIcon />
                  </IconButton>
                </div>
              </div>
            </Toolbar>
          </Card>
          <Paper className="flex-1 overflow-auto p-2" sx={{ backgroundColor: 'background.default', borderRadius: 0 }}>
            <div className="p-4 grid grid-cols-[repeat(auto-fill,minmax(10rem,1fr))] grid-rows-auto gap-4 justify-stretch">
              {modules.map((module, index) => (
                <ModuleCard key={index} {...module} />
              ))}
            </div>
          </Paper>
        </Box>
      </Card>
    </Card>
  )
}

export default PreviewPanel
