'use client'
import { useLocale } from '../../context/LanguageProvider'
export default function Hero(){
  const { t } = useLocale()
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <h1 className="text-4xl font-bold">{t.hero.title}</h1>
          <p className="mt-4 text-gray-600 max-w-lg">{t.hero.subtitle}</p>
          <div className="mt-6"><a className="bg-blue-600 text-white px-5 py-2 rounded">{t.hero.cta}</a></div>
        </div>
        <div className="w-80 h-80 bg-slate-50 rounded flex items-center justify-center">
          <img src="/logo.png" alt="logo" className="h-40 w-40 object-contain"/>
        </div>
      </div>
    </section>
  )
}
