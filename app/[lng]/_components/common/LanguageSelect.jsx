"use client"

import { redirect } from "next/navigation"
import { languages } from "../../../i18n/settings"
import { usePathname } from 'next/navigation';

const LanguageSelect = () => {
  const pathname = usePathname().split('/');
  const route = pathname.slice(2).join('/');

  return (
    <select defaultValue={pathname[1]} onChange={(e) => 
     redirect(`/${e.target.value}/${route}`)
    }>
      {languages.map((lng) => (
        <option key={lng} value={lng}>
          {lng}
        </option>
      ))}
    </select>
  )
}

export default LanguageSelect