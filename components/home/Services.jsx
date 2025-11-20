'use client'
import { useLocale } from '../../context/LanguageProvider'
export default function Services(){ const { t } = useLocale(); return (<section id="services" className="mt-12 max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6">{t.services.map((s,i)=>(<div key={i} className="bg-white p-6 rounded shadow"><h3 className="font-semibold">{s.title}</h3><p className="text-gray-600 mt-2">{s.desc}</p></div>))}</section>) }
