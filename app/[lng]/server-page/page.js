import Link from 'next/link'
import { useTranslation } from 'lib/i18n'
import LanguageSelect from 'components/LanguageSelect'

export default async function Page({ params }) {
  const { lng } = await params
  const { t } = await useTranslation(lng, 'server-page')

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