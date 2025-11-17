'use client'
import { useLocale } from '../context/LanguageProvider'
export default function Stats(){ const { t } = useLocale(); return (<section className='mt-12 grid grid-cols-2 md:grid-cols-4 gap-4'>{t.stats.map((s,i)=>(<div key={i} className='bg-white p-4 rounded text-center shadow-sm'><div className='text-2xl font-bold'>{s.value}</div><div className='text-sm text-gray-600'>{s.label}</div></div>))}</section>) }
