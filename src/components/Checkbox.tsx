import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { Check } from 'phosphor-react'
import { Text } from './Text'

export interface CheckboxProps extends React.ForwardRefExoticComponent<CheckboxPrimitive.CheckboxProps & React.RefAttributes<HTMLButtonElement>>{
  label: string
}

export function Checkbox({ label }: CheckboxProps) {
  return (
    <div className="flex items-center gap-2">
      <CheckboxPrimitive.Root 
        className='w-6 h-6 p-[2px] bg-gray-800 rounded' 
        aria-label={label}
      >
        <CheckboxPrimitive.Indicator asChild>
          <Check className="h-5 w-5 text-cyan-500" weight='bold' />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
      
      <Text size='sm'>
        {label}
      </Text>
    </div>
  )
}
