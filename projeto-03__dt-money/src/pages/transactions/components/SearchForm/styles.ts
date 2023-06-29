import { styled } from 'styled-components'

export const SearchFormContainer = styled.form`
  display: flex;
  align-items: center;
  gap: 1rem;

  input {
    flex: 1;

    border: 0;
    border-radius: 6px;
    padding: 1rem;
    background: ${(props) => props.theme['gray-900']};
    color: ${(props) => props.theme['gray-100']};

    &::placeholder {
      color: ${(props) => props.theme['gray-400']};
    }
  }

  button {
    cursor: pointer;

    display: flex;
    align-items: center;
    gap: 0.75rem;

    padding: 0.875rem 2rem;
    background: transparent;
    border: 1px solid ${(props) => props.theme['green-300']};
    border-radius: 6px;

    font-weight: 700;
    color: ${(props) => props.theme['green-300']};

    &:hover {
      background: ${(props) => props.theme['green-500']};
      border-color: ${(props) => props.theme['green-500']};
      color: ${(props) => props.theme.white};
      transition: background-color 0.2s, color 0.2s, border-color 0.2s;
    }
  }
`
