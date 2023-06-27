import styled from 'styled-components'

export const HomeContainer = styled.main`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }
`

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  color: ${(props) => props.theme['gray-100']};
  font-size: 1.125rem;
  font-weight: 700;
`

const BaseInput = styled.input`
  background: transparent;
  border: 0;
  height: 2.5rem;
  padding: 0 0.5rem;
  border-top: 2px solid transparent;
  border-bottom: 2px solid ${(props) => props.theme['gray-500']};

  color: ${(props) => props.theme['gray-100']};

  &::placeholder {
    color: ${(props) => props.theme['gray-500']};
  }

  &:focus {
    box-shadow: none;
    border-bottom: 2px solid ${(props) => props.theme['green-500']};
  }
`

export const TaskInput = styled(BaseInput)`
  flex: 1;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`

export const AmountInMinutesButton = styled(BaseInput)`
  width: 4rem;
`

export const CountdownContainer = styled.div`
  display: flex;
  gap: 1rem;

  font-family: 'Roboto Mono', monospace;
  font-size: 10rem;
  line-height: 8rem;
  color: ${(props) => props.theme['gray-100']};

  span {
    background: ${(props) => props.theme['gray-700']};

    border-radius: 8px;
    padding: 2.5rem 1rem;
  }
`

export const Separator = styled.div`
  display: flex;
  justify-content: center;

  width: 4rem;
  padding: 2rem 0;
  overflow: hidden;

  color: ${(props) => props.theme['green-500']};
`

const BaseCountdownButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  padding: 1rem 2.5rem;
  border: 0;
  border-radius: 8px;
  cursor: pointer;

  color: ${(props) => props.theme['gray-100']};
  font-weight: 700;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`

export const StartCountdownButton = styled(BaseCountdownButton)`
  background: ${(props) => props.theme['green-500']};

  &:not(:disabled):hover {
    background: ${(props) => props.theme['green-700']};
  }
`

export const StopCountdownButton = styled(BaseCountdownButton)`
  background: ${(props) => props.theme['red-500']};

  &:not(:disabled):hover {
    background: ${(props) => props.theme['red-700']};
  }
`
