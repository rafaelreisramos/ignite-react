import { ComponentProps } from 'react'

import { styled } from './styles'

export const Button = styled('button', {
  border: 0,

  backgroundColor: '$ignite500',
  borderRadius: '$md',

  fontFamily: '$default',
  fontWeight: '$bold',
  color: '$white',

  variants: {
    size: {
      small: {
        fontSize: '$sm',
        padding: '$2 $4',
      },
      big: {
        fontSize: '$md',
        padding: '$3 $6',
      },
    },
  },
  defaultVariants: {
    size: 'small',
  },
})

export interface ButtonProps extends ComponentProps<typeof Button> {}
