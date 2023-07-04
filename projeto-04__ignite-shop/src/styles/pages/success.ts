import { styled } from '..'

export const SuccessContainer = styled('main', {
  width: 'min(100%, 1180px)',
  margin: '5.5rem auto',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  h1: {
    fontSize: '$2xl',
    color: '$gray100',
  },

  p: {
    maxWidth: '60%',
    marginTop: '2rem',

    color: '$gray300',
    fontSize: '$xl',
    lineHeight: 1.4,
    textAlign: 'center',
  },

  a: {
    textDecoration: 'none',
    display: 'inline-block',
    marginTop: '5.5rem',

    color: '$green500',
    fontWeight: 700,
    fontSize: '$lg',

    '&:hover': {
      color: '$green300',
    },
  },
})

export const ImageContainer = styled('div', {
  width: '100%',
  maxWidth: 128,
  height: 145,
  marginTop: '4rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  padding: '1.25rem 0.5rem',
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,

  img: {
    objectFit: 'cover',
  },
})
