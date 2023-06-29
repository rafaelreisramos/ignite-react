import { styled } from 'styled-components'

export const HeaderContainer = styled.header`
  background-color: ${(props) => props.theme['gray-900']};
  padding: 2.5rem 0 7.5rem;
`

export const HeaderContent = styled.div`
  width: min(100%, 70rem);
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const NewTransactionButton = styled.button`
  border: 0;
  cursor: pointer;

  padding: 0.75rem 1.25rem;
  border-radius: 6px;
  background: ${(props) => props.theme['green-500']};

  color: ${(props) => props.theme['gray-100']};
  font-weight: 700;

  &:hover {
    background: ${(props) => props.theme['green-700']};
    transition: background-color 0.2s;
  }
`
