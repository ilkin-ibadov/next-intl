import Link from 'next/link'
import { useTranslation } from 'lib/i18n'
import LanguageSelect from 'components/LanguageSelect'


export default async function Page({ params }) {
    const { lng } = await params
    const { t } = await useTranslation(lng, 'about')

    return (
        <main className='w-full flex items-center justify-center h-screen'>    
            <LanguageSelect />
            <h1>{t('message')}</h1>
        </main>
    )
}