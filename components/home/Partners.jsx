'use client'
import { useLocale } from '../../context/LanguageProvider'
export default function Partners(){ const { t } = useLocale(); return (<section className="mt-8 max-w-6xl mx-auto px-6"><div className="grid md:grid-cols-4 gap-4">{t.partners.map((p,i)=>(<div key={i} className="bg-white p-4 rounded shadow">{p}</div>))}</div></section>) }
