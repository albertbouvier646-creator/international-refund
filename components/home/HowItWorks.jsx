'use client'
import { useLocale } from '../../context/LanguageProvider'
export default function HowItWorks(){ const { t } = useLocale(); return (<section id="how-it-works" className="mt-12 max-w-6xl mx-auto px-6"><h2 className="text-2xl font-semibold mb-4">{t.how.title}</h2><p className="text-gray-600">{t.how.desc}</p></section>) }
