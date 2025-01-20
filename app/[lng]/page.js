import Link from 'next/link'
import { languages, fallbackLng } from '../i18n/settings'
import { useTranslation } from '../i18n'
import LanguageSelect from './_components/common/LanguageSelect'

export default async function Page({ params }) {
  let { lng } = await params
  if (!languages.includes(lng)) lng = fallbackLng
  const { t } = await useTranslation(lng)

  return (
    <main>
      <LanguageSelect />
      <div>
        <Link href={`/${lng}/server-page`}>
          <button type="button">{t('to-server-page')}</button>
        </Link>

        <Link href={`/${lng}/client-page`}>
          <button type="button">{t('to-client-page')}</button>
        </Link>
      </div>
    </main>
  )
}
