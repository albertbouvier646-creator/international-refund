'use client'
import { useLocale } from '../context/LanguageProvider'
export default function Header(){
  const { lang, setLang } = useLocale()
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="International Refund" className="h-10 w-10 object-contain"/>
          <strong className="text-lg">International Refund</strong>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <button onClick={()=>setLang('fr')} className={`px-3 py-1 rounded ${lang==='fr'?'bg-blue-600 text-white':''}`}>FR</button>
          <button onClick={()=>setLang('en')} className={`px-3 py-1 rounded ${lang==='en'?'bg-blue-600 text-white':''}`}>EN</button>
          <button onClick={()=>setLang('es')} className={`px-3 py-1 rounded ${lang==='es'?'bg-blue-600 text-white':''}`}>ES</button>
        </div>
      </div>
    </header>
  )
}
