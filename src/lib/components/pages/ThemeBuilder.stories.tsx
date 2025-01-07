import React from 'react'
import { ThemeBuilder, ThemeBuilderProps } from '.'
import { Meta } from '@storybook/react'
import { StoryFn } from '@storybook/react'
import { Dialog } from '@mui/material'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof ThemeBuilder> = {
  title: 'Pages/ThemeBuilder',
  component: ThemeBuilder,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    onClose: { action: 'clicked' },
    onExport: { action: 'clicked' },
  },
}
export default meta

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof ThemeBuilder> = (args: ThemeBuilderProps) => {
  return (
    <div className="w-[80vw] h-[80vh]">
      <ThemeBuilder {...args} />
    </div>
  )
}

export const Default = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  onClose: () => alert('clicking close'),
  onExport: () => alert('clicking export'),
  label: {
    title: 'Helix Theme Builder',
    close: 'Close',
    export: 'Export theme',
    colorPanelDescription:
      'Build a Material color scheme to map dynamic color, use as fallback colors, or implement a branded theme.',
    coreColors: 'Core colors',
    coreColorsDescription: 'Override or set key colors that will be used to generate tonal palettes and schemes.',
    primary: 'Primary',
    primaryDescription: 'Acts as custom source color',
    secondary: 'Secondary',
    accent: 'Accent',
    gradient: 'Gradient',
    extendedColors: 'Extended colors',
    extendedColorsDescription:
      'Input a custom color that automatically gets assigned a set of complementary tones. Edit the source custom color to rename or delete.',
    error: 'Error',
    warning: 'Warning',
    info: 'Info',
    success: 'Success',
    background: 'Background colors',
    backgroundDescription: 'Set the default and paper background colors for your theme.',
    default: 'Default',
    paper: 'Paper',
    text: 'Text colors',
    textDescription: 'Set the primary, secondary, and disabled text colors for your theme.',
    disabled: 'Disabled',
  },
  colorSchemes: {
    light: {
      primary: '#2962FF',
      secondary: '#245A9E',
      accent: '#48B6FF',
      gradient:
        'linear-gradient(180deg, #0d2ffc 0%, #1749fd 20%, #2162fd 40%, #2a79fe 60%, #348ffe 80%, #3ea3ff 90%, #48b6ff 100%)',
      background: {
        default: '#f4f7ff',
        paper: '#FFFFFF',
      },
      text: {
        primary: '#374253',
        secondary: 'rgba(0, 0, 0, 0.6)',
        disabled: '#999FAC',
      },
      palette: {
        error: {
          main: '#E51D0D',
        },
        warning: {
          main: '#F49604',
        },
        info: {
          main: '#4B9EFF',
        },
        success: {
          main: '#A2E262',
        },
      },
    },
    dark: {
      primary: '#5C87FF',
      secondary: '#3584E6',
      accent: '#48B6FF',
      gradient:
        'linear-gradient(180deg, #0d2ffc 0%, #1749fd 20%, #2162fd 40%, #2a79fe 60%, #348ffe 80%, #3ea3ff 90%, #48b6ff 100%)',
      background: {
        default: '#05070D',
        paper: '#05070D',
      },
      text: {
        primary: '#ffffff',
        secondary: 'rgba(255, 255, 255, 0.7)',
        disabled: 'rgba(255, 255, 255, 0.5)',
      },
      palette: {
        error: {
          main: '#F9958D',
        },
        warning: {
          main: '#fdd08b',
        },
        info: {
          main: '#aed3ff',
        },
        success: {
          main: '#d5f2b8',
        },
      },
    },
  },
} satisfies ThemeBuilderProps
