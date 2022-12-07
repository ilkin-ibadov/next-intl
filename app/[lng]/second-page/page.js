import Link from 'next/link'
import i18next from '../../i18n'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

export default async function Page({ params: { lng } }) {
  const { t } = await i18next(lng, 'second-page')
  return (
    <>
      <main>
        <Header
          heading={t('h1')}
          title={t('title')}
        />
        <Link href={`/${lng}`}>
          <button type="button">
            {t('back-to-home')}
          </button>
        </Link>
      </main>
      <Footer lng={lng} path="/second-page" />
    </>
  );
}