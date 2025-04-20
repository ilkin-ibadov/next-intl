import './global.css'

import { dir } from 'i18next'
import { languages, fallbackLng } from 'lib/i18n/settings'
import { useTranslation } from 'lib/i18n'

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}

export async function generateMetadata({ params }) {
  let { lng } = await params
  if (languages.indexOf(lng) < 0) lng = fallbackLng
  const { t } = await useTranslation(lng, "client-page")
  return {
    title: t('title'),
    description: 'A playground to explore new Next.js 13/14 app directory features such as nested layouts, instant loading states, streaming, and component level data fetching.'
  }
}

export default async function RootLayout({
  children,
  params
}) {
  const { lng } = await params
  return (
    <html lang={lng} dir={dir(lng)}>
      <head />
      <body>
        {children}
      </body>
    </html>
  )
}
