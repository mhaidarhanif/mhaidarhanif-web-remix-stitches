import { styled } from '~/stitches'

export const P = styled('p', {
  my: '$3',
  fontSize: '$0',
  lineHeight: '$7',
  '@tablet': { my: '$4', fontSize: '$1', lineHeight: '$8' },
  '@desktop': { my: '$5', fontSize: '$2', lineHeight: '$9' },

  variants: {
    lang: {
      en: { fontFamily: '$fontDefault' },
      ja: { color: '$pink10', fontFamily: '$fontJapanese' },
      ko: { color: '$blue10', fontFamily: '$fontDefault' },
      zh: { color: '$red10', fontFamily: '$fontDefault' },
      th: { color: '$amber10', fontFamily: '$fontDefault' },
      ar: { color: '$green10', fontFamily: '$fontDefault' },
    },
    size: {
      adaptive: {
        fontSize: '$1',
        '@tablet': { fontSize: '$2' },
        '@desktop': { fontSize: '$3' },
      },
    },
    mode: {
      wrap: {
        display: 'inline-flex',
        flexWrap: 'wrap',
      },
    },
    gap: {
      1: { gap: '$1' },
      2: { gap: '$2' },
      3: { gap: '$3' },
    },
  },
})
