import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import clsx from 'clsx'
import { Check } from 'phosphor-react'
import { Text } from './Text'

export interface CheckboxProps extends CheckboxPrimitive.CheckboxProps {
  label: string
  labelClassName?: string
  labelSize?: 'sm' | 'md' | 'lg'
}

export function Checkbox({ label, labelClassName, labelSize = 'sm', id }: CheckboxProps) {
  return (
    <div className="flex items-center gap-2">
      <CheckboxPrimitive.Root 
        className='w-6 h-6 p-[2px] bg-gray-800 rounded' 
        aria-label={label}
        id={id}
      >
        <CheckboxPrimitive.Indicator asChild>
          <Check className="h-5 w-5 text-cyan-500" weight='bold' />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
      
      <Text size='sm' className={clsx(labelClassName)}>
        {label}
      </Text>
    </div>
  )
}
