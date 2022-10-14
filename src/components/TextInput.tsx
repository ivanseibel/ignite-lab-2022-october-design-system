// This component implements React composition pattern
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx'
import { ReactNode } from 'react'

export interface TextInputRootProps {
  children: ReactNode
}

function TextInputRoot(props: TextInputRootProps) {
  return (
    <div
      className={clsx(`
        flex items-center gap-3
        py-4 px-3 rounded bg-gray-800 w-full
        focus-within:ring-2 ring-cyan-300 
        h-12
      `)} 
    >
      {props.children}
    </div>
  )
}

TextInputRoot.displayName = 'TextInput.Root'

export interface TextInputIconProps {
  children: ReactNode
}

function TextInputIcon(props: TextInputIconProps) {
  return (
    <Slot className='w-6 h-6 text-gray-400'>
      {props.children}
    </Slot>
  );
}

TextInputIcon.displayName = 'TextInput.Icon'

export interface TextInputInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

function TextInputInput(props: TextInputInputProps) {
  return (
    <input {...props} className='bg-transparent flex-1 text-gray-100 placeholder:text-gray-400 text-xs outline-none' />
  )
}

TextInputInput.displayName = 'TextInput.Input'

export const TextInput = {
  Root: TextInputRoot,
  Icon: TextInputIcon,
  Input: TextInputInput,
}