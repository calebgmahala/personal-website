import { sanityClient } from '../lib/sanity/sanity'
import { Homepage } from '../lib/sanity/schema'
import { PortableText } from '@portabletext/react'

import HeadTag from '../components/shared/head'
import { applyTheme, buildTheme, iTheme } from '../lib/tailwind/theme'
import { useEffect } from 'react'

export const getStaticProps = async () => {
  const homepage = (await sanityClient.getAll('homepage'))[0]
  const basicSiteInformation = (await sanityClient.getAll('basicSiteInformation'))[0]
  const theme = await buildTheme(basicSiteInformation)

  return { props: { homepage, theme } }
}

const Index = ({ homepage, theme }: {homepage: Homepage, theme: iTheme}) => {
  const { heading, metadata, missionStatement } = homepage

  useEffect(() => {
    applyTheme(theme)
  }, [theme])

  return (
    <>
      <HeadTag metadata={metadata}/>
      <h1 className="
        bg-lightPrimaryColor1 dark:bg-darkPrimaryColor1
        text-lightSecondaryColor1 dark:text-darkSecondaryColor1"
      >
        {heading}
      </h1>
      { missionStatement &&
        <PortableText
          value={missionStatement}
        />
      }
    </>
  )
}

export default Index
