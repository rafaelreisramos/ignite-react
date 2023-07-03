import { globalCss } from '.'

export const globalStyles = globalCss({
  '*, *::before, *::after': {
    boxSizing: 'border-box',
  },

  '*': {
    margin: 0,
    padding: 0,
  },

  body: {
    backgroundColor: '$gray900',
    color: '$gray100',
    '-webkit-font-smoothing': 'antialiased',
    fontFamily: 'Roboto, sans-serit',
    fontWeight: 400,
  },

  'button, textarea, input, select': {
    font: 'inherit',
  },
})
