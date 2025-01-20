import Link from 'next/link'
import { useTranslation } from '../../i18n'
import LanguageSelect from '../_components/common/LanguageSelect'

export default async function Page({ params }) {
  const { lng } = await params
  const { t } = await useTranslation(lng, 'second-page')
  
  return (
    <>
      <main>
      <LanguageSelect />
        <Link href={`/${lng}`}>
          <button type="button">
            {t('back-to-home')}
          </button>
        </Link>
      </main>
    </>
  )
}