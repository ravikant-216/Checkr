import { SxProps, createTheme } from '@mui/material/styles'
import { PALETTE } from './themeConstant'
import { inputLabelClasses, outlinedInputClasses } from '@mui/material'
declare module '@mui/material/styles' {
  interface TypeText {
    white: string
    highEmphasis?: string
    mediumEmphasis?: string
    lowEmphasis?: string
  }

  interface Palette {
    accent: {
      ACCENT_BLUE: string
      ACCENT_LIGHT_BLUE: string
      ACCENT_GREEN: string
      ACCENT_LIGHT_GREEN: string
      ACCENT_YELLOW: string
      ACCENT_LIGHT_YELLOW: string
      ACCENT_RED: string
      ACCENT_LIGHT_RED: string
    }
    structural: {
      STRUCTURAL_WHITE: string
      STRUCTURAL_STROKE: string
      STRUCTURAL_ICON_LIGHT: string
      STRUCTURAL_ICON_DARK: string
      STRUCTURAL_OVERLAY: string
      STRUCTURAL_SHADOW: string
    }
    shadow: {
      SHADOW_GEAY: string
    }
  }

  interface PaletteOptions {
    accent: {
      ACCENT_BLUE: string
      ACCENT_LIGHT_BLUE: string
      ACCENT_GREEN: string
      ACCENT_LIGHT_GREEN: string
      ACCENT_YELLOW: string
      ACCENT_LIGHT_YELLOW: string
      ACCENT_RED: string
      ACCENT_LIGHT_RED: string
    }
    structural: {
      STRUCTURAL_WHITE: string
      STRUCTURAL_STROKE: string
      STRUCTURAL_ICON_LIGHT: string
      STRUCTURAL_ICON_DARK: string
      STRUCTURAL_OVERLAY: string
      STRUCTURAL_SHADOW: string
    }
    shadow: {
      SHADOW_GEAY: string
    }
  }
  interface PaletteColor {
    '50': string
    '100': string
    '300': string
    '400': string
    '500': string
    '700': string
  }

  interface TypographyVariants {
    caption1: SxProps
    caption2: SxProps
  }

  interface TypographyVariantsOptions {
    caption1: SxProps
    caption2: SxProps
  }
}
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    heading4: true
    heading6: true
    subtitle1: true
    subtitle2: true
    body1: true
    body2: true
    caption1: true
    caption2: true
    overline: true
  }
}

const theme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          [`& .${outlinedInputClasses.input}`]: {
            padding: '8px 12px',
          },
          [`.${inputLabelClasses.root}`]: {
            fontWeight: '400',
          },
          borderRadius: '6px',
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: PALETTE.STRUCTURAL_STROKE,
            },
            '&:hover fieldset': {
              borderColor: PALETTE.STRUCTURAL_STROKE,
            },
            '&.Mui-focused fieldset': {
              borderColor: PALETTE.STRUCTURAL_STROKE,
            },
            borderRadius: '6px',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: '4px',
        },
      },
    },
  },
  palette: {
    shadow: {
      SHADOW_GEAY: PALETTE.SHADOW_GRAY,
    },
    primary: {
      main: PALETTE.PRIMARY_500,
      50: PALETTE.PRIMARY_50,
      100: PALETTE.PRIMARY_100,
      300: PALETTE.PRIMARY_300,
      400: PALETTE.PRIMARY_400,
      500: PALETTE.PRIMARY_500,
      700: PALETTE.PRIMARY_700,
    },
    accent: {
      ACCENT_BLUE: PALETTE.ACCENT_BLUE,
      ACCENT_LIGHT_BLUE: PALETTE.ACCENT_LIGHT_BLUE,
      ACCENT_GREEN: PALETTE.ACCENT_GREEN,
      ACCENT_LIGHT_GREEN: PALETTE.ACCENT_LIGHT_GREEN,
      ACCENT_YELLOW: PALETTE.ACCENT_YELLOW,
      ACCENT_LIGHT_YELLOW: PALETTE.ACCENT_LIGHT_YELLOW,
      ACCENT_RED: PALETTE.ACCENT_RED,
      ACCENT_LIGHT_RED: PALETTE.ACCENT_LIGHT_RED,
    },
    text: {
      lowEmphasis: PALETTE.TEXT_LOW_EMPHASIS,
      mediumEmphasis: PALETTE.TEXT_MEDIUM_EMPHASIS,
      highEmphasis: PALETTE.TEXT_HIGH_EMPHASIS,
    },
    structural: {
      STRUCTURAL_WHITE: PALETTE.STRUCTURAL_WHITE,
      STRUCTURAL_STROKE: PALETTE.STRUCTURAL_STROKE,
      STRUCTURAL_ICON_LIGHT: PALETTE.STRUCTURAL_ICON_LIGHT,
      STRUCTURAL_ICON_DARK: PALETTE.STRUCTURAL_ICON_DARK,
      STRUCTURAL_OVERLAY: PALETTE.STRUCTURAL_OVERLAY,
      STRUCTURAL_SHADOW: PALETTE.STRUCTURAL_SHADOW,
    },
  },

  typography: {
    fontFamily: ['Inter'].join(','),
    h1: {
      fontSize: '20px',
      fontWeight: 500,
      fontStyle: 'normal',
      lineHeight: '30px',
      textTransform: 'none',
    },
    h2: {
      fontSize: '18px',
      fontWeight: 500,
      fontStyle: 'normal',
      lineHeight: '28px',
      textTransform: 'none',
    },
    subtitle1: {
      fontSize: '16px',
      fontWeight: 500,
      fontStyle: 'normal',
      lineHeight: '24px',
      textTransform: 'none',
    },
    body1: {
      fontSize: '14px',
      fontWeight: 500,
      fontStyle: 'normal',
      lineHeight: '20px',
      textTransform: 'none',
    },
    body2: {
      fontSize: '14px',
      fontWeight: 400,
      fontStyle: 'normal',
      lineHeight: '20px',
      textTransform: 'none',
    },
    caption1: {
      fontSize: '12px',
      fontWeight: 500,
      fontStyle: 'normal',
      lineHeight: '18px',
      textTransform: 'none',
    },
    caption2: {
      fontSize: '12px',
      fontWeight: 400,
      fontStyle: 'normal',
      lineHeight: '18px',
      textTransform: 'none',
    },
  },
  spacing: 4,
})

export default theme
