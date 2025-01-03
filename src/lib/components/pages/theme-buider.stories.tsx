import React from 'react'
import { ThemeBuilder, ThemeBuilderProps } from '.'
import { Meta } from '@storybook/react'
import { StoryFn } from '@storybook/react'

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
    <div>
      <ThemeBuilder {...args} />
    </div>
  )
}

export const Default = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  onClose: () => alert('clicking close'),
  onExport: () => alert('clicking export'),
}
