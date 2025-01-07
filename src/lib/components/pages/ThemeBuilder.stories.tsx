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
  onExport: (colorSchemes) => alert(JSON.stringify(colorSchemes)),
  label: {
    title: 'Helix Theme Builder',
    close: 'Close',
    export: 'Export theme',
    shuffle: 'Shuffle colors',
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
} satisfies ThemeBuilderProps
