import { Meta, StoryObj } from '@storybook/react'
import { within, userEvent, waitFor } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import {rest} from 'msw'

import { SignIn } from "./SignIn"

export default {
  title: "Pages/Sign in",
  component: SignIn,
  args: {},
  argTypes: {},
  parameters: {
    msw: {
      handlers: [
        rest.post("/api/auth/signin", (req, res, ctx) => {
          return res(ctx.json({
            message: "You have signed in!"
          }))
        }),
      ]
    }
  },
} as Meta


export const Default: StoryObj = {
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement)
    userEvent.type(canvas.getByLabelText('Email'), 'johndoe@gmail.com')
    userEvent.type(canvas.getByLabelText('Password'), '123456')

    userEvent.click(canvas.getByRole('button', { name: 'Login to the platform' }))

    waitFor(() => {
      return expect(canvas.getByText('You have signed in!')).toBeInTheDocument()
    })
  }  
}