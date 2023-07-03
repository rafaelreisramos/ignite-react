import { styled } from '..'

export const HomeContainer = styled('main', {
  display: 'flex',
  width: '100%',
  maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
  marginLeft: 'auto',
  minHeight: 656,
})

export const ProductCard = styled('a', {
  textDecoration: 'none',
  color: '$gray100',
  position: 'relative',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',

  borderRadius: 8,
  padding: '0.25rem',
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  boxShadow: '0px 0px 48px 0px rgba(0, 0, 0, 0.90)',

  img: {
    objectFit: 'cover',
  },

  footer: {
    position: 'absolute',
    bottom: '0.25rem',
    left: '0.25rem',
    right: '0.25rem',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    padding: '2rem',
    borderRadius: 6,
    background: 'rgba(32, 32, 36, 0.90)',

    translate: '0 110%',
    opacity: 0,
    transition: 'all 0.2s ease-in-out',

    strong: {
      fontSize: '$lg',
    },

    span: {
      fontSize: '$xl',
      fontWeight: 700,
      color: '$green300',
    },
  },

  '&:hover': {
    footer: {
      translate: '0 0%',
      opacity: 1,
    },
  },
})
