import { Logo } from './Logo'
import { Heading } from './components/Heading'
import { Text } from './components/Text'

import './styles/global.css'
import { TextInput } from './components/TextInput'
import { Envelope, Lock } from 'phosphor-react';
import { Checkbox } from './components/Checkbox'
import { Button } from './components/Button'

export function App() {

  return (
    <div className="w-screen h-screen bg-gray-900 flex items-center justify-center text-gray-100 flex-col">
      <header className='flex flex-col items-center'>
        <Logo />
        <Heading size="lg" className='mt-4'>Ignite Lab</Heading>
        <Text size='lg' className='text-gray-400 mt-1'>Sign in and start using!</Text>
      </header>

      <form className='flex flex-col items-stretch mt-10 w-full max-w-sm gap-4'>
        <label htmlFor="email" className='flex flex-col gap-3'>
          <Text size='sm' className='font-semibold'>Email</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope
                height={24}
                width={24}
              />
            </TextInput.Icon>
            <TextInput.Input placeholder="Type your email" id="email" />
          </TextInput.Root>
        </label>

        <label htmlFor="password" className='flex flex-col gap-3'>
          <Text size='sm' className='font-semibold'>Password</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock
                height={24}
                width={24}
              />
            </TextInput.Icon>
            <TextInput.Input placeholder="******" id="password" type={'password'} />
          </TextInput.Root>
        </label>

        {/* Checkbox */}
        <label htmlFor="remember" className='flex items-center gap-2 hover:cursor-pointer'>
          <Checkbox label='Remember me for 30 days' labelClassName='text-gray-200' id="remember"></Checkbox> 
        </label>

        <Button type='submit' className='mt-4'>
          Login to the platform
        </Button>
      </form>

      <footer className='mt-8 flex flex-col gap-4 items-center'>
        <Text asChild className="text-gray-400 underline hover:text-gray-200" size='sm'>
          <a href="#">Forgot your password?</a>
        </Text>
        <Text asChild className="text-gray-400 underline hover:text-gray-200" size="sm">
          <a href="#">Don't have an account? Sign up</a>
        </Text>
      </footer>
    </div>
  )
}
