'use client'

import * as React from 'react'
import Link from 'next/link'
import { useTranslation } from 'lib/i18n/client'
import LanguageSelect from 'components/LanguageSelect'

export default function Page({ params }) {
  const { lng } = React.use(params)
  const { t } = useTranslation(lng, 'client-page')

  return (
    <main>
      <LanguageSelect />
      <Link href={`/${lng}`}>
        <button type="button">
          {t('back-to-home')}
        </button>
      </Link>
    </main>
  )
}