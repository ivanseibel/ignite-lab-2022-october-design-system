import { Meta, StoryObj } from '@storybook/react'
import { Checkbox, CheckboxProps } from "./Checkbox"
import { Text } from './Text'

export default {
  title: "Components/Checkbox",
  component: Checkbox,
  args: {
    label: 'Rememember me for 30 days',
  },
  argTypes: {},

} as Meta<CheckboxProps>

export const Default: StoryObj<CheckboxProps> = {}