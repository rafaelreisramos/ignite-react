import { styled } from '..'

export const ProductContainer = styled('main', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '4.5rem',
  alignItems: 'stretch',

  width: 'min(100%, 1180px)',
  margin: '0 auto',
})

export const ImageContainer = styled('div', {
  borderRadius: 8,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  padding: '5.5rem 1.75rem',
  maxWidth: 'max(576, 100%)',
  height: 656,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
  },
})

export const ProductDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  h1: {
    color: '$gray300',
    fontWeight: 700,
    fontSize: '$2xl',
  },

  span: {
    display: 'inline-block',
    color: '$green300',
    fontSize: '$2xl',
    marginTop: '1rem',
  },

  p: {
    color: '$gray300',
    fontSize: '$md',
    lineHeight: 1.6,
    marginTop: '2.5rem',
  },

  button: {
    border: 0,
    cursor: 'pointer',
    marginTop: 'auto',

    padding: '1.25rem 2rem',
    background: '$green500',
    borderRadius: 8,

    fontWeight: 700,
    fontSize: '$md',
    color: '$white',

    '&:disabled': {
      opacity: 0.6,
      cursor: 'not-allowed',
    },

    '&:not(:disabled):hover': {
      background: '$green300',
    },
  },
})
