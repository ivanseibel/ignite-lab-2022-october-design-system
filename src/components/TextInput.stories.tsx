import { Meta, StoryObj } from '@storybook/react'
import { TextInput, TextInputRootProps } from "./TextInput"
import { Envelope } from 'phosphor-react'

export default {
  title: "Components/TextInput",
  component: TextInput.Root,
  args: {
    children: [
      <TextInput.Icon key='icon'>
        <Envelope width={24} height={24} />
      </TextInput.Icon>,
      <TextInput.Input key='input' placeholder='Type something...' />
    ]
    
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    }
  },
} as Meta<TextInputRootProps>


export const Default: StoryObj<TextInputRootProps> = {}

export const WithoutIcon: StoryObj<TextInputRootProps> = {
  args: {
    children: [
      <TextInput.Input key='input' placeholder='Type something...' />
    ]
  }
}