import { useTheme } from '@mui/material'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import type { ThemeBuilderProps } from '../pages'
import ColorCard from '../presentation/ColorCard'
import { useMemo } from 'react'
import useColor from '../../hooks/useColor'

interface ColorPanelProps {
  label: ThemeBuilderProps['label']
}

export default function ColorPanel({ label }: ColorPanelProps): React.ReactElement {
  const theme = useTheme()
  const {
    primary,
    secondary,
    accent,
    gradient,
    backgroundDefault,
    backgroundPaper,
    textPrimary,
    textSecondary,
    textDisabled,
    info,
    success,
    warning,
    error,
    setPrimary,
    setSecondary,
    setAccent,
    setGradient,
    setBackgroundDefault,
    setBackgroundPaper,
    setTextPrimary,
    setTextSecondary,
    setTextDisabled,
    setInfo,
    setSuccess,
    setWarning,
    setError,
  } = useColor()

  const modeProps = useMemo(() => {
    return {
      disableDarkMode: theme.palette.mode !== 'dark',
      disableLightMode: theme.palette.mode === 'dark',
    }
  }, [theme.palette.mode])

  return (
    <Box className="flex flex-col gap-4 w-full">
      <Typography variant="body1">{label.colorPanelDescription}</Typography>
      <div>
        <Typography variant="h6">{label.coreColors}</Typography>
        <Typography variant="body2" color="text.secondary">
          {label.coreColorsDescription}
        </Typography>
      </div>

      <div className="flex flex-col gap-2">
        <ColorCard
          value={primary}
          onChange={setPrimary}
          hideColorTypeBtns
          title={label.primary}
          subtitle={label.primaryDescription}
          {...modeProps}
        />

        <ColorCard value={secondary} onChange={setSecondary} hideColorTypeBtns title={label.secondary} {...modeProps} />
        <ColorCard value={accent} onChange={setAccent} hideColorTypeBtns title={label.accent} {...modeProps} />
        <ColorCard value={gradient} onChange={setGradient} hideColorTypeBtns title={label.gradient} {...modeProps} />
      </div>

      <div>
        <Typography variant="h6">{label.extendedColors}</Typography>
        <Typography variant="body2" color="text.secondary">
          {label.extendedColorsDescription}
        </Typography>
      </div>

      <div className="flex flex-col gap-2">
        <ColorCard value={error} onChange={setError} hideColorTypeBtns title={label.error} {...modeProps} />
        <ColorCard value={success} onChange={setSuccess} hideColorTypeBtns title={label.success} {...modeProps} />
        <ColorCard value={warning} onChange={setWarning} hideColorTypeBtns title={label.warning} {...modeProps} />
        <ColorCard value={info} onChange={setInfo} hideColorTypeBtns title={label.info} {...modeProps} />
      </div>

      <div>
        <Typography variant="h6">{label.background}</Typography>
        <Typography variant="body2" color="text.secondary">
          {label.backgroundDescription}
        </Typography>
      </div>

      <div className="flex flex-col gap-2">
        <ColorCard
          value={backgroundDefault}
          onChange={setBackgroundDefault}
          hideColorTypeBtns
          title={label.default}
          {...modeProps}
        />
        <ColorCard
          value={backgroundPaper}
          onChange={setBackgroundPaper}
          hideColorTypeBtns
          title={label.paper}
          {...modeProps}
        />
      </div>

      <div>
        <Typography variant="h6">{label.text}</Typography>
        <Typography variant="body2" color="text.secondary">
          {label.textDescription}
        </Typography>
      </div>

      <div className="flex flex-col gap-2">
        <ColorCard
          value={textPrimary}
          onChange={setTextPrimary}
          hideColorTypeBtns
          title={label.primary}
          {...modeProps}
        />
        <ColorCard
          value={textSecondary}
          onChange={setTextSecondary}
          hideColorTypeBtns
          title={label.secondary}
          {...modeProps}
        />
        <ColorCard
          value={textDisabled}
          onChange={setTextDisabled}
          hideColorTypeBtns
          title={label.disabled}
          {...modeProps}
        />
      </div>
    </Box>
  )
}
