import Image from "next/image";
import LanguageSwitch from "../common/LanguageSwitch";
import { useTranslations } from 'next-intl';


export default function Header() {
   const t = useTranslations("HomePage")
   return <header className="flex h-20 border-b py-2 px-80 mx-auto justify-between items-center text-(--main-color) uppercase font-bold text-base">
      <div className="h-full w-3/5 flex items-center justify-between ">
         <div className="h-full relative w-24">
            <Image alt='' src={'/images/logo.png'} fill className="h-full w-auto" />
         </div>
         <div>
            {t('Artist')}
         </div>
         <div>
            {t('News')}
         </div>
         <div>
            {t('Gallery')}
         </div>
         <div>
            {t('About')}
         </div>
      </div>
      <div>
         <LanguageSwitch />
      </div>
   </header>
}