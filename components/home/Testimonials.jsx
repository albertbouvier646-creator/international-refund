'use client'
import { useLocale } from '../../context/LanguageProvider'
export default function Testimonials(){ const { t } = useLocale(); return (<section id="testimonials" className="mt-12 max-w-6xl mx-auto px-6"><h2 className="text-2xl font-semibold mb-4">{t.testimonials.title}</h2><div className="grid md:grid-cols-3 gap-6">{t.testimonials.items.map((it,i)=>(<div key={i} className="bg-white p-4 rounded shadow">{it}</div>))}</div></section>) }
