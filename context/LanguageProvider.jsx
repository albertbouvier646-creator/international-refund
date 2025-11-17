'use client'
import { createContext, useState, useContext, useEffect } from 'react'
import en from '../locales/en.json'
import fr from '../locales/fr.json'
import es from '../locales/es.json'
const LocaleContext = createContext()
const map = { en, fr, es }
export function useLocale(){ return useContext(LocaleContext) }
export default function LanguageProvider({ children }){ const [lang, setLang] = useState('fr'); const [t, setT] = useState(map['fr']); useEffect(()=>{ const saved = typeof window !== 'undefined' && localStorage.getItem('i18n_lang'); if(saved && map[saved]) setLang(saved) },[]); useEffect(()=>{ setT(map[lang] || map['fr']); if(typeof window !== 'undefined') localStorage.setItem('i18n_lang', lang) },[lang]); return (<LocaleContext.Provider value={{ lang, setLang, t }}>{children}</LocaleContext.Provider>) }
