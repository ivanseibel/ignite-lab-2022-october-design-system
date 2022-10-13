import { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from "./Heading"

export default {
  title: "Components/Heading",
  component: Heading,
  args: {
    children: "Lorem ipsum.",
    size: "md",
  },
  argTypes: {
    size: {
      control: {
        type: "inline-radio",
        options: ["sm", "md", "lg"],
      },
    },
    asChild: {
      table: {
        disable: true,
      }
    }
  },
} as Meta<HeadingProps>


export const Small: StoryObj<HeadingProps> = {
  args: {
    size: "sm",
  },
}

export const Default: StoryObj<HeadingProps> = {}

export const Large: StoryObj<HeadingProps> = {
  args: {
    size: "lg",
  },
}

export const CustomComponent: StoryObj<HeadingProps> = {
  args: {
    asChild: true,
    children: (
      <h1>Heading with h1 tag.</h1>
    )
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      }
    },
    asChild: {
      table: {
        disable: true,
      }
    }
  }
}