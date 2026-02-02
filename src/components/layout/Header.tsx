import Image from "next/image";
import LanguageSwitch from "../common/LanguageSwitch";

export default function Header() {
   return <header className="flex h-20 px-80 mx-auto font-bebas items-center text-(--main-color)">
      <div className="h-full w-3/5 flex items-center justify-between text-xl">
         <div className="h-full relative w-24">
            <Image alt='' src={'/images/logo.png'} fill className="h-full w-auto" />
         </div>
         <div>
            Artist
         </div>
         <div>
            News
         </div>
         <div>
            Gallery
         </div>
         <div>
            About
         </div>
      </div>
      <div>
         <LanguageSwitch />
      </div>
   </header>
}