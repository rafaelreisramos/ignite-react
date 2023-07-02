import { styled } from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'
import * as RadioGroup from '@radix-ui/react-radio-group'

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
`

export const Content = styled(Dialog.Content)`
  position: fixed;
  top: 50%;
  left: 50%;
  translate: -50% -50%;

  min-width: 32rem;
  border-radius: 6px;
  background: ${(props) => props.theme['gray-800']};
  box-shadow: 0px 4px 32px 0px rgba(0, 0, 0, 0.8);
  padding: 3rem 2.5rem 2.5rem;

  form {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;

    input {
      border: 0;
      border-radius: 6px;
      background: ${(props) => props.theme['gray-900']};
      color: ${(props) => props.theme['gray-300']};
      padding: 1rem;

      &::placeholder {
        color: ${(props) => props.theme['gray-400']};
      }
    }

    input + input {
      margin-top: 1rem;
    }
  }

  button[type='submit'] {
    margin-top: 2.5rem;

    cursor: pointer;
    border: 0;
    border-radius: 6px;
    padding: 1rem 2rem;
    background: ${(props) => props.theme['green-500']};

    color: ${(props) => props.theme.white};
    font-weight: 700;

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      background: ${(props) => props.theme['green-700']};
      transition: background-color 0.2s;
    }
  }
`

export const Title = styled(Dialog.Title)`
  font-weight: 700;
  line-height: 1.4;
  font-size: 1.5rem;
  color: ${(props) => props.theme['gray-100']};
`

export const TransactionTypeButtonContainer = styled(RadioGroup.Root)`
  margin-top: 1.5rem;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`

interface TransactionTypeButtonProps {
  $variant: 'income' | 'outcome'
}

export const TransactionTypeButton = styled(
  RadioGroup.Item
)<TransactionTypeButtonProps>`
  border: 0;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  border-radius: 6px;
  padding: 1rem 1.5rem;
  background: ${(props) => props.theme['gray-700']};
  color: ${(props) => props.theme['gray-300']};

  svg {
    color: ${(props) =>
      props.$variant === 'income'
        ? props.theme['green-300']
        : props.theme['red-300']};
  }

  &[data-state='unchecked']:hover {
    transition: background-color 0.2s;
    background: ${(props) => props.theme['gray-600']};
  }

  &[data-state='checked'] {
    color: ${(props) => props.theme.white};
    background: ${(props) =>
      props.$variant === 'income'
        ? props.theme['green-500']
        : props.theme['red-500']};

    svg {
      color: ${(props) => props.theme.white};
    }
  }
`

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;

  border: 0;
  cursor: pointer;
  background: transparent;
  border-radius: 2px;
  color: ${(props) => props.theme['gray-400']};
  line-height: 0;
`
