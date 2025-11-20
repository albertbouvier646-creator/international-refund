'use client'
import { useLocale } from '../../context/LanguageProvider'
export default function FAQ(){ const { t } = useLocale(); return (<section id="faq" className="mt-12 max-w-6xl mx-auto px-6"><h2 className="text-2xl font-semibold mb-4">{t.faq.title}</h2><div className="space-y-4">{t.faq.items.map((q,i)=>(<details key={i} className="bg-white p-4 rounded shadow"><summary className="font-medium">{q.q}</summary><p className="mt-2 text-gray-600">{q.a}</p></details>))}</div></section>) }
