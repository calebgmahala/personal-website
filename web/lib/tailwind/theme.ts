import { BasicSiteInformation } from '../sanity/schema'

export interface iTheme {
  '--lightPrimaryColor1': string
  '--lightPrimaryColor2': string
  '--lightPrimaryColor3': string
  '--lightSecondaryColor1': string
  '--lightSecondaryColor2': string
  '--lightSecondaryColor3': string
  '--darkPrimaryColor1': string
  '--darkPrimaryColor2': string
  '--darkPrimaryColor3': string
  '--darkSecondaryColor1': string
  '--darkSecondaryColor2': string
  '--darkSecondaryColor3': string
}

/**
 * builds theme information from basic site data
 * @returns Theme object
 */
export const buildTheme = async ({ primaryColor1, primaryColor2, primaryColor3, secondaryColor1, secondaryColor2, secondaryColor3 }: BasicSiteInformation): Promise<iTheme> => {
  return {
    '--lightPrimaryColor1': primaryColor1?.light || '',
    '--lightPrimaryColor2': primaryColor2?.light || '',
    '--lightPrimaryColor3': primaryColor3?.light || '',
    '--lightSecondaryColor1': secondaryColor1?.light || '',
    '--lightSecondaryColor2': secondaryColor2?.light || '',
    '--lightSecondaryColor3': secondaryColor3?.light || '',
    '--darkPrimaryColor1': primaryColor1?.dark || '',
    '--darkPrimaryColor2': primaryColor2?.dark || '',
    '--darkPrimaryColor3': primaryColor3?.dark || '',
    '--darkSecondaryColor1': secondaryColor1?.dark || '',
    '--darkSecondaryColor2': secondaryColor2?.dark || '',
    '--darkSecondaryColor3': secondaryColor3?.dark || ''
  }
}

/**
 * Takes the given theme and builds out the style properties listed on iTheme.
 * We do this so that tailwind can pull these values into the theme colors
 * @param theme The theme to set
 */
export const applyTheme = (theme: iTheme | undefined): void => {
  if (!theme) {
    return
  }

  const root = document.documentElement

  Object.keys(theme).forEach((property) => {
    root.style.setProperty(property, theme[property])
  })
}
