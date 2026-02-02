"use client"
import { Language } from "@/types/language"
import { Globe } from "lucide-react"
import { useLocale } from "next-intl"
import { Link, usePathname } from "@/i18n/navigation"
import { useParams } from "next/navigation"
import { useRef, useState } from "react"



export default function LanguageSwitch() {
   const languages = [
      { code: Language.EN, flag: Language.EN.toUpperCase() },
      { code: Language.VI, flag: Language.VI.toUpperCase() },
   ]
   const [open, setOpen] = useState(false)
   const ref = useRef<HTMLDivElement>(null)
   const locale = useLocale()
   const pathname = usePathname()
 
   const params = useParams<{ slug: string }>()
   const slug = params.slug

   const isDynamicPathname = (
      value: typeof pathname
   ): value is "/news/[slug]" =>
      value === "/news/[slug]"


   return <div className="relative " ref={ref}>
      <button
         onClick={() => setOpen(v => !v)}
         className="flex h-10 w-10 items-center justify-center rounded-xl hover:bg-gray-200 cursor-pointer"
      >
         <Globe />
      </button>
      {open && (
         <ul className="absolute right-0 w-20 rounded-xl border shadow-lg overflow-hidden">
            {languages.map(lang => (
               <li key={lang.code}>
                  <Link
                     locale={lang.code}
                     href={
                        isDynamicPathname(pathname)
                           ? { pathname, params: { slug: slug ?? "" } }
                           : pathname
                     }
                     className={`block text-base p-2 hover:bg-gray-100 ${locale === lang.code ? "bg-gray-200" : ""
                        }`}
                     onClick={() => setOpen(false)}
                  >
                     {lang.flag}
                  </Link>
               </li>
            ))}
         </ul>
      )}
   </div>
}