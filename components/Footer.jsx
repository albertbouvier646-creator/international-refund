'use client'
import { useLocale } from '../context/LanguageProvider'
export default function Footer(){ const { t, lang } = useLocale(); return (<footer className='mt-auto bg-gray-50 border-t'><div className='max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4'><div><strong>International Refund</strong><div className='text-sm text-gray-600'>{t.footer.rights}</div></div><div className='text-sm text-gray-600'>{t.footer.contact}</div></div></footer>) }
