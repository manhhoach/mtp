"use client"
import { Language } from "@/types/language"
import { Globe } from "lucide-react"
import { useLocale } from "next-intl"
import { useRef, useState } from "react"



export default function LanguageSwitch() {
   const languages = [
      { code: Language.EN, name: "English", flag: "EN" },
      { code: Language.VI, name: "Tiếng Việt", flag: "VI" },
   ]
   const [open, setOpen] = useState(false)
   const ref = useRef<HTMLDivElement>(null)
   const locale = useLocale()
   return <div className="relative" ref={ref}>
      <button
         onClick={() => setOpen(v => !v)}
         className="flex h-10 w-10 items-center justify-center rounded-md hover:bg-gray-200"
      >
         <Globe />
      </button>
   </div>
}