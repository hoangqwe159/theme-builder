import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActionArea from '@mui/material/CardActionArea'
import Typography from '@mui/material/Typography'

export interface ModuleCardProps {
  name: string
  renderIcon: React.ReactElement
  isFolder: boolean
}

const ModuleCard = ({ name, renderIcon, isFolder }: ModuleCardProps) => {
  return (
    <Card elevation={2} className="w-full h-[180px] relative">
      <CardActionArea sx={{ display: 'flex' }} className="w-full h-full flex flex-col justify-start gap-4">
        <Typography className="px-2 h-6" align="center">
          {name}
        </Typography>
        <Box sx={{ color: isFolder ? 'accent.main' : 'primary.main' }}>{renderIcon}</Box>
      </CardActionArea>
    </Card>
  )
}

export default ModuleCard
