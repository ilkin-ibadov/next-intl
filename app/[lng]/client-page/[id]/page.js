import * as React from 'react'
import Link from 'next/link'
import { useTranslation } from 'lib/i18n/client'
import LanguageSelect from 'components/LanguageSelect'

export async function generateMetadata({ params }) {
  let { id } = await params
  const response = await fetch("https://jsonplaceholder.typicode.com/users/" + id)
  const user = await response.json()

  return {
      title: user.name,
      description: 'A playground to explore new Next.js 13/14 app directory features such as nested layouts, instant loading states, streaming, and component level data fetching.'
  }
}

export default function Page({ params }) {
  const { lng } = React.use(params)
  // const { t } = useTranslation(lng, 'client-page')

  return (
    <main>
      <LanguageSelect />
      <Link href={`/${lng}`}>
        {/* <button type="button">
          {t('back-to-home')}
        </button> */}
      </Link>
    </main>
  )
}