import { sanityClient } from '../lib/sanity/sanity'
import { Homepage } from '../lib/sanity/schema'
import { PortableText } from '@portabletext/react'

import HeadTag from '../components/shared/head'

export const getStaticProps = async () => {
  const homepage = (await sanityClient.getAll('homepage'))[0]

  return { props: { ...homepage } }
}

function Index ({ heading, metadata, missionStatement }: Homepage) {
  return (
    <>
      <HeadTag metadata={metadata}/>
      <h1>{heading}</h1>
      { missionStatement &&
        <PortableText
          value={missionStatement}
        />
      }
    </>
  )
}

export default Index
