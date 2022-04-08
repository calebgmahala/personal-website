import Head from 'next/head'
import { Metadata } from '../../lib/sanity/schema'

function HeadTag ({ metadata }:{ metadata:Metadata }) {
  const {
    title,
    description,
    keywords,
    author
  } = metadata
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
      </Head>
    </>
  )
}

export default HeadTag
