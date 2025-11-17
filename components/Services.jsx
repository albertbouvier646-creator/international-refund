'use client'
import { useLocale } from '../context/LanguageProvider'
export default function Services(){ const { t } = useLocale(); return (<section id='services' className='grid md:grid-cols-3 gap-6 mt-8'>{t.services.map((s, i)=>(<div key={i} className='bg-white p-6 rounded-lg shadow-sm'><h3 className='font-semibold text-lg'>{s.title}</h3><p className='mt-2 text-gray-600'>{s.desc}</p></div>))}</section>) }
